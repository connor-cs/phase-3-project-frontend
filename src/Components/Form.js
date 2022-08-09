import React from 'react'

export default function Form({handleAdd}) {

  function addButton(e) {
    e.preventDefault()
    console.log(e.target.value)
    
    handleAdd(e.target.value)}
  
    return (
    <form>
      <input type="text" placeholder="add task"></input>
      <button onSubmit={addButton} >add task</button>
    </form>
  )
}
