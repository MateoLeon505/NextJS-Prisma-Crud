import React from 'react'

const TakCard = ({task}) => {
  return (
    <div className="bg-slate-900 p-3 hover:bg-slate-600 hover:cursor-pointer">
        <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
        <p>{task.description}</p>
        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TakCard