"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { IoMdAddCircleOutline } from "react-icons/io"

const CreateTaskButton = () => {
    const pathname = usePathname()
    const router = useRouter()

    if (pathname === '/') {
      return (
        <div className='fixed bottom-3 right-3'>
          <button onClick={() => {router.push('/new')}}>
            <IoMdAddCircleOutline className='text-slate-400 text-7xl
              transition-colors hover:text-white hover:text-7.5xl hover:scale-110 focus:outline-none'/>
          </button>
        </div>
    )
    }

}

export default CreateTaskButton