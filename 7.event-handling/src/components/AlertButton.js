import React from 'react'

const AlertButton = ({ message, children }) => {

    const handleClick = (event) => {
        alert(message);
        console.log(event);
    }

    return (
        <button onClick={(event) => handleClick(event)}>
            {children}
        </button>
    )
}

export default AlertButton