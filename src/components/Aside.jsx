import React from 'react'
import {FaBook,FaReact,FaRocket} from 'react-icons/fa';

const links = [
    {
        name: 'Vite Documentation',
        icon: <FaBook />,
        href: "#"
    },
    {
        name: 'React Guide',
        icon: <FaReact />,
        href: "#"
    },
    {
        name: 'Frontend Trends',
        icon: <FaRocket />,
        href: "#"
    }
]

const Aside = () => {
  return (
    <aside className='p-4 md:p-6 bg-gray-200 rounded shadow-md w-full md:w-1/3'>
        <h2 className='text-lg md:text-xl font-bold'>📌 Related Links</h2>
        <ul className='space-y-2 mt-2 text-sm md:text-base'>
            {
                links.map((item, index) => (
                    <li key={index}>
                        <a className='flex items-center text-blue-500 gap-1 hover:underline' href={item.href}>
                            {item.icon} {item.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    </aside>
  )
}

export default Aside
