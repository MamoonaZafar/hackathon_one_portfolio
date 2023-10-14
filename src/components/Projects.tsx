import React from 'react'
import Project from './Project'
import Motion from './Motion'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className='text-2xl uppercase tracking-[20px] text-pink-900'>Projects</h1>
        <Motion delay={1} direction={''}>

        <div className='hidden md:grid grid-col-1 md:grid-cols-3 gap-8'>
            <Project/>
            <Project/>
            <Project/>
        </div>  
        <div className='grid md:hidden grid-col-1 md:grid-cols-3 gap-8'>
            <Project/>
            <Project/>
        </div>  
        </Motion>

        <p className='text-center text-xs text-pink-900 cursor-pointer'><Link href={'/projects'}>See More...</Link></p>   
    </section>
  )
}

export default Projects