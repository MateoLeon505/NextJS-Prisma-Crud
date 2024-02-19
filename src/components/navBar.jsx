import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-slate-900'>
        <div className='container mx-auto flex justify-between items-center px-8 py-1'>
            <Link href='/' className='font-bold text-3xl'>Next-Crud</Link>  
            <ul className='flex gap-x-20 text-lg font-bold'>
                <li>
                    <Link href='/' className='text-slate-300 hover:text-slate-200 '>
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link href='/about' className='text-slate-300 hover:text-slate-200 '>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/new' className='text-slate-300 hover:text-slate-200 '>
                        Create
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar