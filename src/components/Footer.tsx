import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-pink-900 w-full py-5'>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
        <div className='flex space-x-2 items-center'>
      <SocialIcon style={{height:25, width: 25}} bgColor= "#F1F6F9" fgColor='#831843' className="hover:scale-125 duration-200" url= "https://linkedin.com" />
      <SocialIcon style={{height:25, width: 25}} bgColor= "#F1F6F9" fgColor='#831843' className="hover:scale-125 duration-200" url="https://github.com" />
      <SocialIcon style={{height:25, width: 25}} bgColor= "#F1F6F9" fgColor='#831843' className="hover:scale-125 duration-200" url="https://facebook.com" />
      </div>
      <p className='text-[#F1F6F9] text-sm '>Developed by Mamoona Zafar</p>
        </div>
    </footer>
  )
}

export default Footer