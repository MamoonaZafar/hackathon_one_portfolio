import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Project = (props: Props) => {
  return (
    <Link href='/projects/123' className='h-[200px]  relative rounded-lg group cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 duration-300'>
        <Image src="/sawutt.png" alt="" className="rounded-lg object-cover h-full w-full" height={200} width={300}/>
        <div className='bg-pink-900 h-full w-full absolute top-0 left-0 flex justify-center items-center text-white p-4 text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300'>
             Sawut Aljazeera is an IT Company based in UAE.
        </div>
    </Link>
  )
}

export default Project