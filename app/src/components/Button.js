import React from 'react'

const Button = ({btn,color,onClick}) => {
  return (
    <div onClick={onClick} style={{backgroundColor:color}} className='btn'>{btn}</div>
  )
}

export default Button