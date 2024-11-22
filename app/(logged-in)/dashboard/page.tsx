


import { Badge } from '@/components/ui/badge'
import Gradient from '@/components/ui/Gradient'
import Uploadform from '@/components/upload/Upload-form'
import UploadPost from '@/components/upload/upload-update'
import { pricingPlans } from '@/lib/constants'
import getDbConnect from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'


export default async function Dashboard() {


  //dashboard/upload page


  //authenticated user
  const clerkuser = await currentUser() || null

//console.log(clerkuser);


  let userId = clerkuser?.id
  let status = "basic"

console.log(clerkuser?.id);


  //if not authenticated then will redirect to sign-in
  //redirect will only use in server component

  if (!clerkuser) {

    redirect("/sign-in")
  }



  //email add for the auth user

  const email = clerkuser?.emailAddresses[0]?.emailAddress

console.log(email);


  //console.log(clerkuser.id);//id for auth user

  //console.log(clerkuser?.emailAddresses[0]?.emailAddress);




  //const blog = await createBlogPost()
  //console.log("blog",blog);



  //calling database connection

  const sql = await getDbConnect()
  //const response = await sql`SELECT version()`


  //plantype and status for ui logics
  let planType = 'starter'





  //query for select everything where email is -- auth email
  //so basically if user from database have different email(strip checkout email) user if wont be create
  //for this user auth email and stripe payment email should be same



  const user = await sql`SELECT * from users where email = ${email}`
  console.log(user);


  //if any user exist in db and its len is > 0 means the user array have 1 object 

  if (user && user.length > 0) {


    userId = clerkuser?.id //setting user id
    console.log(userId);


    await sql`UPDATE users set user_id = ${userId} where email = ${email}`//updating in database where email is same

    status = user[0]?.status || 'basic'
    //set status of the user(mens he have a subscription) that he is active or not or set inactive


    //user have a price id means he have purchased the @399 or @999 so that we can use condition 
    const price_id = user[0]?.price_id || "price_1QFVCEGwp4u3fMJXmHXR3maT"


    console.log(price_id);

    planType = pricingPlans.filter((plan) => plan.pricingId === price_id)[0]?.name
    console.log(planType);
    


    //filter the pricing plan object which matches the price id of the user which comes from db and after filtering out it gives us an array so we fetch that name the the property of which plan basic or prop


    //console.log(planType);
  }


  //setting some data
  const isActive = status === 'active'
  const isCancelled = status === 'cancelled'
  const isBasicPlan = planType === "Basic Plan" //if plan type from pricing plan and user price id 
  const isProPlan = planType === "Pro Plan"





  
  if (isBasicPlan) {

    const user = await sql`SELECT * FROM users WHERE user_id = ${userId}`
    const posts = await sql`SELECT * FROM posts WHERE user_id = ${userId}`

    console.log(user);
   // console.log(posts);

    if (posts.length === 5) {
      await sql`DELETE  FROM users WHERE user_id = ${userId}`
    }



  }

  return (
    <div className='w-full'>



      <Gradient></Gradient>

      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 py-4 sm:py-8 lg:px-8 mt-16'>

        <div className='flex flex-col items-center justify-center gap-6 md:gap-11 text-center'>



          {/*plantype via pricing plan id and user price id we can dinf or fetch out which plan exist means vasic or plan plan and show in ui*/}

          <Badge className='bg-gradient-to-r from-purple-700 to-pink-800 text-white px-4 py-1 text-lg font-semibold capitalize rounded-full'>{planType}</Badge>


          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl capitalize">Start creating amazing content</h2>


          <p className="text-base sm:text-lg text-gray-600 px-2">Upload your audio and video files and let AI work its magic to transform your content</p>



          <div className="px-4">

            {/* upload post basically red warning that upload form wont show without subscription so basically check the status*/}
            {planType === "starter" && <UploadPost></UploadPost>}

            {/* user have which plan ? */}


            {isBasicPlan && (
              <div className="bg-gray-50 shadow-purple-200 shadow-lg p-4 rounded-lg">
                <span className="text-purple-600 font-semibold text-sm sm:text-base">You have access to create <span className="text-amber-500 font-bold">5</span> blog posts with our <span className="text-amber-500 font-bold">Basic Plan</span> features.</span>
              </div>
            )}


            {isProPlan && (
              <div className="bg-gray-50 shadow-purple-200 shadow-lg p-4 rounded-lg">
                <span className="text-purple-600 font-semibold text-sm sm:text-base">You have access to create <span className="text-amber-500 font-bold">50</span> blog posts with our <span className="text-amber-500 font-bold">Pro Plan</span> premium features.</span>
              </div>
            )}

          </div>



          {/* if user is active than show the upload form* */}
          {isActive && <Uploadform></Uploadform>}

        </div>
      </div>
    </div>
  )
}


