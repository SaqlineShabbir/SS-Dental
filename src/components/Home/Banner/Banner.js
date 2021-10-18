import React from 'react';
import img from '../../../Images/teeth.PNG'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text" >
            <h1>YYYYY Dental Care</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque architecto necessitatibus praesentium fugit amet delectus voluptates quo aperiam consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad facere ratione officiis ea vitae exercitationem amet quam sapiente voluptatem?</p>
            <button className="banner-button">About Us</button>

            </div>
           <div>
               <img src={img} alt="" />
           </div>
        </div>
    );
};

export default Banner;