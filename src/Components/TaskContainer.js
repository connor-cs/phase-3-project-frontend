import React from 'react'
import Task from './Task'
import data from '../data.json'

export default function TaskContainer({ tasks, handleDelete }) {
  
  return (
    <main>
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            handleDelete={handleDelete}
            taskname={task.taskname}
            completed={task.completed} />
        )
        )}
      </div>
    </main>
  )
}
