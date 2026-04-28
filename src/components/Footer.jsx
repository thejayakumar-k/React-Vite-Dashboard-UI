import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-6 px-4'>
        <p className='text-sm md:text-base'>🌎&copy; 2026 MyWebsite. All Rights Reserved.</p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:space-x-4 mt-4 text-sm md:text-base'>
            <a href="#" className='hover:text-blue-600'>ⓕ Facebook</a>
            <a href="#" className='hover:text-blue-600'>🐦 Twitters</a>
            <a href="#" className='hover:text-blue-600'>📷 Instagram</a>
        </div>
    </footer>
  )
}

export default Footer
