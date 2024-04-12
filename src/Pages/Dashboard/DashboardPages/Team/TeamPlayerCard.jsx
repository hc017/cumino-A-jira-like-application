import React from "react";
import "./TeamPlayerCard.css";
import { SiGooglemeet } from "react-icons/si";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";




const TeamPlayerCard = () => {
  return (
    <div class="parent">
      <div class="card">
        <div class="glass"></div>
        <div class="content">
          <span class="title">HC</span>
          <span class="text">UI designer</span>
        </div>
        <div class="bottom">
          <div class="social-buttons-container">
            <button class="social-button .social-button1">
            <SiGooglemeet class="svg" />
            </button>
            <button class="social-button .social-button2">
            <IoChatboxEllipses  class="svg" />
            </button>
            <button class="social-button .social-button3">
            <FaGithub  class="svg" />
            </button>
          </div>
          <div class="view-more">
            <button class="view-more-button">View Tasks</button>
            <svg
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPlayerCard;
