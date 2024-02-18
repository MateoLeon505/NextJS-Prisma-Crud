"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const NewPage = () => {

  const router = useRouter()

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setTask({...task, [name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = task.title
    const description = task.description

    const res = await fetch(`/api/tasks`, {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    router.push('/')
  } 

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-800 p-10 sm:w-1/2 lg:w-1/4' onSubmit={handleSubmit}>

        <label htmlFor="title" className='text-sm font-bold'>Task Title</label>
        <input type="text" id='title' name='title' placeholder='Title' onChange={handleChange}
          className='border border-gray-400 p-2 mb-4 w-full  text-black' />
    
        <label htmlFor="description" className='text-sm font-bold'>Task Description</label>
        <textarea id='description' name='description' placeholder='Description' rows="3" onChange={handleChange}
          className='border border-gray-400 p-2 mb-4 w-full text-black'>
        </textarea>

        <button className='bg-blue-600 hover:bg-blue-400 py-2 px-4 text-white rounded-md' type='submit'>
          Create
        </button>

      </form>
    </div>
  )
}

export default NewPage