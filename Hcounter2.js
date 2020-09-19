import React, {useState} from 'react'

function Hcounter2() {
    const initialState = 0;
    const [state, setstate] = useState(initialState);

    const increFive = () => {
        for (let i = 0; i < 5; i++){
            setstate(prevState => prevState + 1);
        }
    }

    return (
        <div>
            Count {state}
            <button onClick={()=>setstate(initialState)}>Reset</button>
            <button onClick={()=>setstate(prevState=>prevState+1)}>Increment</button>
            <button onClick={() => setstate(prevState => prevState - 1)}>Decrement</button>
            <button onClick={increFive}>5*</button>
        </div>
    )
}

export default Hcounter2
