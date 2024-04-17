import React from "react";
import "./Timeline.css";
import Sidebar from "../../../Sidebar/Sidebar";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";

import { useState } from "react";
import { useEffect } from "react";

const Timeline = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [filterButtonState, setFilterButtonState] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [tasks, setTasks] = useState([]);
   
    useEffect(() => {
      // Fetch tasks from local storage
      const savedTasks = JSON.parse(localStorage.getItem("todolist"));
      if (savedTasks) {
        setTasks(savedTasks);
      }
    }, []);


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
            data={tasks.map((task, index) => ({
              id: index + 1,
              label: {
                icon: "", // You can provide an icon if available
                title: task.task, // Assuming `task` is the task title
                subtitle: task.taskAssign, // Assuming `taskAssign` is the assignee
              },
              data: [
                {
                  id: `task${index + 1}`,
                  title: task.name,
                  startDate: new Date(task.startDate),
                  endDate: new Date(task.endDate),
                  // You can customize other properties based on your requirement
                },
              ],
            }))}
            isLoading={false}
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