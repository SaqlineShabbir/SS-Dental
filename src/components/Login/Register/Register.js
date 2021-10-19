import React, { useState } from 'react';
import './Register.css'
import img from '../../../Images/login2.jpg'
import { Link } from 'react-router-dom';

import useFirebase from '../../../hooks/useFirebase';
const Register = () => {
    const {signInUsingGoogle, handleRegister,handleEmailChange,handlePasswordChange, error, handleNameChange} = useFirebase()

  

    // const handleRegistration = (e) =>{
    //      e.preventDefault();
    //     handleRegister(email,password)
    // }

    //  const handleNameChange = (e) =>{
    //      setName(e.target.value)
    //  }

    return (
        <div className="register">
            <div>
                <img src={img} alt="" />
                </div>
                <div className="login">
            <div className="  p-4 my-5 py-5 ">
            <h3 className="mb-4 fw-bold">Creat Account</h3>
        <form onSubmit={handleRegister}>
     <label htmlFor="inputName" className="form-label">Your Name</label>
    <input type="text" onBlur={handleNameChange}className="form-control"  aria-describedby=""/><br/>
     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onBlur={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onBlur={handlePasswordChange} className="form-control" id="exampleInputPassword1"/>
  <br/>
  <p className="text-danger">{error}</p>
                    <input className="register-button mt-2 w-100" type="submit" value="Creat your Dental Care account" />
                </form>
                <p className="my-3">Already Have An Account? <Link to="/login">  Log In</Link></p>
             <button onClick={signInUsingGoogle} className="register-button w-100 "><i className="fab fa-google"></i> Sign In with Google</button>
            </div>
        </div>
            
        </div>
    );
};

export default Register;