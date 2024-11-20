import {
    generateReactHelpers,
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
  
 import { ourFileRouter, type OurFileRouter } from "@/app/api/uploadthing/core";
  
  export const {useUploadThing } = generateReactHelpers<typeof ourFileRouter>()
  