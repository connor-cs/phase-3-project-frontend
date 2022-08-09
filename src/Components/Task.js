import React from 'react'

export default function Task({ taskname, completed, id, handleDelete }) {
    
    function handleClick(id){
        console.log(id)
        handleDelete(id)
    }

    return (
        <>
            <div key={id}>
                <p>{taskname}</p>
                <p>{completed}</p>
            </div>
            <button onClick={()=>handleClick(id)}>delete</button>
        </>
    )
}
