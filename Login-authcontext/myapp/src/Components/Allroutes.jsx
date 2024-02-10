import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './Login'
import Mainpage from './Mainpage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/'} element={<Mainpage/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes
