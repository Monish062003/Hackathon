import React from 'react';
import '../JoinASFreelancer/JoinAs.css';
import img1 from '../images/upload.png'

const JoinAS = () => {
  return (
    <>
      <div className="container">

      <div className="containers">
      <h2 className='join-tag'>Join as a Freelancer</h2>
      <p>Find Your next freelance job fast!</p>


      <div className='form-tag'>
      <label className='label-name' htmlFor="name">Name</label>
      <input className='input-tag' type="text" />
      
      </div>

      <div className='form-tag2'>
      <label className='label-name' htmlFor="name">Your Expertise</label>
      <input className='input-tag' type="text" />
      
      </div>

      <div className='form-tag3'>
      <label className='label-name' htmlFor="name">Your Expertise</label>
      <textarea className='input-tag2' name="postContent" rows={4} cols={40} />
      
      </div>

      <div className='form-tag3'>
      <label className='label-name' htmlFor="name">Upload your CV/Resume</label>
      <label  id="level_btn" for="upload_btn"><img src={img1} alt='upload' />Upload Resume</label>
      </div>

      <div className='form-tag2'>
      <label className='label-name' htmlFor="name">Skills</label>
      <input className='input-tag' type="text" />
      
      </div>

      <div className='form-tag2'>
      <label className='label-name' htmlFor="name">Experience</label>
      <input className='input-tag' type="text" />
      
      </div>

      <div className='form-tag2'>
      <button className='continue-btn'>Continue</button>
      
      </div>

      



      
      </div>

      </div>





      </>
  )
}

export default JoinAS
