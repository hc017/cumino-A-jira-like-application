import React, { useState } from "react";
import "./SignIn.css";
import Loginbg from "./Loginbg.jpg";
import Rlogo from "./Cumin_logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

// const backendUrl = process.env.ENVIRONMENT === "dev" ? "http://localhost:5000" : "https://eco-eats-website-back-end.vercel.app";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook to access location state
  const { state } = location; // Destructure state from location
  const [userId, setUserId] = useState(""); // Define userId state

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users/login";
      const response = await axios.post(url, { email, password });
  
      if (response.status === 200) {
        const { token, userEmail } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userEmail", userEmail); // Store userEmail in localStorage
        window.alert("Login Successfully!!!");
        navigate("/siginupform");
      } else {
        setError("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Internal server error");
    }
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users/signup";
      const response = await axios.post(url, {
        username,
        email,
        password
      });
  
      console.log("Response status:", response.status);
      console.log("Response data:", response.data);
  
      if (response.status === 201) {
        // User created successfully, you can handle the response here
        // For example, if you want to navigate to another page
        window.alert("Registered Successfully. Now go back and login.");
        navigate("/");
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Internal server error");
    }
  };
  
  

  return (
    <div className="SignIn">
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
                <form>
                  <div class="new-input-boxes">
                    <div class="new-input-box">
                      <i class="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="new-input-box">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="new-text">
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="new-GGlogo">
                      <Link  className="new-LGlogo">
                        <FcGoogle className="new-Glogo" />
                      </Link>
                      <Link className="new-LGlogo">
                        <FaGithub className="new-Glogo" />
                      </Link>
                    </div>
                    <Link onClick={handleLogin}  class="new-button new-input-box">
                      <input type="submit" value="Submit" />
                    </Link>
                    <div class="new-text sign-up-text">
                      Don't have an account?{" "}
                      <label for="new-flip">Signup now</label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="new-signup-form">
                <div class="new-title">Signup</div>
                <form action="#" onSubmit={handleSignup}>
                  <div class="new-input-boxes">
                    <div class="new-input-box">
                      <i class="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div class="new-input-box">
                      <i class="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="new-input-box">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                      <Link className="new-LGlogo">
                        <FcGoogle className="new-Glogo" />
                      </Link>
                      <Link className="new-LGlogo">
                        <FaGithub className="new-Glogo" />
                      </Link>
                    </div>
                    <div class="new-button new-input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div class="new-text sign-up-text">
                      Already have an account?{" "}
                      <label for="new-flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
