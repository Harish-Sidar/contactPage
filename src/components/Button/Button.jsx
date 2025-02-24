import React from 'react'


const Button = ({icon,text,...rest}) => {
  return (
    <button {...rest}className='btn'>
           {icon}

           {text}

   
    </button>
  )
}

export default Button
