import React from 'react'

export default function Task({ taskname, id, handleDelete, category}) {
    
    function handleDeleteClick(id){
        handleDelete(id)
    }

    return (
        <>
            <div key={id}>
                <p>{taskname}</p>
                <p className='category'> Task type: {category}</p>
            </div>
            <button className="delete" onClick={()=>handleDeleteClick(id)}>delete</button>
        </>
    )
}
