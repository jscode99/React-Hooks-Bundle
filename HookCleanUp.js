import React, {  useState } from 'react'
import HookMouse from './HookMouse';


function HookCleanUp() {
   
    const [display,setDisplay]=useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)} >Unsubcribe</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default HookCleanUp
