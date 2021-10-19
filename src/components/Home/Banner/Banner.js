import React from 'react';
import img from '../../../Images/teeth.PNG'
import './Banner.css'
const Banner = () => {
    return (
        <div id="home" className="banner">
            <div className="banner-text" >
            <h1>SS Dental</h1>
            <p>We believe in human communication, not robotic communication. Once you sign up with SS Dental, you can expect exceptional service from real people. You will have access to a wealth of information from live support reps and trainers to hundreds of additional resources.  We know how to innovate and grow with technology and are continually improving our products and features</p>
            <button className="banner-button">About Us</button>

            </div>
           <div>
               <img src={img} alt="" />
           </div>
        </div>
    );
};

export default Banner;