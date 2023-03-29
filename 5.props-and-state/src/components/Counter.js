import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [stepCount, setStepCount] = useState(1);

    const incrementCount = () => {
        setCount(count + stepCount)
    }

    return (
        <>
            <div>
                <h1>Count State</h1>
                <h1>{count}</h1>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={() => setCount(count - stepCount)}>Decrement</button>
                <input type="number" value={stepCount} onChange={(event) => setStepCount(+event.target.value) } /> 
            </div>

            <div>
                <h1>Random Number</h1>
                <h1>{randomNumber}</h1>
                <button onClick={() => setRandomNumber(Math.floor(Math.random() * 1000))}>Generate random number</button>
            </div>
        </>

    )
}

export default Counter