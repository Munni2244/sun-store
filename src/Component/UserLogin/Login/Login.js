import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {loginUser}=useAuth();
    const [login, setLogin]=useState({});
    
    const handleField = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        const newValue = { ...login };
        newValue[field] = value;
        console.log(newValue);
        setLogin(newValue);
    }
    const navigate=useNavigate();
    const location =useLocation();
    console.log(location);

    const handleSubmit = (e) => {
       
        loginUser(login.email, login.password, location, navigate);
         alert('login success');
        e.preventDefault();

    }
    return (
        <div  className="row user">
            
        <div style={{marginTop:'100px'}} className="col-12 col-lg-12 text-center">
        <h1 className="mb-4">Please Login <i class="fas fa-sign-in-alt text-warning"></i></h1>
            <form onSubmit={handleSubmit} >

                <div >
                    <input onBlur={handleField} name="email" type="email" style={{ width: '35%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1"  placeholder="Email" />
                </div>

                <div >
                    <input onBlur={handleField} name="password" type="password" id="exampleInputPassword1" placeholder="Password" style={{ width: '35%' }} className="mb-3  rounded-pill  p-2 field" />
                </div> <br />
                <button type="submit" style={{ width: '35%' }} className=" p-2   rounded-pill mb-3">Submit</button>
                <div>
                <Link style={{color:'pink'}} to="/register">Are You New User? Please Register!</Link>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;