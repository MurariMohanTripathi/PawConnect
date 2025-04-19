// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  
  const handleLogin = () => {    
    navigate('/');
  };


  return (
    <>
    <div className="login">
      <div className="login-page">
        <h2>Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" class = "email" required /><br /><br />
          <input type="password" placeholder="Password" class = "password" required /><br /><br />
          <button className ="login-form" onClick={handleLogin}>Login</button>
          <button className ="signUp" ><Link to="/SignUp">SignUp</Link></button>
          <button className ="forgot_Pass" ><Link to="/SignUp">Forgot Password</Link></button>
        </form>
      </div>
    </div>
    
    </>
  );
}

export default Login;
