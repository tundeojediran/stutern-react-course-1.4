import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';

const Content = () => {
    const { darkMode } = useContext(DarkModeContext);
    const contentProvider = () => {
        if (darkMode) {
            return <p>But with the lights off, <span>you can see it all.</span></p>
        }
        return <p>With the lights on, you can see it better.</p>
    }
    return (
        <div className={darkMode ? `Content Content-dark` : `Content`}>
            {contentProvider()}
        </div>
    )
}

export default Content