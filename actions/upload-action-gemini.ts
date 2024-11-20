/*"use server"

//gemini ai import 
import {
    GoogleGenerativeAI, HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";




// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";


//passing prompt from assembly ai to gemini ai 

export async function createBlogPost(prompt: string) {



    const apiKey = process.env.GEMINI_API_KEY;


    //if gemini key doesnt exist or key related problem
    if (!apiKey) {

        return {
            success: false,
            message: "Gemini Api Key error"
        };


    }

    const genAI = new GoogleGenerativeAI(apiKey);
    try {


        // Initialize the model
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

      
        //result


        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text());
        const response = result.response
        const text = response.text()



        return {
            success: true,
            message: "Blog post generated successfully",
            data: {
                content: text
            }
        };
    }









    catch (error) {
        return {
            success: false,
            message: "Blog post generation failed: " + (error as Error).message,
            data: null
        };
    }
}*/