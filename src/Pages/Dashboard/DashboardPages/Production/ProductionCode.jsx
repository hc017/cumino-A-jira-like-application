import React from "react";
import "./ProductionCode.css";
import Sidebar from "../../Sidebar/Sidebar";
import { FaGithub } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaStackOverflow } from "react-icons/fa";

const ProductionCode = () => {

  function redirectToGit() {
    // Replace the URL with the desired destination
    window.location.href = "https://github.com/hc017/cumino-A-jira-like-application" ;
}
  function redirectTobackend() {
    // Replace the URL with the desired destination
    window.location.href = "https://github.com/Mokshada2721/cumino-backend" ;
}
  function redirectToServer() {
    // Replace the URL with the desired destination
    window.location.href = "https://cloud.mongodb.com/v2/660a8110c9778761c1ac0b92#/metrics/replicaSet/660a81e8d3b920635992572f/explorer/test" ;
}
  function redirectToStack() {
    // Replace the URL with the desired destination
    window.location.href = "https://stackoverflow.com/" ;
}



  return (
    <div className="Code_component">
      <Sidebar />
      <div className="innercode_comp">
        <div class="main">
          <div class="up">
            <button onClick={redirectTobackend} class="card1">
              <FaDatabase className="cardicon"
              id="c1" />
            </button>
            <button onClick={redirectToServer} class="card2">
              <CiServer className="cardicon"
              id="c2" />
            </button>
          </div>
          <div class="down">
            <button onClick={redirectToGit} class="card3">
              <FaGithub  className="cardicon"
              id="c3" />
            </button>
            <button onClick={redirectToStack} class="card4">
              <FaStackOverflow className="cardicon" 
              id="c4"/>
            </button>
          </div>
        </div>
          <h1> Lets Redirect to your page...</h1>
      </div>
    </div>
  );
};

export default ProductionCode;
