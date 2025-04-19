import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function SignUp() {
    const navigate = useNavigate();
  
  const handleSignUp = () => {    
    navigate('/login');
  };
  return (
    <>
    <div className="login">
    <div className="login-page">
      <h2>SignUp</h2>
      <form className="login-form">
        <input type="name" placeholder="Enter your name" class = "name" required /><br /><br />
        <input type="email" placeholder="Email" class = "email" required /><br /><br />
        <input type="password" placeholder="Password" class = "password" required /><br /><br />
        <textarea
             placeholder="Enter your Full Address"
             className="address"
             style={{ width: '98%', 
                      borderRadius: '13px' ,
                      backgroundColor:'#e2f2ffed',
                      textAlign:'center'
                    }}
             required
        ></textarea><br /><br />
        <button className ="login-form" onClick={handleSignUp}>SignUp</button>
        <button className ="signUp"><Link to="/login">Login</Link></button>
      </form>
    </div>
    </div>
    
    </>
  )
}

export default SignUp
