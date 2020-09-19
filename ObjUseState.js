import React, { useState } from 'react'

function ObjUseState() {

    const [name, setName] = useState({
        firstname: '',
        lastname: ''
        
    });

    return (
        <div>
            <input type='text' value={name.firstname} onChange={e => setName({
                ...name,firstname:e.target.value
            })} />
            <input type='text' value={name.lastname} onChange={e => setName({
                ...name, lastname: e.target.value
            })} />
            <h2>{name.firstname}</h2>
            <h2>{name.lastname}</h2>
        </div>
    )
}

export default ObjUseState
