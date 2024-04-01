import React, { useState } from "react";
import "./Home.css";
import { GoArrowUpRight } from "react-icons/go";
import Secondsection from "./SecondSection/Secondsection";
import ThirdSection from "./ThirdSection/ThirdSection";
import Staytuned from "../../Components/StayTuned/Staytuned";
import SignIn from "../SignIn/SignIn";
import { Link } from "react-router-dom";

function Home() {
  const [featuredData, setFeaturedData] = useState(null);

  return (
    <>
      <div className="hero">
        <div className="h_Section">
          <div className="h_section_titles">
          <div className="herotitle">
            Manage Your Team through <br />A Single Platform
          </div>
          <div className="herosubtitle">
            <p>"Empower Your Team, Streamline Your Workflow"</p>
            {/* <p className="greetings en">"Empower Your Team, Streamline Your Workflow"</p>
          <p className="greetings es">"Unify, Collaborate, Succeed: Your Team's Power Hub"</p>
          <p className="greetings de">"From Chaos to Clarity: Master Team Management Simplified"</p>
          <p className="greetings it">"One Platform, Infinite Possibilities: Lead Your Team to Excellence"</p> */}
          </div>
          <div className="herobtn">
            <div className="btnbox">
              <Link to="/signin" className="btnname">
                Get Started <GoArrowUpRight className="btnicon" />{" "}
              </Link>
            </div>
            <div className="btnbox2">
              <button class="btn info">Learn More</button>
            </div>
          </div>
          </div>
          <div className="Hbar">

          </div>
        </div>

        <Secondsection />
        <ThirdSection />
        <Staytuned />
      </div>
    </>
  );
}

export default Home;
