import React, { Children } from 'react'
import '../styles/button.css'

const ButtonWithProps = ({inverted, children}) => {
  return (
   <button className={`button-with-props ${inverted ? 'inverted' : 'not-inverted'}`}>
    {children}
   </button>
  )
}

export default ButtonWithProps