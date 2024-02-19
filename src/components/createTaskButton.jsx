"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const CreateTaskButton = () => {
    const router = useRouter()

    return (
    <button onClick={() => {router.push('/new')}}>+</button>
  )
}

export default CreateTaskButton