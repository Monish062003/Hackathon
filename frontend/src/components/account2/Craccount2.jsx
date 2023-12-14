import React, { useEffect, useState } from 'react';
import '../CreateAccount/CreateA.css';
import './Craccount.css';
import Hirenet from '../CreateAccount/Hirenet.jpeg';

export default function Craccount2() {
  const [checkbox, setCheckbox] = useState({
    check1: false,
    check2: false,
  });
  const [data, setData] = useState({
    fname: '',
    lname: '',
    country: '',
  });

  useEffect(() => {
    console.log(checkbox);
  }, [checkbox]);

  const onChangeListener = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const createAccount = () => {
    // Perform your logic here based on checkbox values and navigate if needed
    console.log('Create Account clicked');
    console.log('Checkbox values:', checkbox);

    // Example: Navigate to home page if both checkboxes are checked
    if (checkbox.check1 && checkbox.check2) {
      // Save data to local storage if needed
      window.localStorage.setItem('fname', data.fname);
      window.localStorage.setItem('lname', data.lname);
      window.localStorage.setItem('country', data.country);

      // Navigate to home page
      // Example: Replace '/home' with your actual route
      window.location.href = 'http://localhost:3000/home';
    } else {
      // Handle the case when checkboxes are not checked
      console.log('Please check both checkboxes.');
    }
  };

  useEffect(() => {
    console.log(checkbox);
  }, [checkbox]);

  return (
    <div className='createp'>
      <div className='createblock'>
        <div className='logodisplay'>
          <img src={Hirenet} alt='HirenetLogo' className='hiruzen' />
        </div>
        <div className='desc_box'>
          <div>Step 2/2</div>
          <div id='acc'>Create an Account</div>
          <div className='steps'>
            <span id='Alreadyauser'>Already a User?</span>
            <span id='Loalreadyauser'>Login</span>
          </div>
          <div className='firstlastpanel'>
            <div className='fnamep'>
              First Name
              <input
                type='text'
                onChange={onChangeListener}
                value={data.fname}
                className='createtxt'
                name='fname'
                id='fuu'
              />
            </div>
            <div className='fnamep'>
              Last Name
              <input
                type='text'
                onChange={onChangeListener}
                value={data.lname}
                className='createtxt'
                name='lname'
                id='fuu'
              />
            </div>
          </div>
          <div className='countrypanel'>
            Country/Region
            <input
              type='text'
              onChange={onChangeListener}
              name='country'
              value={data.country}
              className='createtxt'
            />
          </div>
        </div>
        <div className='box3'>
          <div className='check1'>
            <input
              type='checkbox'
              name='check1'
              id='check1'
              checked={checkbox.check1}
              onChange={() => setCheckbox({ ...checkbox, check1: !checkbox.check1 })}
            />
            <p>I have read and accepted the Terms of Use.</p>
          </div>
          <div className='check1'>
            <input
              type='checkbox'
              name='check2'
              id='check2'
              checked={checkbox.check2}
              onChange={() => setCheckbox({ ...checkbox, check2: !checkbox.check2 })}
            />
            <p>The HireNext may keep me informed with personalized emails about products and services.</p>
          </div>
          <p>See our Privacy Policy for more details or to opt-out at any time.</p>
          <button className='createbutton' onClick={createAccount}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
