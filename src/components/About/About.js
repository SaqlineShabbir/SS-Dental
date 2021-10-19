import React from 'react';
import './About.css'

import img1 from '../../Images/doctor1.jpg'
import img2 from '../../Images/doctor2.jpg'
import img3 from '../../Images/doctor3.jpg'
const About = () => {
    return (
        <div>
           <div className="about-first">
           <div className="mt-5">
        <h3>All You Need To Know About Us </h3>
        <p>Everything you need to know about us just click thous buttons .</p>
        </div>
           </div>
        <div className="about">
            
              <div className="">
              <div className="bg-dark text-white about-texts">
         <h4 className="text-center my-5">About SS Dental</h4>
         <p className="text-center">SS Dental is a dental clinic here you will get all the  services related teeth . We started this clinic year ago . now we are  quit popular in Dhaka city. ss dental always try to help people to smile freely . we work for yor beautiful smile . ?</p>
         <button className="about-button">View details</button>
            </div>
              </div>

          <div>
          <div className="about-texts">
          <h4 className="text-center my-5">About Our Team </h4>
          <p className="text-center">We have dedicated team members here . they always try to fix problems nicely . we teaches them to behave like family members. you are always welcome to this awesome team . you will get better treatment.</p>
          <button className="about-button">View details</button>
            </div>
          </div>
         
         <div>
         <div  className="bg-dark text-white about-texts">
           <h4 className="text-center my-5"> About Our Services </h4>
           <p className="text-center">We offering you best services in the city . we have 10 services available right now working on improvement. hope you will get more services soon, btw dont forget to make your teeth more white from us and dont forget to brush your teeth</p>
           <button className="about-button">View details</button>
            </div>
         </div>

        </div>

          <div>

         <h4 className="text-center expert">Our Expert Doctors </h4>
          <div className="doctors">
            
            <div className="single-doctor shadow-lg">
              
               <img src={img1} alt="" />
               <h5 className="p-2">Name : Dr. Jenny Smith </h5>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste fugiat molestias temporibus dolorum porro laborum in at itaque consequuntur!</p>
            </div>

            <div className="single-doctor shadow-lg">
            
               <img src={img2} alt="" />
               <h5 className="p-2">Name : Dr. Luke </h5>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste fugiat molestias temporibus dolorum porro laborum in at itaque consequuntur!</p>
            </div>
            <div className="single-doctor shadow-lg">
            
               <img src={img3} alt="" />
               <h5 className="p-2">Name : Dr. Haniya iqbal </h5>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste fugiat molestias temporibus dolorum porro laborum in at itaque consequuntur!</p>
            </div>
         </div>

          </div>

        </div>
    );
};

export default About;