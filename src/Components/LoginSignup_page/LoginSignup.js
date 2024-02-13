import React, { useState } from 'react';
import './LoginSignup.css'; // Import the CSS file
import googleLogo from './Google__G__logo.svg.png'

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div id="loginSignupContainer" className="outcont">
      <div className='box'>
        <div className="container">
          <div className="header">
            <div id="actionText" className="text">{action}</div>
            <div className="underline"></div>
          </div>
          {action === "Sign Up" && (
            <div id="nameInput" className="input">
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div id="emailInput" className="input">
            <input type="email" placeholder="Email id" />
          </div>
          <div id="passwordInput" className="input">
            <input type="password" placeholder="Password" />
          </div>
          {action === "Login" && (
            <div id="forgotPassword" className="forgot-password">
              Lost Password? <a href="/forgot-password">Click Here!</a>
            </div>
          )}

          <div className="submit-container">
            <div
              id="signupButton"
              className={action === "Login" ? "submit grey" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              id="loginButton"
              className={action === "Sign Up" ? "submit grey" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>

          {/* Space for Google Sign-In button logo */}

          <div className="google-signin-logo-container">
            <button className="google-signin-logo-container">
              <a href="#google-signin" className="google-signin-button">
                <img src={googleLogo} className="google-logo" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
