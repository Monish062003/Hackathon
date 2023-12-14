import React,{useState} from 'react'
import '../CreateAccount/CreateA.css'
import './Craccount.css'
import Hirenet from '../CreateAccount/Hirenet.jpeg'
import { Link } from 'react-router-dom';

export default function Craccount2() {
  
  const[data,setData]=useState({
    fname:'',
    lname:'',
    country:'',
    check2:true,
    check1:true,
  });


  const onChangeListener = (event) =>{
    let name=event.target.name;
    let value=event.target.value;

    setData({...data,[name]:value})
  }

  const CreateAccount = () =>{
        window.localStorage.setItem('fname',data.fname);
        window.localStorage.setItem('lname',data.lname);
        window.localStorage.setItem('country',data.country);
        window.location.to="http://localhost:3000/home";   
  }
  
  return (
    <div className='createp'>
    <div className="createblock">
      <div className="logodisplay">
          <img src={Hirenet} alt="HirenetLogo" className='hiruzen'/>
      </div>
     <div className='desc_box'>
      <div>Step 2/2</div>
      <div id='acc'>Create an Account</div>
      <div className="steps"><span id="Alreadyauser">Already a User?</span><span id="Loalreadyauser">Login</span></div>
        <div className="firstlastpanel">
            <div className="fnamep">
                 First Name
                <input type="text" onChange={onChangeListener} value={data.fname} className='createtxt' name="fname" id="fuu" />
            </div>
            <div className="fnamep">
                 Last Name
                <input type="text" onChange={onChangeListener} value={data.lname} className='createtxt' name="lname" id="fuu" />
            </div>
        </div>
       <div className="countrypanel">
       Country/Region
        <input type="text" onChange={onChangeListener} name="country" value={data.country} className='createtxt' />
       </div>
        </div>
        <div className="box2">
          <div className="check1">
            <input type="checkbox" name="check1" id="check1" onChange={()=>{setData(true)}} />
            <p>I have read and accepted the Terms of Use.</p>
          </div>
          <div className="check1">
            <input type="checkbox" name="check2" id="check2" onChange={()=>{setData(true)}} />
            <p>The Allwork may keep me informed with personalized emailsabout products and services.</p>
          </div>
          See our Privacy Policy for more details or to opt-out at any time.
          <button className='createbutton' onClick={CreateAccount()} >Create Account</button>
        </div>
    </div>
    </div>
  )
}
