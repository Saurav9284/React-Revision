import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='main'>

       <div className='logo'>
          <img src='https://www.reshot.com/preview-assets/icons/F95PLK78DN/logout-F95PLK78DN.svg'width={60}/>
       </div>

       <div className='menulist'>
         <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Services</li>
            <li>About</li>
         </ul>
       </div>

       <div className='account'>
          <div className='buttons'>Login</div>
          <div className='buttons'>Profile</div>
       </div>

    </div>
  )
}

export default Navbar
