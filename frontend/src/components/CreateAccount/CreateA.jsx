import React,{useState} from 'react'
import './CreateA.css'
import Hirenet from '../CreateAccount/Hirenet.jpeg'
import GoogleA from '../CreateAccount/GoogleA.webp'
import eye from './eye.png'
import eyehide from './eyehide.png'
import {auth,provider} from "../GoogleAuth/Google"
import {signInWithPopup} from 'firebase/auth'


export default function CreateA() {
  const[data,setData]=useState({
    email:'',
    password:''
  });

  const onChangeListener = (event) =>{
    let name=event.target.name;
    let value=event.target.value;

    setData({...data,[name]:value})
  }

  const Login = () =>{
    signInWithPopup(auth, provider).then((data)=>{
      window.location.href="/home"
    });
  }

  function validatePassword(password) {

    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  
    if (password.length < minLength) {
      return 'Password should be at least ' + minLength + ' characters long.';
    }
  
    if (!hasUppercase) {
      return 'Password should contain at least one uppercase letter.';
    }
  
    if (!hasLowercase) {
      return 'Password should contain at least one lowercase letter.';
    }
  
    if (!hasNumber) {
      return 'Password should contain at least one number.';
    }
  
    if (!hasSpecialChar) {
      return 'Password should contain at least one special character.';
    }
  
    return true;
  }
  

  return (
    <div className='createp'>
      <div className="createblock">
        <div className="logodisplay">
            <img src={Hirenet} alt="HirenetLogo" className='hiruzen'/>
        </div>
       <div className='desc_box'>
        <div>Step 1/2</div>
        <div id='acc'>Create an Account</div>
        <div className="steps"><span id="Alreadyauser">Already a User?</span><span id="Loalreadyauser">Login</span></div>
        <button onClick={Login}><img className='blackgoogle' src={GoogleA} alt=""  />Continue with Google</button>
        <span style={{marginTop:"3vh"}}>Or</span>
        <div className="createform">
           <div className='formblock1'>
            <div>Email</div>
                <input className='createtxt' type="email" name="email" id="" onChange={onChangeListener} value={data.email} />
           </div>

           <div className='formblock1' id='fm2'>
            <div>Create a Password</div>
                <div className="inpb"><input className='createtxt' type="password" name="password" id="" onChange={onChangeListener} value={data.password} /></div>
           </div>
        </div>
        <button style={{backgroundColor:'#2B50A9',marginBottom:'7vh'}} onClick={()=>{let validationResult =validatePassword(data.password);
        if (validationResult === true) {
          window.location.href="/create2"
    window.localStorage.setItem('email',data.email);
    window.localStorage.setItem('password',data.password);
  } else {
    alert('Invalid password');
  }}}>Continue</button>
       </div>
      </div>
    </div>
  )
}
