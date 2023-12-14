import React from 'react';
import '../Home/NewHome.css';
import Cross from '../images/close.png';
import img1 from "../images/search.png";
import img2 from "../images/image 2.png";
import img3 from "../images/iconamoon_bookmark.png";

const NewHome = () => {
  return (
    <div className="newrecruiter-sec">
    <div className="recruiter">


    <div className="recruiter-part">
    <p className='p-tag'>Wanna Post Jobs?</p>
    <button className='recruiter-btn'>Join as a Recruiter</button>
    </div>

    <div className="recruiter-part">

    <div className='cross-sec'>
    <img className='cross-img' src={Cross} alt="cross" />

    </div>

    <p className='p-tag'>Wanna Find Work?</p>
    <button className='recruiter-btn'>Join as a Freelancer</button>
    </div>


    </div>

    <div className="container">
    <div className="home-sec">
      <div className="frame2">
        <div className="search-sec">
          <input
            className="search-bar"
            type="search"
            placeholder="Search Your Next Work"
          />
          <img className="search-icon" src={img1} alt="" />
        </div>

        <div className="job-sec">
          <ul className="job-title">
            <li>Design</li>
            <li>Programming & Tech</li>
            <li>Data</li>
            <li>Photography</li>
            <li>Video & Animation</li>
            <li>Content Writing</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
      </div>

      <div className="line"></div>

      <div className="explore">
        <h2>Graphic Design</h2>
        <h3 className="explore-more">Explore More ➜</h3>
      </div>

      <div className="box-sec">
        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>
      </div>



      <div className="explore">
        <h2>Website Development</h2>
        <h3 className="explore-more">Explore More ➜</h3>
      </div>

      <div className="box-sec">
        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>
      </div>


      <div className="explore">
        <h2>Marketing</h2>
        <h3 className="explore-more">Explore More ➜</h3>
      </div>

      <div className="box-sec">
        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>
      </div>


      <div className="explore">
        <h2>Video Editing</h2>
        <h3 className="explore-more">Explore More ➜</h3>
      </div>

      <div className="box-sec">
        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>

        <div className="box">
          <div className="icons">
            <img className="logo-img" src={img2} alt="company logo" />
            <img className="save-img" src={img3} alt="save" />
          </div>

          <div className="content-sec">
            <h3>Graphic Designer</h3>
            <h4 className="company-name">Jio</h4>
            <p className="locatio-name">Mumbai, Maharashtra, India</p>
            <p className="rupees">₹ 25,000/Month</p>
            <p className="remote">Remote</p>
          </div>
        </div>
    </div>
    </div>

    </div>
    </div>
  )
}

export default NewHome
