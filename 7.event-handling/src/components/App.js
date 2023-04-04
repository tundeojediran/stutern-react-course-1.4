import React from 'react'
import Button from './Button'
import '../styles.css'
import AlertButton from './AlertButton'
import Buttons from './Buttons'

const App = () => {
  return (
    <div>
        <Button />
        <AlertButton message={"Playing John Wick 4"}>
         Play Movie
        </AlertButton>

        <AlertButton message={"Uploading my photo"}>
         Upload Photo
        </AlertButton> 

        <Buttons />
    </div>
  )
}

export default App