import React from 'react'

const ChildComponent = (props) => {
    console.log(props)
    return (
        // Fragment
        <>
            <h2 style={props.style}>My name is {props.name}</h2>
            <p>{props.text}</p>
            <p>I am {props.age} years old</p>
        </>


    )
}

export default ChildComponent