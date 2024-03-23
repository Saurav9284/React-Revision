import React from 'react'
import robot from '../Assests/robot.png'
import header from "../Assests/header.png"
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='leftheading'>
          <h1>Hello World!</h1>
         <img src={header} width={300}/>
      </div>
      <div>
      <img src={robot} className='headerimg'/>
      </div>
    </div>
  )
}

export default Header
