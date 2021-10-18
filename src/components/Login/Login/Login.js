import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../Images/login2.jpg'
const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home'
   const history = useHistory()
    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        } )
    }
    return (
        <div className="register">
        <div>
            <img src={img} alt="" />
            </div>
            <div className="login">
        <div className="  p-4 my-5 py-5 ">
        <h3 className="mb-4 fw-bold">Log In</h3>
            <form onSubmit="">
 <label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1"/>
<br/>
                <input className="register-button mt-2 w-100" type="submit" value="Log In" />
            </form>
            <p className="my-3">New To Dental Care? <Link to="/signup">Sign Up</Link></p>
         <button onClick={handleGoogleLogIn} className="register-button w-100 "><i class="fab fa-google"></i> Sign In with Google</button>
        </div>
    </div>
        
    </div>
    );
};

export default Login;