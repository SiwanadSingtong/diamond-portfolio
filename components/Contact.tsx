import { Mail } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <div className='bg-accent rounded-lg py-24 flex flex-col gap-8 items-center justify-center'>
        <h3 className='text-4xl lg:text-6xl text-white font-extrabold tracking-tight'>Ready to build something amazing?</h3>
        <p className='text-lg text-white/90 tracking-wide font-semibold'>send me an email if you want to connect! Additionally</p>
        <p className='text-blue-900 text-xl font-bold flex gap-2 items-center'><Mail strokeWidth={2.5} />siwanad.diamond@gmail.com</p>
    </div>
  )
}

export default Contact