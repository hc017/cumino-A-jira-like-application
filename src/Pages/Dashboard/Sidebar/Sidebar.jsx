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

  

  return (
    <div className={`Sidebar_component ${collapsed ? 'collapsed' : ''}`}>
      <div className="Sidebar_profile_section">
        <div class="infocardContainer">
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
          <a className="a">
            {" "}
            <SiGooglemeet className="SB_icons" />
            Meetings
          </a>
          <a className="a">
            <IoChatboxEllipsesOutline className="SB_icons" />
            Chat
          </a>
        </div>
        <div className="Sbar_line"></div>
        <div className="SB_team">
          <p className="SB_subtitle">PLANING</p>
          <a className="a">
            <MdViewTimeline className="SB_icons" />
            Timeline
          </a>
          <a className="a">
            <GrPlan className="SB_icons" />
            Tasks
          </a>
          <a className="a">
            <AiOutlineIssuesClose className="SB_icons" />
            Issue
          </a>
        </div>
        <div className="Sbar_line"></div>
        <div className="SB_team">
          <p className="SB_subtitle">PRODUCTION</p>
          <a className="a">
            <IoCodeSlash className="SB_icons" />
            Code
          </a>
        </div>

        <a className="a" id="aset">
          PROJECT SETTING
        </a>
      </div>

      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};

export default Sidebar;
