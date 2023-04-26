import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import Content from './Content'
import LightSwitch from './LightSwitch'

const Container = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content />
            <LightSwitch />
        </div>
    )
}

export default Container