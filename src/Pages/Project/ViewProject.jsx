import React from "react";
import "./ViewProject.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { MdOutlineTaskAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const ViewProject = () => {
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


          <div className="projectreact">
            <div className="PR_left">
              <p className="prtitle">Project title</p>
              <div className="subPRtitles">
                <p className="subprtitle">Owner Name</p>
                <p className="subprtitle">team member count</p>
                <p className="subprtitle">project id</p>
              </div>
            </div>
            <div className="PR_right">
              <button className="PRedit_btn">Edit Details</button>
            </div>
          </div>


          <div className="projectreact">
            <div className="PR_left">
              <p className="prtitle">Project title</p>
              <div className="subPRtitles">
                <p className="subprtitle">Owner Name</p>
                <p className="subprtitle">team member count</p>
                <p className="subprtitle">project id</p>
              </div>
            </div>
            <div className="PR_right">
              <button className="PRedit_btn">Edit Details</button>
            </div>
          </div>


          <div className="projectreact">
            <div className="PR_left">
              <p className="prtitle">Project title</p>
              <div className="subPRtitles">
                <p className="subprtitle">Owner Name</p>
                <p className="subprtitle">team member count</p>
                <p className="subprtitle">project id</p>
              </div>
            </div>
            <div className="PR_right">
              <button className="PRedit_btn">Edit Details</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
