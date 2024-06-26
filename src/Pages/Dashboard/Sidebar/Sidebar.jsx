import React from "react";
import "./Sidebar.css";
import prof from "./prof.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdViewTimeline } from "react-icons/md";
import { GrPlan } from "react-icons/gr";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  function redirectTohome() {
    // Replace the URL with the desired destination
    window.location.href = "/" ;
}


  

  return (
    <div className={`Sidebar_component ${collapsed ? 'collapsed' : ''}`}>
      <div className="Sidebar_profile_section">
        <div onClick={toggleSidebar} class="infocardContainer">
          <div className="divi" id="main">
            <img src={prof} alt="" />
          </div>
          <div className="divi">
            {/* Additional content inside the profile section */}
          </div>
        </div>
      </div>

      <div className="S_search">
        <div class="search_box">
          <button class="btn_search">
            <IoSearchOutline className="sicon" />
          </button>
          <input
            type="text"
            class="input_search"
            placeholder="Type to Search..."
          />
        </div>
      </div>

      {/* Rest of your sidebar content */}
      <div className={`S_list ${collapsed ? 'collapsed' : ''}`}>
        <Link to="/projectoverview" className="a" id="atitle">
          Project Overview
        </Link>
        <div className="Sbar_line"></div>
        <div className="SB_team">
          <p className="SB_subtitle">TEAM</p>
          <Link to="/teamates" className="a">
            {" "}
            <FaPeopleGroup className="SB_icons" />
            Team Buddies
          </Link>
          <a href="https://meet.google.com/nuc-ipmi-qgb" className="a">
            {" "}
            <SiGooglemeet className="SB_icons" />
            Meetings
          </a>

        </div>
        <div className="Sbar_line"></div>
        <div className="SB_team">
          <p className="SB_subtitle">PLANING</p>
          <Link to="/timeline" className="a">
            <MdViewTimeline className="SB_icons" />
            Timeline
          </Link>
          <Link to="/task" className="a">
            <GrPlan className="SB_icons" />
            Tasks
          </Link>
          <Link to="/issue" className="a">
            <AiOutlineIssuesClose className="SB_icons" />
            Issue
          </Link>
        </div>
        <div className="Sbar_line"></div>
        <div className="SB_team">
          <p className="SB_subtitle">PRODUCTION</p>
          <Link to="/productioncode"  className="a">
            <IoCodeSlash className="SB_icons" />
            Code
          </Link>
        </div>
        <a className="a" id="aset">
          PROJECT SETTING
        </a>
        <Link >
        <button onClick={redirectTohome} id="logout" >
          Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
