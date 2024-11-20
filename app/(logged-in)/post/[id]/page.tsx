import ContentEditor from '@/components/content/Content-Edior'
import getDbConnect from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'



interface Post {
  id: string;
  user_id: string;
  title: string;
  content: string;
  // Add other fields as necessary
}


//params id which is fetch from dynamic route name id
const PostPage = async ({ params }: any) => {

  const { id } = await params

  const user = await currentUser()

  if (!user) {

    redirect("/sign-in")
  }

  if (!id) {
    redirect("/404");
    return null; // Prevent further rendering
  }


  const sql = await getDbConnect()
  //define a structure that posts will always be and empty array and have some type security
  let posts: Post[] = [];

  //fetching user post from database
  const result = await sql`SELECT * FROM posts where user_id = ${user.id} and id = ${id}`



  posts = result as Post[];
  //console.log("post", posts);




  return (
    <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-0 mb-12 mt-28'>

      <div className='flex justify-between items-center border-b-2 pb-4 border-gray-200/50'>

        <div>


          <h2 className='text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3'>Edit your post</h2></div>
        <p className='text-gray-600'>Start Editing your blog post below</p>

      </div>


      {/* mark down editor and passing the posts fetch from database* */}
      <ContentEditor posts={posts} ></ContentEditor>


    </div>
  )
}

export default PostPage
