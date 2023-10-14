'use client'


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from '@/components/Motion'

type Props = {}

const navbar = (props: Props) => {
  const pathname = usePathname()
  
  return (
    <nav className='mx-w-7xl mx-auto p-5 flex items-center justify-between'>
      <Motion delay={1} direction={'left'} >
      <div className='flex space-x-2 items-center'>
      <SocialIcon style={{height:25, width: 25}} bgColor= "#831843" className="hover:scale-125 duration-200" url= "https://linkedin.com" />
      <SocialIcon style={{height:25, width: 25}} bgColor= "#831843" className="hover:scale-125 duration-200" url="https://github.com" />
      <SocialIcon style={{height:25, width: 25}} bgColor= "#831843" className="hover:scale-125 duration-200" url="https://facebook.com" />
      </div>
      </Motion>
      <Motion delay={1} direction={'right'}>
      <div className='flex items-center space-x-4 md:space-x-8'>
        {pathname!=="/" && <Link className='text-pink-700 hover:text-violet-500 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href='/'>Home</Link>}
        {pathname!=="/projects" && <Link className='text-pink-700 hover:text-violet-500 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href='/projects'>Projects</Link>}
        <Link className='text-pink-700 hover:text-violet-500 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href='/#skills'>Skills</Link>
      </div>
      </Motion>
    </nav>
  )
}

export default navbar