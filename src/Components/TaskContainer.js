import React from 'react'
import Task from './Task'
import data from '../data.json'

export default function TaskContainer({ tasks, handleDelete, handleEdit, seteditTask }) {
  
  return (
    <main>
      <div className='container'>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            seteditTask={seteditTask}
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
