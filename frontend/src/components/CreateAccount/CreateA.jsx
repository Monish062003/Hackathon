import React from 'react'
import './CreateA.css'
import Hirenet from '../CreateAccount/Hirenet.jpeg'
import GoogleA from '../CreateAccount/GoogleA.webp'
import eye from './eye.png'
import eyehide from './eyehide.png'
export default function CreateA() {
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
        <button><img className='blackgoogle' src={GoogleA} alt=""  />Continue with Google</button>
        <span style={{marginTop:"3vh"}}>Or</span>
        <div className="createform">
           <div className='formblock1'>
            <div>Email</div>
                <input className='createtxt' type="email" name="email" id="" />
           </div>

           <div className='formblock1' id='fm2'>
            <div>Create a Password</div>
                <div className="inpb"><input className='createtxt' type="email" name="email" id="" /></div>
           </div>
        </div>
        <button style={{backgroundColor:'#2B50A9',marginBottom:'7vh'}}>Continue</button>
       </div>
      </div>
    </div>
  )
}
