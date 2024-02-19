import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-5xl font-bold'>Not Found</h1>
            <Link href='/' className='text-slate-300 mt-5 text-2xl hover:text-slate-100'>Return to Tasks</Link>
        </div>
    </section>
  )
}

export default NotFound