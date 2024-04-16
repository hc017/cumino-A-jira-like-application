import React, { useState } from "react";
import "./Addproject.css";
import PRN from "./PRM.mp4";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests

const Addproject = () => {
  const [projectName, setProjectName] = useState(""); // Define projectName state
  const [role, setRole] = useState("");
  const [github, setGithub] = useState(""); // Define github state
  const [gmeet, setGmeet] = useState(""); // Define gmeet state
  const [teamSize, setTeamSize] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [newTeamMember, setNewTeamMember] = useState("");
  const navigate = useNavigate();
  const [teamMemories, setTeamMemories] = useState([]);
  const [error, setError] = useState(""); // Define error state

  const handleAddTeamMember = () => {
    if (newTeamMember !== "") {
      const newTeamMembers = [];
      const size = parseInt(teamSize);
      for (let i = 0; i < size; i++) {
        const newMember = `${newTeamMember} ${i + 1}`;
        newTeamMembers.push(newMember);

        // Optionally, add the new team member to teamMemories array
        setTeamMemories([...teamMemories, newMember]);
      }

      // Add the new team members to teamMembers array
      setTeamMembers([...teamMembers, ...newTeamMembers]);

      // Clear the input field for new team members
      setNewTeamMember("");
    }
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("userEmail");

        if (!token || !userEmail) {
            console.error("Token or userEmail not found in localStorage");
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const formData = {
            projectName,
            role,
            projectRepository: github,
            projectMeet: gmeet,
            teamSize,
            teamMembers,
            ownerEmail: userEmail, // Pass the userEmail to the backend
        };

        const response = await axios.post("http://localhost:5000/api/users/addproject", formData, config);

        console.log(response.data);
        window.alert("Project details added successfully");
        navigate("/projectoverview");
    } catch (error) {
        console.error("Error adding project details:", error);
        setError("Internal server error");
    }
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
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
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
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
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
                  value={gmeet}
                  onChange={(e) => setGmeet(e.target.value)}
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
                />
              </div>
            </div>
            <div className="teamMembers">
              {teamMembers.length < parseInt(teamSize) && (
                <div className="teamMembers">
                  <button
                    className="addbutn"
                    type="button"
                    onClick={handleAddTeamMember}
                  >
                    Add
                  </button>
                </div>
              )}
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
          <video width="100%" height="100%" src={PRN} loop muted autoPlay></video>
        </div>
      </div>
    </div>
  );
};

export default Addproject;
