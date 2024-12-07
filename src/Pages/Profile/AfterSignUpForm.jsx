import React, { useState } from "react";
import "./AfterSignUpForm.css";
import Flogo from "./Cumin_logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AfterSignUpForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // Define error state
  const location = useLocation(); // Use useLocation hook to access location state
  const { state } = location; // Destructure state from location
  // Initialize state variables
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [designation, setDesignation] = useState("");
  const [github, setGithub] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const token = localStorage.getItem("token");
    //   const userEmail = localStorage.getItem("userEmail");

    //   if (!token || !userEmail) {
    //     console.error("Token or userEmail not found in localStorage");
    //     return;
    //   }

    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    //   const formData = {
    //     fullName,
    //     college,
    //     designation,
    //     github,
    //     mobile,
    //     whatsapp,
    //     email: userEmail, // Pass the userEmail to the backend
    //   };

    //   const response = await axios.post("http://localhost:5000/api/users/addi", formData, config);

    //   console.log(response.data);
      window.alert("Data added");
      navigate("/projectoverview")
      // Optionally, you can navigate to another page upon successful submission
    // } catch (error) {
    //   console.error("Error storing additional details:", error);
    //   setError("Internal server error");
    // }
  };



  return (
    <div className="AFS_component">
      <div className="AFS_Left">
        <img src={Flogo} className="" alt="Cumin Logo" />
        <h1 className="AFS_title">Welcome to Cumin</h1>
        <p className="AFS_subtitile">
          Let's take your project planning experience to the next level
        </p>
        <p className="AFS_subtitile">
          Please fill in all the details carefully
        </p>
      </div>
      <div className="AFS_Right">
        <div className="AFS_Form_Container">
          <form>
            <h1 className="formtile">Lets know You...</h1>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="fullname">Full Name:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="fullname"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="college">College/University:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="college"
                  name="college"
                  placeholder="Enter your college/university"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="designation">Designation:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="Enter your designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="github">GitHub Profile:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="github"
                  name="github"
                  placeholder="Enter your GitHub profile link"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="mobile">Mobile Number:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="whatsapp">WhatsApp Number:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="Enter your WhatsApp number"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="AFSbtndiv">
              <button onClick={handleSubmit} id="ASFbtn" type="submit">
                Submit
              </button>
              <button id="ASFbtn" type="reset">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AfterSignUpForm;
