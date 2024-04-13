import React from "react";
import "./ProductionCode.css";
import Sidebar from "../../Sidebar/Sidebar";
import { FaGithub } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaStackOverflow } from "react-icons/fa";

const ProductionCode = () => {
  return (
    <div className="Code_component">
      <Sidebar />
      <div className="innercode_comp">
        <div class="main">
          <div class="up">
            <button class="card1">
              <FaDatabase className="cardicon"
              id="c1" />
            </button>
            <button class="card2">
              <CiServer className="cardicon"
              id="c2" />
            </button>
          </div>
          <div class="down">
            <button class="card3">
              <FaGithub className="cardicon"
              id="c3" />
            </button>
            <button class="card4">
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
