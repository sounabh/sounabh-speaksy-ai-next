import { Button } from '@/components/ui/button';
import getDbConnect from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const user = await currentUser();

  const sql = await getDbConnect();

  // Fetching the latest posts for the user
  const result = await sql`
    SELECT id, title, content, created_at 
    FROM posts 
    WHERE user_id = ${user?.id} 
    ORDER BY created_at DESC`;



    const handleDelete = async(id:number) => {


const result = await sql`DELETE `

    }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Your Posts
      </h1>

      {result.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.map((post: any) => (
            <div
              key={post.id}
              className="rounded-lg shadow-lg border border-gray-200 p-6 bg-white hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">
                {post.content}
              </p>
              <p className="text-sm text-gray-500 mt-3">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
              <Link
                href={`/post/${post.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                Read More →
              </Link>
             
            </div>
            
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No posts found. Create your first post now!
        </p>
      )}
    </div>
  );
};

export default page;
