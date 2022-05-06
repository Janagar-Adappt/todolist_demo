import React from 'react'

const Button = ({ color, text, onClick }) => {
  return (
    <button className='btn' style={{ background: color }} onClick={onClick}>{text}</button>
  )
}

export default Button