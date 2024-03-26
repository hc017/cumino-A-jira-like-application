import React from "react";
import "./Secondsection.css";

const Secondsection = () => {
  return (
    <div className="SS_Component">
      <div className="SS_innerComponent">
        <div className="SS_left_component">
          <p className="SS_text">
            {" "}
            Stop Drowning in <br /> Tasks <br /> Get Shiz Done
          </p>
        </div>
        <div className="SS_right_component">
          <div className="SS_R_videobg">
            <video
              src="https://www.youtube.com/watch?v=T5oS5DHtCt0"
              className="SS_R_video"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
