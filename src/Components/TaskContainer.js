import React from 'react'
import Task from './Task'
import data from '../data.json'

export default function TaskContainer({ tasks, handleDelete, handleEdit, setEditTask}) {
  console.log(tasks)
  return (
    <main>
      <div className='container'>
        {tasks.map(task => {
          console.log(task)
          return(
          <Task
            key={task.id}
            id={task.id}
            setEditTask={setEditTask}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            taskname={task.taskname}
            category={task.category.category_name} />)
        }
        )}
      </div>
    </main>
  )
}
