import React from 'react'
import image from './images/clear.png';
import buttonCSS from './Button.module.css';


const Clear = (props) => {
  return (
    <div className={buttonCSS.clear} onClick={() => props.clear()}>
        <img src={image} alt="Clear" width="50" height="50" />
    </div>
  )
}

export default Clear