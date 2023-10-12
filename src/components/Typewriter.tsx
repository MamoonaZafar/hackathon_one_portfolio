'use client'

import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Typewriter = (props: Props) => {

    const [text]= useTypewriter({
        words:["Hi, It's Mamoona Zafar", "Web Developer", "Full-Stack Developer"],
        loop : true,
        delaySpeed : 2000,       
        
    })
  return (
    <div>
        <h1 className='text-3xl md:text-5xl font-extrabold text-center'>{text}</h1>
    </div>
  )
}
export default Typewriter