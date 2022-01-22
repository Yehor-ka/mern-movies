import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import {login} from '../../authContext/apiCalls'
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate() 
  const {dispatch} = useContext(AuthContext)
  const handleChange = (e) => {
    setAuth(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleAuth = (e) => {
    e.preventDefault()
    login(auth, dispatch)
    
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" name="email" value={auth.email} onChange={e => handleChange(e)} placeholder="Email or phone number" />
          <input type="password" name="password" value={auth.password} onChange={e => handleChange(e)} placeholder="Password" />
          <button onClick={e => handleAuth(e)} className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b style={{cursor: 'pointer'}} onClick={() => navigate('/register')}>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
            .
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
