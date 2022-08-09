import React from 'react'

export default function Task({ taskname, completed, id, handleDelete, handleEdit, seteditTask }) {
    
    function handleDeleteClick(id){
        console.log(id)
        handleDelete(id)
    }

    function handleEditClick(id, update){
        seteditTask({
            taskname, completed, id
        })
        handleEdit(id, update)
    }

    return (
        <>
            <div key={id}>
                <p>{taskname}</p>
            </div>
            <button onClick={()=>handleDeleteClick(id)}>delete</button>
            <button onClick={()=>handleEditClick(id)}>edit</button>
        </>
    )
}
