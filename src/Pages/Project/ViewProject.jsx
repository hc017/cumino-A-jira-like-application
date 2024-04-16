import React, { useState, useEffect } from "react";
import "./ViewProject.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { MdOutlineTaskAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewProject = () => {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    
    // Fetch user's projects
    const token = localStorage.getItem("token");
   // Fetch projects created by the user
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
              Good {time.includes("AM") ? "Morning" : "Evening"}, HC
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
          </div>
        </div>
        <div className="VPDown">
          <h1 className="h1VP">View Projects</h1>
          {projects.map((project, index) => (
            <div className="projectreact" key={index}>
              <div className="PR_left">
                <p className="prtitle">{project.projectName}</p>
                <div className="subPRtitles">
                  {/* You can replace placeholder text with actual data */}
                  <p className="subprtitle">Owner Name: {project.ownerName}</p>
                  <p className="subprtitle">Team member count: {project.teamMembers.length}</p>
                  <p className="subprtitle">Project ID: {project._id}</p>
                </div>
              </div>
              <div className="PR_right">
                <button className="PRedit_btn">Edit Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
