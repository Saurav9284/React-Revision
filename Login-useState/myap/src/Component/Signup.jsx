import React from 'react'
import { useState } from 'react'


const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlesignup = () => {
        
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password',password);
            alert('signup success') 
    }

  return (
    <div>
      <h1>Signup page</h1>
      <form onSubmit={handlesignup}>
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
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
