'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import {
  GoogleGenerativeAI, HarmCategory,
  HarmBlockThreshold
} from "@google/generative-ai";
import { useToast } from '@/hooks/use-toast'

import { useUploadThing } from '@/utils/uploadthing'
import { transcribeUploadfile } from '@/actions/upload-action'

import handleuserPost from '@/lib/Post-helper'
import { useRouter } from 'next/navigation'
import { error } from 'console'






//zod schema for file verification
const fileSchema = z.object({


  file: z.instanceof(File, { message: "invalid file" })
    .refine((file) => file.size <= 20 * 1024 * 1024, 'File size must be less than or equal to 20MB') // size verification
    .refine(
      (file) => file.type.startsWith('audio/') || file.type.startsWith('video/'), //start with audio and video
      'File must be an audio or video file'
    )
})





function Uploadform() {


  /*
  

*/


  const { toast } = useToast()



  const router = useRouter()



  //uploading the file via calling the route of uploathing 

  const { startUpload } = useUploadThing("videoOrAudioUploader", {


    //everything will work after uploading the file 
    onClientUploadComplete: async (res) => { // on success it giving a res

      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

      if (!apiKey) {
    
        return
    
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
    
    
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      };
    
    
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              { text: "write a long blog post for this prompt in json format but in one paragraph content not multi\nI was playing a game with my 9 year old son John Leslie and I beat him 10 straight games in a game called Connect 4. And finally I said, John Leslie, I'm bored, I don't want to play you anymore. And I got up, I said I'm ready to go to sleep now. John Leslie said no, you can't go now Dad. I said why? He said, it's not over until I win. That was his attitude. John Leslie won and he got up and he yawned and he said I'm ready to go to sleep now. And I'm saying to you, what if all of us took that attitude? The cause repossessed. Nobody believed in you. You've lost again and again and again. The lights are cut off but you're still looking at your dream, reviewing it every day and say to yourself, it's not over until I win." },
            ],
          },
          {
            role: "model",
            parts: [
              { text: "{\n  \"title\": \"The Unwavering Spirit of 'It's Not Over Until I Win'\",\n  \"author\": \"A Proud Dad\",\n  \"date\": \"October 26, 2023\",\n  \"tags\": [\"perseverance\", \"resilience\", \"winning\", \"fatherhood\", \"inspiration\"],\n  \"content\": \"Last night, I soundly defeated my 9-year-old son, John Leslie, ten times in a row at Connect Four.  Feeling smug, I declared the game over and announced my intention to go to bed, only to be met with a resolute, 'No, Dad, it's not over until *I* win!'  This unwavering determination from my son, who then proceeded to finally win a game, leaving me exhausted but deeply impressed, got me thinking.  How often do we give up on our dreams, our businesses, our goals, the moment we face setbacks?  How often do we let the repossession notice, the string of failures, the dark room with no electricity extinguish the fire within us? John Leslie's simple yet profound statement, 'It's not over until I win,' encapsulates the incredible power of perseverance.  It’s a reminder that true success isn't solely defined by the absence of failure, but by the unwavering commitment to keep fighting, keep striving, keep believing, until the final victory is achieved. This isn't just about games; it's a life lesson that applies to every aspect of our lives – a call to action to embrace that same spirit, to re-examine our goals with a renewed sense of resilience, and to remember that the race isn't over until we win, no matter how many times we've fallen before.\"\n}\n" },
            ],
          },
        ],
      });


      try {

        if (res) {





          toast({
            title: "Success!",
            description: "File uploaded successfully now wait for further🤖",
            variant: "default",
            className: "bg-pink-500 text-white"
          });

          console.log("Files: ", res);





          // Start transcription via assembly ai
          const result = await transcribeUploadfile(res);


          console.log("Result: ", result);



          if (!result.success) {
            throw new Error(result.message);
          }





          //via result we gets our data
          const prompt = result?.data?.transcription;

          //  const titleArr = result?.data?.wordTimings?.slice(0, 5).map((w) => w.text) //extracting thr title array

          // const title = titleArr?.join(" ")


          console.log("Prompt: ", prompt);


            const userId = result.userId;

          //  console.log("User ID: ", userId);

          if (!prompt) {
            console.log("no prompt");
            return

          }

          const resultG = await chatSession.sendMessage(` write a long blog post for this prompt in json format but in one paragraph content not multi. ${prompt}`);


          const blog =  resultG.response.text()


          const blogContent = JSON.parse(blog)

          const content = blogContent.content

          const numWords = 5


          const title = blogContent.title

          console.log("gemini",blogContent?.content);


          toast({
            title: "blog post generated",
            description: "Your blog content is generated succesffully 🎉",
            variant: "default",
            className: "bg-cyan-500 text-white"
          });






          const postId = await handleuserPost(userId, title, content)


          router.push(`post/${postId}`)

          /* if (true) {
 
 
             
 
            
 
 
 
             //calling the gemini ai fucntion and getting its result
              const blog = await createBlogPost("blog post on films and entertainment")
              console.log("gemini",blog);
              
             const blogContent = blog?.data?.content
 
 
             
 
 
              console.log("blog",blog);
 
            // console.log(userId,title,blogContent);
 
             //sending to database
            // const postId = await handleuserPost(userId, title, blogContent)
 
 
 
             //naviagte
 
 
           //  router.push(`post/${postId}`)
 
 
             // console.log(postId);
 
 
 
 
           }*/





        }
        //if any error occured in try then execute catch block 
      }

      catch (error) {


        toast({
          title: "Process Failed",
          description: error instanceof Error ? error.message : "An error occurred during processing",
          variant: "destructive"
        });
      }
    },

    //error occured on uploading 
    onUploadError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });



  //vefication for zod and upload 

  const handleSubmit = async (formData: FormData) => {


    //getting file from formdata zod 
    const file = formData.get("file") as File
    const validateFields = fileSchema.safeParse({ file }) //parsing valiadting


    //error
    if (!validateFields.success) {
      console.log("Validation error:", validateFields.error.flatten().fieldErrors)
      toast({
        title: "Something went wrong",
        variant: "destructive",
        description: validateFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file",
      })



      return;
    }



    //if file 
    try {
      if (file) {


        await startUpload([file]) //calling the upload function and after this onupload function complete will trigger

      }





    } catch (err) {
      toast({
        title: "Upload failed",
        variant: "destructive",
        description: "There was an error uploading your file"
      });
    }
  }



  return (
    <div className="w-full max-w-2xl mx-auto">

      {/*server action*/}
      <form action={handleSubmit} className='flex flex-col gap-6'>


        <div className='p-6 bg-white rounded-lg shadow-md border border-gray-200'>

          <div className='flex flex-col gap-4'>

            <label htmlFor="file" className="text-sm font-medium text-gray-700">
              Upload Audio/Video File
            </label>


            <Input
              type='file'
              id='picture'
              required
              accept='audio/*,video/*'
              name='file'
              className='h-24 cursor-pointer bg-gray-50 px-4 file:border-0 file:bg-transparent file:text-sm file:font-medium hover:bg-gray-100 transition-colors'
            />


            <Button
              type="submit"
              className='w-full bg-cyan-600 hover:bg-cyan-700 transition-colors py-6 text-lg font-medium'
            >

              Transcribe File

            </Button>

          </div>

        </div>

      </form>

    </div>
  )
}

export default Uploadform
