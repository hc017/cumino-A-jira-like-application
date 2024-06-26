import React from "react";
import "./ActivityFeed.css";

const ActivityFeed = () => {
  return (
    <div className="Activity_box">
      <h2>Activity Feed</h2>
      <ol className="activity-feed">
        <li className="feed-item">
          <time className="date">
            User
          </time>
          <span className="text">
            Responded to need{" "}
            <a href="single-need.php">“Log in”</a>
          </span>
        </li>
        <li className="feed-item">
          <time className="date">
            User
          </time>
          <span className="text">
            Responded to need{" "}
            <a href="single-need.php">“Data Added”</a>
          </span>
        </li>
        <li className="feed-item">
          <time className="date">
            User
          </time>
          <span className="text">
            Responded to need{" "}
            <a href="single-need.php">“Project Created”</a>
          </span>
        </li>
        <li className="feed-item">
          <time className="date">
            User
          </time>
          <span className="text">
            Responded to need{" "}
            <a href="single-need.php">“Project Selected”</a>
          </span>
        </li>
    
      </ol>
    </div>
  );
};

export default ActivityFeed;
