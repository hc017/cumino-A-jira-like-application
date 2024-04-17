import React, { useState, useEffect } from "react";
import "./ProjectOverview.css";
import Sidebar from "../../Sidebar/Sidebar";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCalendarViewDay } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectOverview = () => {
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString(undefined, { weekday: "long" });
  const date = currentDate.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });
  const time = currentDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [email, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [projects, setProjects] = useState([]);
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
  
  

  const handleProjectSelect = (event) => {
    const selectedProjectId = event.target.value;
    // Redirect to the Team page with selected project ID
    window.location.href = `/teamates?projectId=${selectedProjectId}`;
  };

  return (
    <div className="PO_component">
      <Sidebar />
      <div className="PO_innerComponent">
        <div className="PO_greeting">
          <div className="PO_text_box">
            <h3 className="POtitle">
              {day}, {date}
            </h3>
            <h1 className="PO_tilteH1">
              Good {time.includes("AM") ? "Morning" : "Evening"}, {userName}
            </h1>
            <div className="PO_featureComp">
              <Link to="/viewproject" className=" PO_butn">
                <MdOutlineTaskAlt className="PO_icon" />
                Projects
              </Link>
              <Link to="/profile" className=" PO_butn">
                <CgProfile className="PO_icon" />
                Profile
              </Link>
            </div>
            <select
              name="Project"
              id="selectproject"
              onChange={handleProjectSelect}
            >
              <option value="">Select Project</option>
              {projects.map((project) => (
                <option key={project._id} value={project._id}>
                  {project.projectName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="PO_down_part">
          <Link to="/addprojectform" className="Po_BOx">
            <IoAddCircleOutline className="POBOX_icon" />
            <p className="btn_title_PO_box">Add Project</p>
          </Link>
          <Link to="/viewproject" className="Po_BOx">
            <MdOutlineCalendarViewDay className="POBOX_icon" />
            <p className="btn_title_PO_box">View Projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
