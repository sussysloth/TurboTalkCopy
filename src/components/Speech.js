import React from 'react'
import image from './images/speak.png';

const Speech = (props) => {
  return (
    <div onClick={() => props.talk()}>
        <img src={image} alt="Speak" width="50" height="50" style={props.style}/>
    </div>
  )
}

export default Speech