import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const navbar = (props: Props) => {
  return (
    <nav className='mx-w-7xl mx-auto p-5 flex items-center justify-between'>
      <div className='flex space-x-2 items-center'>
      <SocialIcon style={{height:25, width: 25}} bgColor= "#831843" className="hover:scale-125 duration-200" url= "https://linkedin.com" />
      <SocialIcon style={{height:25, width: 25}} bgColor= "#831843" className="hover:scale-125 duration-200" url="https://github.com" />
      <SocialIcon style={{height:25, width: 25}} bgColor= "#831843" className="hover:scale-125 duration-200" url="https://facebook.com" />
      </div>
      <div className='flex items-center space-x-4 md:space-x-8'>
        <Link className='text-pink-700 hover:text-violet-500 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href='/'>Skills</Link>
        <Link className='text-pink-700 hover:text-violet-500 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href='/'>Projects</Link>
        
      </div>
    </nav>
  )
}

export default navbar