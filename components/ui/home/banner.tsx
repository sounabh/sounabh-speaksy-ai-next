import React from 'react'
import { Button } from '../button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function Banner() {

  //banner section 
  return (
    <section className='lg:max-w-6xl mx-auto flex flex-col gap-5 z-0 items-center px-2 justify-center py-28 sm:pt-32 transition-all animate-in'>



      {/* banner heading */}

      <h1 className='py-6 text-3xl md:text-5xl lg:text-6xl text-center'>Transform Your Videos into <span className='underline underline-offset-8  decoration-dashed decoration-pink-500'> Engaging</span>{" "}Content</h1>


      {/* banner Subheading */}
      <h2 className='text-center px-4 lg:px-0 lg:max-w-4xl lg:text-3xl lg:pt-6'>Convert your video or voice into a Blog Post in seconds with the power of AI!</h2>





      <Button
        variant={"link"}
        className='mt-6 text-xl rounded-full px-12 py-8 lg:mt-20 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 text-center font-bold shadow-lg hover:no-underline text-white'
      >
        <Link href={"#pricing"} className='flex gap-2 items-center'>
          <span className='relative'>Get Speakssy</span>
          <ArrowRight className='animate-pulse'></ArrowRight>
        </Link>
      </Button>











    </section>
  )
}

export default Banner
