import React from 'react'


const Button = (props) => {
  return (
    <button className='btn'>
      {props.text}
      {props.icon}

   
    </button>
  )
}

export default Button
