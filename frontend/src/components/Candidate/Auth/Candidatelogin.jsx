import React,{useState} from "react";
import "../Auth/CandidateLogin.css";
import GoogleImg from './google1.png'
import {auth,provider} from "../../GoogleAuth/Google"
import {signInWithPopup} from 'firebase/auth'


const Candidatelogin = () => {
  const[data,setdata]=useState({
    email:'',
    password:''
  })

  const onChangeListener = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    setdata({...data,[name]:value})
  }

  const Login = () =>{
    signInWithPopup(auth, provider).then((data)=>{
      console.log(data.email);
    });
  }
  return (
    <div className='containers'>
    <div className='loginPage'>
    <div className='login_container'>
        <div class="left_container">
            <form className="container_login">
                <h3 className='logintag'>Login</h3>

                <div className="newUser-sec">
                <h2 className="newUser">New User?</h2>
                <a className="create-account" href="#">
                  Create an Account
                </a>
              </div>

                <div className="input_box">
                    <label for="email" className="email_label">Email address</label>
                    <input type="text" autocomplete="off" className="email_input" id="email" name="email" value={data.email} onChange={onChangeListener} />
                </div>
                <div className="input_box1">
                    <label for="password" className="email_label">Password</label>
                    <input  autocomplete="off" className="email_input" id="password"  name="password" value={data.password} onChange={onChangeListener} />
                </div>

                <div className="remember">
                    <p className="remember_me"><input type="checkbox" className="checkmark" /> Remember Me</p>
                    <a className="forgot" href="#">Forgot Password?</a>

                </div>
                
                <button type="button" className="login_btn">Login</button>
                <div className="or_container">
                    <span className="line"></span>
                    <p className="or_text">Or</p>
                    <span className="line"></span>
                </div>
                <a type="button" onClick={Login} className="google_btn"><img className="google_img" src={GoogleImg}/>Continue With Google</a>
            </form>
        </div>
        
    </div>
    </div>
    </div>
  );
};

export default Candidatelogin;
