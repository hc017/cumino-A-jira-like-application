import React from "react";
import "./Footer.css";
import flogo from './Cumin_logo.png';

const Footer = () => {
  return (
    <div className="Footer_component">
      <div className="Footer_inner_component">
        <div className="Footer_left">
          <div className="F_title_component">
            <img className="F_logo" src={flogo} alt="" />
            <h1 className="F_title">Cumin</h1>
          </div>
          <div className="F_subtitle_component">
            <p className="F_para">
              This app turns projects into quests, tracks <br /> your grind like
              a boss, and spills the tea <br /> on progress with ease <br />{" "}
              Auto-pilot mode frees up time to slay IRL <br /> #adultingishard{" "}
              <br /> #slayprojects <br /> #downloadnow
            </p>
          </div>
          <div className="F_socialmedia">
            <div className="F_slogo"></div>
            <div className="F_slogo"></div>
            <div className="F_slogo"></div>
            <div className="F_slogo"></div>
          </div>
          <div className="f_tags">
            <p className="f_tag_text">Legal Information</p>
            <p className="f_tag_text">|</p>
            <p className="f_tag_text">Accessibility</p>
            <p className="f_tag_text">|</p>
            <p className="f_tag_text">Cookie Management</p>
          </div>
        </div>
        <div className="Footer_right">
          <div className="Fcomp_title">
            <div className="F_title_c">
              <p className="FT">Features</p>
              <div className="sFT">
                <p className="fts">
                  Customer Support
                </p>
                <p className="fts">
                  Terms & Conditions
                </p>
                <p className="fts">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className="F_title_c">
              <p className="FT">Features</p>
              <div className="sFT">
                <p className="fts">
                  Customer Support
                </p>
                <p className="fts">
                  Terms & Conditions
                </p>
                <p className="fts">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className="F_title_c">
              <p className="FT">Features</p>
              <div className="sFT">
                <p className="fts">
                  Customer Support
                </p>
                <p className="fts">
                  Terms & Conditions
                </p>
                <p className="fts">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className="F_title_c">
              <p className="FT">Features</p>
              <div className="sFT">
                <p className="fts">
                  Customer Support
                </p>
                <p className="fts">
                  Terms & Conditions
                </p>
                <p className="fts">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
