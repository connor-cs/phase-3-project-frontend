import React from 'react'
import Task from './Task'
import data from '../data.json'

export default function TaskContainer({ tasks }) {
  console.log('tasks', tasks) //THIS IS AN ARRAY OF 4 OBJECTS
  
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
