import React, { useState } from 'react'
import useDocTitle from './CustomHook.js/useDocTitle'

function DocTitileTwo() {
    const [count, setCount] = useState(0);

    useDocTitle(count);
    return (
        <div>
            <button onClick={() => setCount(prev=>prev+1)}>Count </button>
        </div>
    )
}

export default DocTitileTwo
