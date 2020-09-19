import React, { useContext } from 'react';
import { CountContext } from './App';

function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <div>
            {countContext.countState} - times counted
            <button onClick={() => countContext.countDispatch('increment')} >Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')} >Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')} >Reset</button>
        </div>
    )
}

export default ComponentF

