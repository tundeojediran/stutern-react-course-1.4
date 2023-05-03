import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>
                Not Found
            </h1>
            <p>We couldn’t find the page you are looking for
                But we have millions more shopping items for you to browse!</p>

            <button className='btn' onClick={() => navigate('')}>Go Home</button>
        </div>
    )
}

export default NotFound