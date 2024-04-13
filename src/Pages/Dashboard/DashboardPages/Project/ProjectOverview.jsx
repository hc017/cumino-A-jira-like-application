import React from "react";
import "./ProjectOverview.css";
import Sidebar from "../../Sidebar/Sidebar";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCalendarViewDay } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectOverview = () => {
  return (
    <div className="PO_component">
      <Sidebar />
      <div className="PO_innerComponent">
        <div className="PO_greeting">
          <div className="PO_text_box">
            <h3 className="POtitle">Saturday, April 13</h3>
            <h1 className="PO_tilteH1">Good Evening, HC</h1>
            <div className="PO_featureComp">
              <button className=" PO_butn">
                <MdOutlineTaskAlt className="PO_icon" />
                Projects
              </button>
              <button className=" PO_butn">
                <CgProfile className="PO_icon" />
                Profile
              </button>
            </div>
          </div>
        </div>
        <div className="PO_down_part">
          <Link className="Po_BOx">
            <IoAddCircleOutline className="POBOX_icon" />
            <p className="btn_title_PO_box">Add Project</p>
          </Link>
          <Link className="Po_BOx">
            <MdOutlineCalendarViewDay className="POBOX_icon" />

            <p className="btn_title_PO_box">View Projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
