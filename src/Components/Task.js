import React from 'react'

export default function Task({ taskname, completed, id }) {
    
    return (
        <>
            <div key={id}>
                <p>{taskname}</p>
                <p>{completed}</p>
            </div>
            <button>delete</button>
            </>
    )
}
