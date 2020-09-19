import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 0
    
    
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state,firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state,firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state,secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state,secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

function ReducerTwo() {
    const [newState, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{newState.firstCounter}</h1>
            <h1>{newState.secondCounter}</h1>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment counter 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement counter 2</button>
                <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment 5</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement 5</button>
            </div>
        </div>
      
    )
}

export default ReducerTwo
