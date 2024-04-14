import React, { useState } from "react";
import "./Profile.css";
import demo from "./Cumin_logo.png";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "John",
    surname: "Doe",
    mobile: "+1234567890",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    country: "United States",
    state: "California",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditModeToggle = () => {
    setIsEditMode(!isEditMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderFormInputs = () => {
    return (
      <div className="ppy5">
        <h4 className="textright">Profile Settings</h4>
        <div className="rowmt2">
          <div id="formll" className="colmd6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div id="formll" className="colmd6">
            <label className="labels">Surname</label>
            <input
              type="text"
              className="form-control"
              placeholder="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div id="formll" className="colmd12">
            <label className="labels">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter phone number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div id="formll" className="colmd12">
            <label className="labels">Github Profile</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 1"
              name="github"
              value={formData.github}
              onChange={handleChange}
            />
          </div>
          <div id="formll" className="colmd12">
            <label className="labels">Linkedin</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div id="formll" className="colmd12">
            <label className="labels">Email ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter email id"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div id="formll" className="colmd12">
            <label className="labels">Profession</label>
            <input
              type="text"
              className="form-control"
              placeholder="Profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="formll" className="rowmt3">
          <div className="colmd6">
            <label className="labels">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div id="formll" className="colmd6">
            <label className="labels">State/Region</label>
            <input
              type="text"
              className="form-control"
              placeholder="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button
            className="btn btn-primary profile-button"
            type="button"
            onClick={handleEditModeToggle}
          >
            Save Profile
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="Profile_container">
      <div className="profileImg">
        <h1 className="profiletiel">Profile Picture</h1>
        <div className="pf_pic">
          <label htmlFor="upload-button" className="upload-button">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile_image" />
            ) : (
              <img src={demo} alt="Profile" className="profile_image" />
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="upload-button"
          />
        </div>
        <div className="h2tagestitle">
          <h2 className="h2title">Hi</h2>
          <h2 className="h2title">hc</h2>
        </div>
      </div>
      <div className="profileform">
        {isEditMode ? (
          renderFormInputs()
        ) : (
          <div className="ppy4">
            <h4  className="textrigt">Profile Details</h4>
            <p className="paratext">
              <strong>Name:</strong> {formData.name} {formData.surname}
            </p>
            <p className="paratext">
              <strong>Mobile:</strong> {formData.mobile}
            </p>
            <p className="paratext">
              <strong>Github:</strong>{" "}
              <a href={formData.github}>{formData.github}</a>
            </p>
            <p className="paratext">
              <strong>LinkedIn:</strong>{" "}
              <a href={formData.linkedin}>{formData.linkedin}</a>
            </p>
            <p className="paratext">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="paratext">
              <strong>Profession:</strong> {formData.profession}
            </p>
            <p className="paratext">
              <strong>Location:</strong> {formData.country}, {formData.state}
            </p>
            <div id="btneditprofile" className="mt-3 text-center">
              <button
                className="btn btn-primary profile-button"
                type="button"
                onClick={handleEditModeToggle}
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
