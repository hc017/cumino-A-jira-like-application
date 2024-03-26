import React from "react";
import "./Staytuned.css";

const Staytuned = () => {
  return (
    <div className="ST_component">
      <div className="ST_inner_component">
        <div className="ST_I_upper">
          <p className="ST_I_upper_text">
            Stay in Touch <br /> for Awesome Updates & Offers!
          </p>
        </div>
        <div className="ST_I_lower">
          <div className="ST_inputs">
            <input
              type="text"
              className="ST_I_lower_input"
              placeholder="Name"
            />
            <input
              type="email"
              className="ST_I_lower_input"
              id="lo"
              placeholder="Email"
            />
          </div>
            <button className="ST_btn">
                Subscribe Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Staytuned;
