import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';

const LightSwitch = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <img src={darkMode ?
                `../img/lightswitch-off.png` : `../img/lightswitch-on.png`} alt="Lightswitch on" onClick={handleClick} />
        </div>
    )
}

export default LightSwitch