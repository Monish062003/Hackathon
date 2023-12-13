import React,{useState} from 'react'
import './index.css'
import {auth,provider} from "../../GoogleAuth/Google"
import {signInWithPopup} from 'firebase/auth'


function Login() {
  const LoginG = () =>{
    signInWithPopup(auth, provider).then((data)=>{
      console.log(data.email);
    });
  }
  return (
    <div>
      <button onClick={LoginG}>Login with Google</button>
    </div>
  )
}

export default Login
