import React from "react";
import "./Timeline.css";
import Sidebar from "../../../Sidebar/Sidebar";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";

import { useState } from "react";

const Timeline = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [filterButtonState, setFilterButtonState] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [tasks, setTasks] = useState([
      // Mock data for three users
      {
        id: 1,
        label: {
          icon: "https://via.placeholder.com/24",
          title: "John Doe",
          subtitle: "Developer",
        },
        data: [
          {
            id: "task1",
            title: "Task 1",
            startDate: new Date("2024-04-03T09:11:00"),
            endDate: new Date("2024-04-12T12:00:00"),
            occupancy: 10800,
            bgColor: "#FFD700",
          },
          // Add more tasks for user 1 if needed
        ],
      },
      {
        id: 2,
        label: {
          icon: "https://via.placeholder.com/24",
          title: "Jane Smith",
          subtitle: "Designer",
        },
        data: [
          {
            id: "task2",
            title: "Task 2",
            startDate: new Date("2024-04-12T13:00:00"),
            endDate: new Date("2024-04-18T16:00:00"),
            occupancy: 10800,
            bgColor: "#FF6347",
          },
          // Add more tasks for user 2 if needed
        ],
      },
      {
        id: 3,
        label: {
          icon: "https://via.placeholder.com/24",
          title: "Alex Johnson",
          subtitle: "Project Manager",
        },
        data: [
          {
            id: "task3",
            title: "Task 3",
            startDate: new Date("2024-04-14T10:00:00"),
            endDate: new Date("2024-04-25T14:00:00"),
            occupancy: 14400,
            bgColor: "#4682B4",
          },
          // Add more tasks for user 3 if needed
        ],
      },
    ]);

    return (
        <div className="TL_component">
        <Sidebar />
        <div className="TL_Side">
          <section>
            <div className="buttons-container">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Task"
              />
              <button onClick={() => alert("Search functionality coming soon!")}>Search</button>
            </div>
            <Scheduler 
              data={tasks}
              isLoading={isLoading}
              onRangeChange={(newRange) => console.log(newRange)}
              onTileClick={(clickedResource) => console.log(clickedResource)}
              onItemClick={(item) => console.log(item)}
              onFilterData={() => {
                // Some filtering logic...
                setFilterButtonState(1);
              }}
              onClearFilterData={() => {
                // Some clearing filters logic...
                setFilterButtonState(0);
              }}
              config={{
                zoom: 0,
                filterButtonState,
              }}
            />
          </section>
     
        </div>
      </div>
    );
  };
  
  export default Timeline;