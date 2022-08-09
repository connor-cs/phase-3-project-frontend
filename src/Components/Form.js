import React from 'react'
import {useState} from 'react'

export default function Form({handleAdd, editTask, handleEdit}) {

  const [todoDesc, settodoDesc] = useState('')
  
  function handleChange(e){
    settodoDesc(e.target.value)
  }


//also need to make post?
  function addButton(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    if (editTask.id){
      handleEdit(editTask.id, e.target[0].value)
    }
    else {
      let obj = {
        "taskname": e.target[0].value,
        "category": e.target[1].value,
        "completed": false
      }
      handleAdd(obj)
      settodoDesc('')
    }
   
  }
  
    return (
    <form onSubmit={(e)=>addButton(e)}>
      <input type="text" onChange={handleChange} placeholder="add task here" value={editTask.id ? editTask.taskname : todoDesc}></input>
      <select>
        <option value="Flatiron">Flatiron</option>
        <option value="Personal">Personal</option>
        <option value="Fitness">Fitness</option>
      </select>
      {/* <button onClick={()=>addButton} >add task</button> */}
    </form>
  )
}
