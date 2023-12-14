import React from 'react'
import '../CreateAccount/CreateA'
import './Forgotpassword.css'

export default function ForgotPassword() {
  return (
    <div className='forgotpasswordpage'>
      <div className="forgotpasswordform">
        <div className="headblock">
            <h2>Forgot Password?</h2>
            <p>Don’t worry, we will send you a mail with the link to reset your password.</p>
        </div>
        <div className="headblock1">
            <p>Email Address</p>
        </div>
      </div>
    </div>
  )
}
