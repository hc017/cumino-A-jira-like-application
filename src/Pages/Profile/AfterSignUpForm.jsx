import React from "react";
import "./AfterSignUpForm.css";
import Flogo from "./Cumin_logo.png";
import { useNavigate } from "react-router-dom";

const AfterSignUpForm = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to process the form submission
    // After processing, navigate to the Project Overview page
    navigate("/projectoverview");
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
          <form onSubmit={handleSubmit}>
            <h1 className="formtile">Lets know You...</h1>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="fullname">Full Name:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="VIinput">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your
                email address"
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
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="github">GitHub Profile:</label>
              </div>
              <div className="VIinput">
                {/* <input
                  type="url"
                  id="github"
                  name="github"
                  placeholder="Enter your GitHub profile link"
                
                /> */}
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="mobile">Mobile Number:</label>
              </div>
              <div className="VIinput">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
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
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="Enter your WhatsApp number"
                  required
                />
              </div>
            </div>
            <div className="AFSbtndiv">
              <button id="ASFbtn" type="submit">
                Submit
              </button>
              <button id="ASFbtn" type="submit">
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
