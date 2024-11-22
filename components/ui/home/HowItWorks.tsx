import { MoveRight } from 'lucide-react'
import React from 'react'

function HowItWorks() {

    //working page 
    return (
        <div>
            <div className='mt-14 px-14'>


                <div className='flex items-center justify-center w-full pb-6'><h2 className='font-bold text-xl uppercase mb-8 text-purple-600'>How It Works</h2> </div>



                <h3 className='flex justify-center mb-24 text-center font-bold'>Manage your content for Seo focused blog posts</h3>


                {/*concept via emoji and arrows */}


                <div className='flex items-center justify-center w-full'>

                    <div className='flex items-center justify-center  lg:gap-24'>

                        <div className='flex flex-col gap-4'>

                            <p className='text-7xl text-center'>📽️</p>
                            <p className='text-center font-medium'>Upload a video</p>


                        </div>

                        <MoveRight size={65} strokeWidth={0.5} className='text-purple-500'></MoveRight>

                    </div>

                    <div className='flex items-center justify-center gap-4 lg:gap-24'>


                        <div className='flex flex-col gap-4'>

                            <p className='text-7xl text-center'>🧠</p>
                            <p className='text-center font-medium'>AI Magic </p>

                        </div>

                        <MoveRight size={65} strokeWidth={0.5} className='text-purple-500'></MoveRight>
                    </div>

                    <div className='flex items-center justify-center gap-4 lg:gap-24'>

                        <div className='flex flex-col gap-4'>

                            <p className='text-7xl text-center'>📰</p>
                            <p className='text-center font-medium'>Blog</p>

                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default HowItWorks
