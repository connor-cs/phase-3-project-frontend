import React from 'react'

export default function Task({ taskname, completed, id, handleDelete, category}) {
    
    function handleDeleteClick(id){
        console.log(id)
        handleDelete(id)
    }

//Why does button display under taskname and not next to it?

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
