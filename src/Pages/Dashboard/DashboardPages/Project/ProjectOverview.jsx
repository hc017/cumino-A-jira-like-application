import React from "react";
import "./ProjectOverview.css";
import Sidebar from "../../Sidebar/Sidebar";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCalendarViewDay } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectOverview = () => {

  const currentDate = new Date();
  const day = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
  const date = currentDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });
  const time = currentDate.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <div className="PO_component">
      <Sidebar />
      <div className="PO_innerComponent">
        <div className="PO_greeting">
          <div className="PO_text_box">
          <h3 className="POtitle">{day}, {date}</h3>
            <h1 className="PO_tilteH1">Good {time.includes('AM') ? 'Morning' : 'Evening'}, HC</h1>
            <div className="PO_featureComp">
              <Link to="/viewprojet" className=" PO_butn">
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
