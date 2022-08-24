import React from 'react'
import {useState} from 'react'

export default function Form({handleAdd, editTask, handleEdit}) {

  const [todoDesc, setTodoDesc] = useState('')
  
  function handleChange(e){
    settodoDesc(e.target.value)
  }

  function addButton(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
      let obj = {
        "taskname": e.target[0].value,
        "category": e.target[1].value,
        "completed": false
      }
      handleAdd(obj)
      setTodoDesc('')
    }
  
    return (
      <div className='form'>
    <form onSubmit={(e)=>addButton(e)}>
      <input type="text" onChange={handleChange} placeholder="add task here" ></input>
      <label className='dropdown' labelfor="dropdown">  Choose task type: </label>
      <select>
        <option value="Flatiron">Flatiron</option>
        <option value="Personal">Personal</option>
        <option value="Fitness">Fitness</option>
      </select>
    </form>
    </div>
  )
}
