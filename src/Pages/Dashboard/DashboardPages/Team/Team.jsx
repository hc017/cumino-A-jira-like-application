import React, { useState, useEffect } from "react";
import "./Team.css";
import Sidebar from "../../Sidebar/Sidebar";
import TeamPlayerCard from "./TeamPlayerCard";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import axios from "axios";
import { useLocation } from "react-router-dom";
import noselected from "./noselection.png";
import pq from "./P1.png";

const Team = () => {
  const [sortBy, setSortBy] = useState("name"); // Default sort by name
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [teammates, setTeammates] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get("projectId");

  const [email, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("userEmail");

        if (!token || !userEmail) {
          console.error("Token or userEmail not found in localStorage");
          return;
        }

        // Store user's email in state
        setUserEmail(userEmail);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Send a POST request to fetch user's projects
        const response = await axios.post(
          "http://localhost:5000/api/users/userprojects",
          { userEmail }, // Send user's email in the request body
          config
        );
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching user projects:", error);
      }
    };

    fetchUserProjects();
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
          <label htmlFor="project">Select Project:</label>
          <select id="sort" onChange={handleProjectChange}>
            <option value="">Select a project</option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>
        {selectedProjectId ? (
          <div className="Tcards-container">
            {loading ? (
              <p>Loading teammates...</p>
            ) : teammates.length > 0 ? (
              teammates.map((teammate, index) => (
                <div key={index} className="Tcard">
                  <TeamPlayerCard name={teammate} />
                </div>
              ))
            ) : (
              <p>No teammates found for this project.</p>
            )}
          </div>
        ) : (
          <div className="displaytext">
            <img className="project_no" src={pq} alt="" />
            <h2 className="disp_text">You Haven't Selected Any Project</h2>
          </div>
        )}
      </div>
      <div className="TeamBoard_DW">
        <ActivityFeed />
      </div>
    </div>
  </div>
);
};

export default Team;
