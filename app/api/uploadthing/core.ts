import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next"; 




//A TypeScript type from uploadthing that ensures the file router object is correctly defined.
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();
//This initializes the uploadthing file uploader instance f, which will be used to configure upload rules and middleware.


const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function


/*A placeholder/fake authentication function for demonstration purposes.
It takes a Request object as input and always returns a hardcoded user ID (fakeId).
Replace this with a real authentication function for production.*/


export const ourFileRouter = { //ourFileRouter is an object that defines routes for handling different file uploads.
  



 // Defines a route named videoOrAudioUploader for uploading files.
//This route is configured to accept only video files with a maximum size of 32MB.

//A function that runs before the upload begins.
//Used here to ensure that the user is authenticated.


/*This function runs after the upload is successfully completed.
It receives an object containing:
metadata: Includes any data returned by the middleware, such as userId.
file: Information about the uploaded file, like its URL.*/


  videoOrAudioUploader: f({ video: { maxFileSize: "32MB" } })
    .middleware(async ({ req }) => {
      
      const user = await currentUser();

    
      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // 
    //  console.log("Upload complete for userId:", metadata.userId);

     // console.log("file url", file.url);

      // 
      return { uploadedBy: metadata.userId,file };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
