import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-100 text-center py-16'>
        <img className='mx-auto rounded-lg shadow-lg mt-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9M7D4vYc-l0flekRWDX3mMcHkternH06aQ&s" alt="" />
        <h2 className='text-3xl font-bold mt-4'>🎨 Build Amazing UIs with React & Vite</h2>
        <p className='text-gray-600 mt-2'>Fast, lightweight, and modern frontend development.</p>
        <button className='bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition text-white mt-4'>🚀Get Started</button>
    </section>
  )
}

export default Hero