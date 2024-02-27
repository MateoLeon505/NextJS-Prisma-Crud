"use client"
import React, { useState, useEffect } from 'react'
import TakCard from "@/components/taskCard"

const Home = () => {
  const [ tasks, setTasks ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks', {
      method: 'GET',
      cache: 'no-store',
    })
    .then(res => res.json())
    .then(data => data = data.data) 
    .then(data => setTasks(data)) 
  })

  return (
    <section className="container mx-auto py-10 px-5">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
        {tasks?.map((task) => (
          <TakCard key={task.id} task={task}/>
        ))}
      </div>
    </section>
  );
}

export default Home;