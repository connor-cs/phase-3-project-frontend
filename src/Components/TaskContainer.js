import React from 'react'
import Task from './Task'
import data from '../data.json'

export default function TaskContainer({ tasks }) {
  
  return (
    <main>ListContainer
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            taskName={task.taskName}
            completed={task.completed} />
        )
        )}
      </div>
    </main>
  )
}
