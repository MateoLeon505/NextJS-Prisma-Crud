import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-slate-900'>
        <div className='container flex flex-col md:flex-row justify-between items-center px-8 py-1'>
            <Link href='/' className='font-bold text-3xl md:mb-0'>Next-Crud</Link>  
            <ul className='flex gap-x-10 text-lg font-bold'>
                <li>
                    <Link href='/' className='text-slate-400 hover:text-slate-200 '>
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link href='/new' className='text-slate-300 hover:text-slate-200 '>
                        Create
                    </Link>
                </li>
                <li>
                    <Link href='/about' className='text-slate-300 hover:text-slate-200 '>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar