import React,{useState,useMemo} from 'react'

function Memo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0); 

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000) i++
        return counterOne % 2 === 0;
    }, [counterOne]);

    // const isEven = 

    const increOne = () => {
        setCounterOne(counterOne + 1)
    }

   const  increTwo = () => {
        setCounterTwo(counterTwo+1)
    }

    return (
        <div>
            <div>
                <button onClick={increOne} >Count - {counterOne}</button>
                <span>{isEven ? 'Even':'odd'}</span>
            </div>
            <div>
                <button onClick={increTwo} >Count - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Memo
