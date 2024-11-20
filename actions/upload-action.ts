'use server'

import { AssemblyAI } from 'assemblyai'







export async function transcribeUploadfile(resp: { serverData: { uploadedBy: string; file: any; } }[]) {


//assembly api error handling
    if(!process.env.NEXT_PUBLIC_ASSEMBLY_API_KEY){

        return {
            success: false,
            message: "Assembly Api Key error",
           
        };


    }


    const assemblyai = new AssemblyAI({
        apiKey:  process.env.NEXT_PUBLIC_ASSEMBLY_API_KEY,
    });

    // Handle missing response
    if (!resp || resp.length === 0) {
        return {
            success: false,
            message: "File upload failed: no response received",
            data: null
        };
    }



    const userId = resp[0].serverData.uploadedBy; //user id basically auth id which we return in uploadthing 
    const fileUrl = resp[0].serverData.file.url; //file url via uploadthing
    const name = resp[0].serverData.file.name;  //file name



    // Handle missing file URL
    if (!fileUrl) {
        return {
            success: false,
            message: "File is missing from the response",
            data: null
        };
    }


//params for feeding ai
const params = {

    audio: fileUrl,
    
    speaker_labels: true
   

}


    try {
        // Create a transcription using AssemblyAI
        const transcript = await assemblyai.transcripts.transcribe(params);
//console.log(transcript);

        // Wait for the transcription to complete
       // const result = await assemblyai.transcripts.waitUntilReady(transcript.id);
      //  console.log(result);
        



        // Return the transcription result along with userId
        return {
            success: true,
            message: "Transcription completed successfully",
            data: {
                transcription: transcript.text,
                
            },
            userId
        };

        

    } catch (error) {
        return {
            success: false,
            message: "Transcription failed: " + (error as Error).message,
            data: null,
            userId
        };
    }
}

