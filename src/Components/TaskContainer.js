import React from 'react'
import Task from './Task'
import data from '../data.json'

export default function TaskContainer({ tasks, handleDelete, handleEdit, setEditTask }) {
  
  return (
    <main>
      <div className='container'>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            setEditTask={setEditTask}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            taskname={task.taskname}
            category={task.category} />
        )
        )}
      </div>
    </main>
  )
}
