import Link from 'next/link'
import React from 'react'
import {ModeToggle} from "@/components/elements/modeToggle"
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { auth } from '@/lib/auth'


export default async function Nabar() {

    const session = await auth()
  return (
    <nav className=' border border-accent py-2 shadow-md
    rounded-xl items-center my-3 container mx-auto '>
        {/* desktop nav */}
        <div className="hidden md:grid md:grid-cols-3 items-center  ">
         
            <div className='mr-2 '>
                <div className='bg-white w-32 text-center rounded-lg dark:text-gray-700'>
                    <i className='text-2xl text-primary'>S</i><i>tore </i>
                    <i className='text-2xl text-primary'>D</i><i>ream </i>
                </div>
            </div>

            <div className=' flex gap-4 justify-center items-center text-sm'>
                <Link href="/" className='hover:text-primary'> خانه </Link>
                <Link href="/" className='hover:text-primary' > فروشگاه </Link>
                <Link href="/" className='hover:text-primary' > درباره ما </Link>
                <Link href="/" className='hover:text-primary' > تماس با ما </Link>
            </div>

            <div className='flex justify-end items-center gap-1 ml-2 text-primary'>

             {session?.user?     
                <Link href='/account/profile'>{session.user.name}</Link>
                :<Link href="/account/register">
                    <Button variant="outline" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </Button>
                </Link>
                }
               <div className=' direction-reverse' dir='ltr'><ModeToggle/></div> 
            </div>
        </div>
        {/* mobile nav */}

        <div className='md:hidden grid grid-cols-3 items-center'>

            <div className='mr-2 text-primary'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="mr-1 w-48">
                        <DropdownMenuItem className=" border-b border-primary-foreground rounded-none ">
                            <span className='w-full text-center py-1'>خانه</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className=" border-b border-primary-foreground rounded-none">
                            <span className='w-full text-center py-1'>فروشگاه</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className=" border-b border-primary-foreground rounded-none">
                            <span className='w-full text-center py-1'>تماس با ما</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className=" border-b border-primary-foreground rounded-none">
                            <span className='w-full text-center py-1'>بلاگ</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
            <div className='bg-white w-32 text-center rounded-lg dark:text-gray-700'>
                    <i className='text-2xl text-primary'>S</i><i>tore </i>
                    <i className='text-2xl text-primary'>D</i><i>ream </i>
                </div>
            </div>
            <div className='flex justify-end items-center gap-1 ml-2 text-primary'>
                


               <div className=' direction-reverse' dir='ltr'><ModeToggle/></div> 
            </div>


        </div>

    </nav>
  )
}
