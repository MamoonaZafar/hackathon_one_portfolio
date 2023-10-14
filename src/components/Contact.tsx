'use client'

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
  name: string
  subject: string
  message: string

}

type Props = {}

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
       window.location.href=`mailto:monazafar143@gmail.com?subject=${data.subject}&body=hey its ${data.name}, ${data.message}`}
  return (
    <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className='text-2xl uppercase tracking-[20px] text-pink-900'>Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='justify-center items-center space-y-3 flex flex-col w-full md:w-[30%]'>
        
        <input {...register("name", { required: true })} className='placeholder-pink-900 border-pink-900 focus:outilne-none p-2 bg-transparent rounded-lg w-full' type="text" placeholder='Your Name' />
        {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
        <input {...register("subject", { required: true })} className='placeholder-pink-900 border-pink-900 focus:outilne-none p-2 bg-transparent rounded-lg w-full' type="text" placeholder='Subject' />
        {errors.subject && <span className='text-red-500 text-sm'>This field is required</span>}
       <textarea rows={8} {...register("message", { required: true })}  className='placeholder-pink-900 border-pink-600 focus:outilne-none p-2 bg-transparent rounded-lg w-full' placeholder='Message' />
       {errors.message && <span className='text-red-500 text-sm'>This field is required</span>}
       <button type="submit" className='bg-gradient-to-r from-pink-900 to-pink-500 p-3 rounded-lg font-bold w-full text-white hover:opacity-90'>Submit</button>


        </form>

    </section>
  )
}

export default Contact