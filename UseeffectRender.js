import React, { useState,useEffect } from 'react'

function  UseeffectRender() {

    const [state, setState] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Updated');
        document.title = `You clicked ${state} times`
    },[state]);

    return (
        <div>
            <input type='text' value={name} onChange={e=> setName(e.target.value)} />
            <button onClick={() => setState(state + 1)}>Count {state}</button>
        </div>
    )
}

export default UseeffectRender;
