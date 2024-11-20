import type { Metadata } from "next";

import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google"
import { cn } from "@/lib/utils";
import Header from "@/components/ui/home/header";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { ORIGIN_URL } from "@/lib/constants";





const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});




export const metadata: Metadata = {
  title: "Speaksy ai",
  description: "Turn your videos/audios into blog post with the help of ai",
  icons:{
    icon:"/icon.ico"
  },
  metadataBase:new URL(ORIGIN_URL),
  alternates:{
    canonical:ORIGIN_URL
  }
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <ClerkProvider>


      <html lang="en">
        <body
          className={cn('h-full  ', font.className)}
        >

          <Header></Header>

          {children}

          <Toaster></Toaster>
          
        </body>
      </html>
    </ClerkProvider>


  );
}
