import React from 'react'
import {useState} from 'react'

export default function Form({handleAdd}) {

  function addButton(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    let obj = {
      "taskname": e.target[0].value,
      "category": e.target[1].value
    }
    handleAdd(obj)
  }
  
    return (
    <form onSubmit={(e)=>addButton(e)}>
      <input type="text" placeholder="add task"></input>
      <select></select>
      {/* <button onClick={()=>addButton} >add task</button> */}
    </form>
  )
}
