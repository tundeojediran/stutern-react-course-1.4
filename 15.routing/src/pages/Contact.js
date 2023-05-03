import React from 'react'
import { useNavigate } from 'react-router'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>You can reach me at my IG Handle @tundeojediran</div>
            <p>My email address is tundeojediran@gmail.com</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}

export default Contact