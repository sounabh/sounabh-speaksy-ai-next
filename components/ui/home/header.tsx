import { UserButton } from '@clerk/nextjs'
import { currentUser, getAuth } from '@clerk/nextjs/server'
import { Ghost } from 'lucide-react'
import Link from 'next/link'


import React from 'react'

const Header = async () => {

    const user = await currentUser()
    // console.log(user);



    //navlink component
    const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
        return <Link href={href} className='transition-colors duration-200 text-gray-600 hover:text-purple-500 '>
            {children}
        </Link>


    }


    return (
        <nav className='container flex items-center justify-between px-8 py-4 mx-auto'>

            <div className='flex lg:flex-1'>

                <div >

                    {/*logo*/}

                    <NavLink href='/' >
                        <span className='flex items-center gap-2 shrink-0'> <Ghost className='hover:rotate-12 transform transition duration-200 ease-in-out' /> <span className='font-extrabold text-lg'>SpeakSsy</span>  </span>
                    </NavLink>

                </div>




            </div>


            <div className='flex lg:justify-center gap-2 lg:gap-12 lg:items-center '>

                <NavLink href={"/post"}>Your Posts</NavLink>
            </div>


            <div className='flex lg:justify-end lg:flex-1'>

                <div className='flex gap-2 items-center'>



                    {/* if user exist */}


                    {user ? (<NavLink href='/dashboard'>
                        Upload a video</NavLink>) : ""}

                    {/* picture* */}


                    {user ? (
                        <UserButton></UserButton>
                    ) : (
                        <NavLink href='/sign-in'>Sign In</NavLink>
                    )}

                </div>



            </div>
        </nav>
    )
}

export default Header
