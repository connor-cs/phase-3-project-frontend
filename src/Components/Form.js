import React from 'react'
import {useState} from 'react'

export default function Form({handleAdd}) {

  function addButton(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    handleAdd(e.target[0].value)
  }
  
    return (
    <form onSubmit={(e)=>addButton(e)}>
      <input type="text" placeholder="add task"></input>
      {/* <button onClick={()=>addButton} >add task</button> */}
    </form>
  )
}
