import React, {useState} from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [auth, setAuth] = useState({
    isAuth: false,
    token:'',
  });
  const login = (token) =>{
    setAuth({isAuth: true, token:token});
  };
  const logout = () =>{
    setAuth({isAuth: false, token:''});
  };
  const {isAuth, token} = auth;
  console.log("Auth", token)

  return (
    <AuthContext.Provider value={{token, isAuth, login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}