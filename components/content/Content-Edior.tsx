'use client'

import { useState } from "react";
import { ForwardRefEditor } from "./ForwardRef"
import getDbConnect from "@/lib/db";



interface Post {
    content: string;
    title: string;
    id: string;
}


export default function ContentEditor({ posts }: { posts: Post[] }) {

    const [markdownContent, setMarkdownContent] = useState(posts[0]?.content || "");



    const handleChangeContent = (newContent: string) => {
        //  console.log("Updated content:", newContent);  // Log content here

        setMarkdownContent(newContent);
    };






    const handleUpdateContent = async () => {
        const sql = await getDbConnect()
        const updated_content = await sql`UPDATE posts SET content = ${markdownContent} WHERE id = ${posts[0].id} RETURNING content`;

        //console.log(updated_content);



        // console.log("Final content to send to server:", markdownContent); 


        // Log content here
        // Here, you can send the request to the backend, but for now, we'll just log it.
    };


    const handleDownloadContent = () => {
        const fileName = `${posts[0].title}.md`;  // You can set the file extension to `.md` for markdown files
        const blob = new Blob([markdownContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);  // Clean up after download
    };



    return (
        <div className="">

            <ForwardRefEditor
                markdown={markdownContent}
                className="markdown-content border-dotted border-gray-200 border-2 p-4 rounded-md animate-in ease-in-out duration-75"
                onChange={handleChangeContent} // Pass the change handler to update content
            />
            <div className="flex items-center justify-between">
                <button onClick={handleUpdateContent} className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded" >
                    Save Changes
                </button>
                <button onClick={handleDownloadContent} className="mt-4 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded" >
                    Export
                </button>
            </div>


        </div>
    )


}