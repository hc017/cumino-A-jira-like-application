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

const Sidebar = () => {
  return (
    <div className="Sidebar_component">
      <div className="Sidebar_profile_section">
        <div class="infocardContainer">
          <div className="divi" id="main">
            <img src={prof} alt="" />
          </div>
          <div className="divi">
            <h2 className="SC_h2">hc</h2>
            <h4 className="SC_h4">Software Engineer</h4>
            <a href="hc@gmail.com">hc@gmail.com</a>
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
        <div className="S_list">
          <a className="a" id="atitle">
            Project Overview
          </a>
          <div className="Sbar_line"></div>
          <div className="SB_team">
            <p className="SB_subtitle">TEAM</p>
            <a className="a">
              {" "}
              <FaPeopleGroup className="SB_icons" />
              Team Buddies
            </a>
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
      </div>
    </div>
  );
};

export default Sidebar;
