import React from 'react';
import img1 from '../images/upload.png'

const Recruiter = () => {
  return (
    <div className="container">

      <div className="containers">
      <h2 className='join-tag'>Join as a Recruiter</h2>
      <p>Post your jobs at ease</p>


      <div className='form-tag'>
      <label className='label-name' htmlFor="name">Name of the Recruiter</label>
      <input className='input-tag' type="text" />
      
      </div>

      <div className='form-tag2'>
      <label className='label-name' htmlFor="name">Name of the Company</label>
      <input className='input-tag' type="text" />
      
      </div>

      <div className='form-tag3'>
      <label className='label-name' htmlFor="name">About your company</label>
      <textarea className='input-tag2' name="postContent" rows={4} cols={40} />
      
      </div>

      <div className='form-tag3'>
      <label className='label-name' htmlFor="name">Upload your 
      company’s Logo</label>
      <label  id="level_btn" for="upload_btn"><img src={img1} alt='upload' />Upload Logo</label>
      </div>

      

      <div className='form-tag2'>
      <button className='continue-btn'>Continue</button>
      
      </div>

      



      
      </div>

      </div>

  )
}

export default Recruiter
