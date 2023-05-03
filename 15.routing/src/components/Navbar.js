import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <nav>
            <div className="nav-items container">
                <div className="logo">
                    <a href="/">
                        <h1>DAN OJE</h1>
                    </a>
                </div>

                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/books'>My Books</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><button className='btn' onClick={handleClick}>Go Back</button></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar