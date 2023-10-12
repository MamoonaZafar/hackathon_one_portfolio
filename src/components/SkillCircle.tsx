import React from 'react'
import Image from 'next/image'

type Props = {}

const SkillCircle = (props: Props) => {
  return (
    <div className='h-24 w-24 flex justify-center rounded-full items-center p-1 shadow-lg shadow-gray-400 bg-pink-800 hover:bg-pink-500 hover:scale-110 duration-300'>
        <div className='flex justify-center items-center bg-[#F1F6F9] rounded-full h-full w-full'>
            <Image src="/javascript.png" alt="skill" className="" height={50} width={50}/>
        </div>
    </div>
  )
}

export default SkillCircle