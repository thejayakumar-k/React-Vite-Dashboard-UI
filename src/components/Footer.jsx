import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-6'>
        <p>🌎&copy; 2026 MyWebsite. All Rights Reserved.</p>
        <div className='flex justify-center space-x-2 mt-4'>
            <a href="#" className='hover:text-blue-600'>ⓕ Facebook</a>
            <a href="#" className='hover:text-blue-600'>🐦 Twitters</a>
            <a href="#" className='hover:text-blue-600'>📷 Instagram</a>
        </div>
    </footer>
  )
}

export default Footer