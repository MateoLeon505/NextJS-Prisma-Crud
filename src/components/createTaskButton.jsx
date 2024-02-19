"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const CreateTaskButton = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
      <div>
        {pathname === '/' &&
        <button onClick={() => {router.push('/new')}}>+</button>}
      </div>
  )
}

export default CreateTaskButton