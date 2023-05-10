import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decrementCount = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <>
            <h2 data-testid='count'>{count}</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
                <button data-testid='increment' style={{ fontSize: '16px' }} onClick={incrementCount}>Increment +</button>
                <button data-testid='decrement' style={{ fontSize: '16px' }} onClick={decrementCount}>Decrement -</button>
            </div>

        </>

    )
}

export default Counter