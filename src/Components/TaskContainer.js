import React from 'react'
import Task from './Task'
import data from '../data.json'

export default function TaskContainer({ tasks }) {
  console.log('tasks', tasks)
  
  return (
    <main>ListContainer
      <div>
        {tasks.map(task => (
          console.log(task.taskName),
          <Task
            taskName={task.taskName}
            completed={task.completed} />
        )
        )}
      </div>
    </main>
  )
}
