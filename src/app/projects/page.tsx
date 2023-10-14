
import Motion from '@/components/Motion'
import Project from '@/components/Project'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='w-full bg-[#F1F6F9]'>
        <div className='max-w-7xl min-h-screen max-auto p-5'>
            <Motion delay={1} direction={''}>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 w-full p-5 my-4 md:my-16'>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
            </Motion>

        </div>
    </section>
  )
}

export default page