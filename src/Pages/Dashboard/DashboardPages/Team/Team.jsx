// Team.js

import React, { useState, useEffect } from "react";
import "./Team.css";
import Sidebar from "../../Sidebar/Sidebar";
import TeamPlayerCard from "./TeamPlayerCard";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Team = () => {
  const [sortBy, setSortBy] = useState("name"); // Default sort by name
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [teammates, setTeammates] = useState([]);

  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get("projectId");

  useEffect(() => {
    // Fetch user's projects
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/users/userprojects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((error) => {
        console.error("Error fetching user's projects:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch teammates when a project is selected
    if (selectedProjectId) {
      const token = localStorage.getItem("token");
      axios
        .get(`http://localhost:5000/api/users/projects/${selectedProjectId}/teammates`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTeammates(response.data.teamMembers);
        })
        .catch((error) => {
          console.error("Error fetching teammates:", error);
        });
    }
  }, [selectedProjectId]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleProjectChange = (event) => {
    setSelectedProjectId(event.target.value);
  };

  return (
    <div className="Team_component">
      <Sidebar />
      <div className="TeamBoard">
        <div className="TeamBoard_UP">
          <div className="sort-dropdown">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="name">Name</option>
              <option value="role">Role</option>
              <option value="department">Department</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>
          <div className="project-dropdown">
            <label htmlFor="project">Select Project:</label>
            <select id="project" onChange={handleProjectChange}>
              <option value="">Select a project</option>
              {projects.map((project) => (
                <option key={project._id} value={project._id}>
                  {project.projectName}
                </option>
              ))}
            </select>
          </div>
          <div className="Tcards-container">
            {teammates.map((teammate, index) => (
              <div key={index} className="Tcard">
                <TeamPlayerCard name={teammate} />
              </div>
            ))}
          </div>
        </div>
        <div className="TeamBoard_DW">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Team;
