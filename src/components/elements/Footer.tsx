import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=' w-full p-5 bg-card border-t-2 mt-auto'>

        <div className='flex justify-around  itmes-center mx-auto text-sm'>
          <div className='flex items-center gap-3'>
            <Link href='/'> خانه </Link>
            <Link href='/'> درباره ما </Link>
            <Link href='/'> تماس با ما </Link>
          </div>

          <div> CopyRight@2024 David</div>
        <div className='flex items-center text-xl gap-3'>
          <div className=' text-white'>
            <FaTelegram className=' text-primary '/>

          </div>
          <div>
            <FaYoutube className='text-primary text-2xl'/>
          </div>

          <div>
          <FaInstagram className='text-primary text-2xl'/>
          </div>

          <div>
          <FaPhoneAlt className=' text-primary text-xl'/>
          </div>
          
        </div>
        </div>

    </footer>
  )
}
