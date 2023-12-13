import React from 'react'
import './CreateA.css'
import Hirenet from '../CreateAccount/Hirenet.jpeg'
import GoogleA from '../CreateAccount/GoogleA.jpeg'
export default function CreateA() {
  return (
    <div className='createp'>
      <div className="createblock">
        <div className="logodisplay">
            <img src={Hirenet} alt="HirenetLogo" style={{width:"15vw", height:"35vh",textAlign:"center"}}/>
        </div>
        <div className="steps">Step 1/2</div>
        <div id='acc'>Create an Account</div>
      </div>
    </div>
  )
}
