import React from 'react'
import { useNavigate } from 'react-router'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="title">
                <h2>Contact Me</h2>
            </div>

            <div>You can reach me at my IG Handle @tundeojediran</div>
            <p>My email address is tundeojediran@gmail.com</p>
            <button className='btn' onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default Contact