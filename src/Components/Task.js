import React from 'react'

export default function Task({ taskName, completed, id }) {
    return (
        <li>
            <div key={id}>
                <p>{taskName}</p>
                <p>{completed}</p>
            </div>
        </li>
    )
}
