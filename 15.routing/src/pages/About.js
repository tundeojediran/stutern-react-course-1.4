import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div className="container">
            <div className="title">
                <h2>About</h2>
            </div>
            <div className="about-container">

                <p>My name is Daniel. I am a Nigerian. I am a Software Engineer by Profession. I love to watch SciFi movies and Biopics.</p>

                <nav style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
                    <NavLink to='/about/career'>My Career</NavLink>
                    <NavLink to='/about/education'>My Education</NavLink>
                </nav>

                {/* The <Outlet> element is used as a placeholder for rendering child components  */}
                <Outlet />
            </div>
        </div>
    )
}

export default About