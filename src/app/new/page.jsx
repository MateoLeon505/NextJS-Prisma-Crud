"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const NewPage = ({params}) => {
  const router = useRouter()

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    params.id &&
      fetch(`http://localhost:3000/api/tasks/${params.id}`)
      .then(res => res.json())
      .then(data => data = data.data) 
      .then(data => setTask({...task, title: data.title, description: data.description})) 
  }, [])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setTask({...task, [name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = task.title
    const description = task.description

    if (params.id) {
      const res = await fetch(`http://localhost:3000//api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({title, description}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data) 
    } 
    else {
      const res = await fetch(`http://localhost:3000//api/tasks`, {
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data) 
    }
    router.refresh()
    router.push('/')
  } 

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000//api/tasks/${params.id}`, {
      method: "DELETE"
    })
    const data = await res.json()
    router.refresh()
    router.push('/')
  }
 
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form className='bg-slate-800 p-10 sm:w-1/2 lg:w-1/4 rounded-lg' onSubmit={handleSubmit}>

        <label htmlFor="title" className='text-sm font-bold'>Task Title</label>
        <input type="text" id='title' name='title' value={task.title} placeholder='Title' onChange={handleChange} 
          className='border border-gray-400 p-2 mb-4 w-full  text-black' />
    
        <label htmlFor="description" className='text-sm font-bold'>Task Description</label>
        <textarea id='description' name='description' value={task.description} placeholder='Description' rows="3" onChange={handleChange} 
          className='border border-gray-400 p-2 mb-4 w-full text-black'>
        </textarea>

        <div className=' flex justify-between'>
          {params.id && (
            <button className='bg-red-800 hover:bg-red-600 py-2 px-4 text-white rounded-md' 
              type='button' onClick={handleDelete} >
              Delete 
            </button>
          )}
          <button className='bg-blue-600 hover:bg-blue-500 py-2 px-4 text-white rounded-md' type='submit' disabled={!task.title}>
            {params.id ? 'Update' : 'Create'}
          </button>
        </div>

      </form>
    </div>
  )
}

export default NewPage