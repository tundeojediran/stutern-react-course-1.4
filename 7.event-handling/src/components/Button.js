import React from 'react'

const Button = () => {

  const handleClick = () => {
    alert('We all know React!')
  }

  const handleMouseLeave = () => {
    alert('We are learning Event Handling in React')
  }

  return (
    <button onClick={handleClick} onMouseLeave={handleMouseLeave}>
      Do you know React?
    </button>
  )
}

export default Button