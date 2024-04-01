import React from 'react'
import "./SignIn.css"
import Loginbg from "./Loginbg.jpg";
import Rlogo from "./Cumin_logo.png";
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className='SignIn'>
        <div className="SI_inncomp">
        <div class="new-container">
  <input type="checkbox" id="new-flip" />
  <div class="new-cover">
    <div class="new-front">
      <img src={Loginbg} alt="" />
      <div class="new-text"></div>
    </div>
    <div class="new-back">
      <img class="new-backImg" src={Rlogo} alt="" />
      <div class="new-text"></div>
    </div>
  </div>
  <div class="new-forms">
    <div class="new-form-content">
      <div class="new-login-form">
        <div class="new-title">Login</div>
        <form action="#">
          <div class="new-input-boxes">
            <div class="new-input-box">
              <i class="fas fa-envelope"></i>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class="new-input-box">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div class="new-text">
              <a href="#">Forgot password?</a>
            </div>
            <div className="new-GGlogo">
              <Link className="new-LGlogo"><FcGoogle className="new-Glogo"  /></Link>
              <Link className="new-LGlogo"><FaGithub className="new-Glogo" /></Link>
            </div>
            <div class="new-button new-input-box">
              <input type="submit" value="Submit" />
            </div>
            <div class="new-text sign-up-text">
              Don't have an account? <label for="new-flip">Signup now</label>
            </div>
          </div>
        </form>
      </div>
      <div class="new-signup-form">
        <div class="new-title">Signup</div>
        <form action="#">
          <div class="new-input-boxes">
            <div class="new-input-box">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class="new-input-box">
              <i class="fas fa-envelope"></i>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class="new-input-box">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div class="new-input-box">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="new-GGlogo">
              <Link className="new-LGlogo"><FcGoogle className="new-Glogo"  /></Link>
              <Link className="new-LGlogo"><FaGithub className="new-Glogo" /></Link>
            </div>
            <div class="new-button new-input-box">
              <input type="submit" value="Submit" />
            </div>
            <div class="new-text sign-up-text">
              Already have an account? <label for="new-flip">Login now</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

            
        </div>
    </div>
  )
}

export default SignIn