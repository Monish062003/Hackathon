import React from "react";
import "../Auth/CandidateLogin.css";
import GoogleImg from './google1.png'


const Candidatelogin = () => {
  return (
    <div className='containers'>
    <div className='loginPage'>
    <div className='login_container'>
        <div class="left_container">
            <form method="post" action="/" className="container_login">
                <h3 className='logintag'>Login</h3>

                <div className="newUser-sec">
                <h2 className="newUser">New User?</h2>
                <a className="create-account" href="#">
                  Create an Account
                </a>
              </div>
              


                <div className="input_box">
                    <label for="email" className="email_label">Email address</label>
                    <input type="text" autocomplete="off" className="email_input" id="email" name="email" />
                </div>
                <div className="input_box1">
                    <label for="password" className="email_label">Password</label>
                    <input  autocomplete="off" className="email_input" id="password"  name="password" />
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
                <a type="button" className="google_btn"><img className="google_img" src={GoogleImg}/>Continue With Google</a>
            </form>
        </div>
        
    </div>
    </div>
    </div>
  );
};

export default Candidatelogin;
