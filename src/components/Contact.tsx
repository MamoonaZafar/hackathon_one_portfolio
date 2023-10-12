import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24'>
        <h1 className='text-2xl uppercase tracking-[20px] text-pink-900'>Contact</h1>
        <form className='justify-center items-center space-y-3 flex flex-col w-full md:w-[30%]'>
        <input className='placeholder-pink-900 border-pink-900 focus:outilne-none p-2 bg-transparent rounded-lg w-full' type="text" placeholder='Your Name' />
        </form>

    </section>
  )
}

export default Contact