import React, { useContext } from 'react';
import { useState } from 'react';
import './login.css';
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          className="loginInput"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginBtn" onClick={handleLogin} disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
