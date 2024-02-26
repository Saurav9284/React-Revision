import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = () => {
       
        const user = sessionStorage.getItem('username');
        const pass = sessionStorage.getItem('password');
        if(user === username && pass === password){
            alert('Loging success')
        }
        else{
            alert('error')
        }
    }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handlelogin}>
        <input
        placeholder='Enter username'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input
        placeholder='Enter pass'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
