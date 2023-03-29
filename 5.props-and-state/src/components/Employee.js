import React from 'react'

const Employee = (props) => {
    const { firstName, lastName, email } = props;
    return (
        <div>
            <h1>Employee Details</h1>
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Email Address: {email}</h2>
        </div>
    )
}

export default Employee