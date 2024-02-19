"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { IoMdAddCircleOutline } from "react-icons/io"

const CreateTaskButton = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
      <div>
        {pathname === '/' &&
        <button onClick={() => {router.push('/new')}}>
          <IoMdAddCircleOutline/>
        </button>}
      </div>
  )
}

export default CreateTaskButton