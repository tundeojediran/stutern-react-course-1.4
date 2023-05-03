import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </nav>
    )
}

export default Navbar