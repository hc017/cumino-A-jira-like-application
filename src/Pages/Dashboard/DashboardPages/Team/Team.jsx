import React, { useState } from "react";
import "./Team.css";
import Sidebar from "../../Sidebar/Sidebar";
import TeamPlayerCard from "./TeamPlayerCard";
import ActivityFeed from "./ActivityFeed/ActivityFeed";

const Team = () => {
  const [sortBy, setSortBy] = useState("name"); // Default sort by name

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="Team_component">
      <Sidebar />
      <div className="TeamBoard">
        <div className="TeamBoard_UP">
          <div className="sort-dropdown">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="name">Name</option>
              <option value="role">Role</option>
              <option value="department">Department</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>
          <div className="Tcard">
          <TeamPlayerCard />
        </div>
        <div className="Tcard">
          <TeamPlayerCard />
        </div>
        <div className="Tcard">
          <TeamPlayerCard />
        </div>
        </div>
        <div className="TeamBoard_DW">
          <ActivityFeed/>


        </div>
      </div>
    </div>

  );
};

export default Team;
