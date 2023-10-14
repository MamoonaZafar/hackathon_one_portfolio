import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {}

const ProjectPage = (props: Props) => {
  return (
    <section className='w-full bg-[#F1F6F9]'>
        <div className='min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4'>
            <h1 className='font-extrabold text-3xl'>SOFTWARE SERVICES WEBSITE</h1>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-sm text-pink-900'>
                    <p>Created at:</p>
                    <p className='font-bold'>2023/09/06</p>
                </div>
                <button className='text-[#F1F6F9] md:font-bold bg-pink-900 px-2 md:px-4 py-2 rounded-lg hover:bg-pink-500 text-sm'>
                    <Link href='/'>Link</Link>
                </button>
            </div>
            <Image src='/sawutt.png' alt="image" height="500" width="500" className="w-full object-cover border-2 border-pink-900"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='flex items-center space-x-4 text-pink-900'>
                <h3>Tech Used:</h3>
                <div className='flex items-center space-x-2 text-sm font-bold'>
                    <p className='bg-pink-200 rounded-lg p-1'>Next 13</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectPage