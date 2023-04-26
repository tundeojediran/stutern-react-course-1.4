
import React, { useState } from 'react'
import { DarkModeContext } from './context/DarkModeContext';
import Container from './components/Container';
import './styles/index.css'

const DarkModeApp = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

  return (
    <div>
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            <Container />
        </DarkModeContext.Provider>
    </div>
  )
}

export default DarkModeApp