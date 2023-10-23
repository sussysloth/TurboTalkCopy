import React from 'react'
import image from './images/backspace.png';
import buttonCSS from './Button.module.css';

//prop is a function that's in the app.js file that removes last element of sentence
const BackSpace = (props) => {
  return (
    <div className={buttonCSS.backspace} onClick={() => props.remove()}>
        {/* backspace icon image */}
        <img src={image} alt="Backspace" width="50" height="50" />
    </div>
  )
}

export default BackSpace