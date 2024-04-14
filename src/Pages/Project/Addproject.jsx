import React, { useState } from "react";
import "./Addproject.css";
import PRN from "./PRM.mp4";
import { useNavigate } from "react-router-dom";

const Addproject = () => {
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [newTeamMember, setNewTeamMember] = useState("");
  const navigate = useNavigate();

  const handleAddTeamMember = () => {
    if (newTeamMember !== "") {
      setTeamMembers([...teamMembers, newTeamMember]);
      setNewTeamMember("");
    }
  };
  const handleAddTeamMembers = () => {
    if (newTeamMember !== "") {
      const newTeamMembers = [];
      for (let i = 0; i < parseInt(teamSize); i++) {
        newTeamMembers.push(`${newTeamMember} ${i + 1}`);
      }
      setTeamMembers([...teamMembers, ...newTeamMembers]);
      setNewTeamMember("");
    }
  };

  const handleSubmitProject = (e) => {
    e.preventDefault();
    // Here you can add code to process the form submission
    // After processing, navigate to the Project Overview page
    navigate("/projectoverview");
  };

  return (
    <div className="addproject_container">
      <div className="Ac_left">
        <div className="AFS_Form_Container" id="AC_containerform">
          <form onSubmit={handleSubmitProject}>
            <h1 className="formtile">Project Details</h1>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="projectName">Project Name:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  placeholder="Give a Unique Project Name"
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="role">Role:</label>
              </div>
              <div className="VIinput">
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Project Manager">Project Manager</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="github">Github Repository:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="github"
                  name="github"
                  placeholder="Github Repository Link"
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="gmeet">Gmeet Link:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="gmeet"
                  name="gmeet"
                  placeholder="Give your Google Meet Link for this project"
                  required
                />
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="teamSize">Team Size:</label>
              </div>
              <div className="VIinput">
                <select
                  id="teamSize"
                  name="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  required
                >
                  <option value="">Select Team Size</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="formgroup">
              <div className="Vilabel">
                <label htmlFor="addmem">Add Team Members:</label>
              </div>
              <div className="VIinput">
                <input
                  type="text"
                  id="addmem"
                  name="addmem"
                  value={newTeamMember}
                  onChange={(e) => setNewTeamMember(e.target.value)}
                  placeholder="Enter Your teammate Email ID"
                  required
                />
              </div>
            </div>
            <div className="teamMembers">
              <button
                className="addbutn"
                type="button"
                onClick={handleAddTeamMembers}
              >
                Add
              </button>
              {teamMembers.map((member, index) => (
                <div className="viewmwm" key={index}>
                  {member}
                </div>
              ))}
            </div>
            <div className="AFSbtndiv">
              <button id="ASFbtn" type="submit">
                Submit
              </button>
              <button id="ASFbtn" type="button">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="Ac_Right">
        <div className="video_Ac_container">
          <video
            width="100%"
            height="100%"
            src={PRN}
            loop
            muted
            autoPlay
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Addproject;
