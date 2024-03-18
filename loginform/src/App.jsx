import React from 'react';
import './App.css';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from 'react-icons/fa';

function App() {
  return (
    <div className='body'>
      <div className='wrapper'>
        <h1>LOGIN FORM</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required /> 
          <FaUserAlt />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock />
        </div>

        <div className='remember-forget'>
          <label>
            <input type='checkbox' /> Remember me 
          </label>
          <a href='#'>forgot password?</a>
        </div>

        <button type='submit' className='btn'>
          Login
        </button>

        <div className='register-link'>
          <p>Don't have an account? <a href='#'>Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
