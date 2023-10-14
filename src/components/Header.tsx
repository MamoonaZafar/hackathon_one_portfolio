import React from 'react'
import Image from 'next/image'
import Typewriter from './Typewriter'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Header = (props: Props) => {
  return (
    <section className='relative z-0 h-[calc(100vh-56px)] w-full flex justify-center items-center'>
        <div className='flex flex-col items-center space-y-4 justify-center'>
          <div className='bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500'>
            <Image src="/dev1.png" alt="" height={150} width={150} className=""/>
          </div>
          <p className='font-bold'>I Build Responsive Full Stack Layouts</p>
          <Typewriter/>
          <div className='flex space-x-2 items-center'>
          <SocialIcon style={{height:25, width: 25}} bgColor= "#A53167" className="hover:scale-125 duration-200" url= "https://linkedin.com" />
          <SocialIcon style={{height:25, width: 25}} bgColor= "#A53167" className="hover:scale-125 duration-200" url="https://github.com" />
          <SocialIcon style={{height:25, width: 25}} bgColor= "#A53167" className="hover:scale-125 duration-200" url="https://facebook.com" />
      </div> 
     </div>
     <div className='absolute w-[50%] md:w-[20%] h-[30%] -z-10 filter blur-3xl bg-gradient-to-r from-pink-600 to-purple-500 opacity-70'/>

    </section>
  )
}

export default Header