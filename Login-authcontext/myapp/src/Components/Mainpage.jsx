
import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

function Mainpage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? <p>Token: {localStorage.getItem('token')}</p> : null}
      <button onClick={() => localStorage.removeItem('token')}>
        Logout
      </button>
    </div>
  );
}

export default Mainpage;
