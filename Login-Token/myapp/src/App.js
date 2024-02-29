import React from 'react'
import Login from './Components/Login'
import {Home} from './Home'
import { useContext } from 'react'
import {AuthContext} from './Context/AuthContextProvider'
export default function App() {

const {isAuth} = useContext(AuthContext)
  return (
    <div>
       { isAuth ? <Home/> : <Login /> }
    </div>
  )
}