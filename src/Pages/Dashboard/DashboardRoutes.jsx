import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProjectOverview from "./DashboardPages/Project/ProjectOverview";

import Team from "./DashboardPages/Team/Team";
import Timeline from "./DashboardPages/Planing/TimeLine/Timeline";
import Task from "./DashboardPages/Planing/Tasks/Task";
import IssueCreation from "./DashboardPages/Planing/Issue/IssueCreation";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/projectoverview" element={<ProjectOverview />} />
      <Route path="/teamates" element={<Team />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/task" element={<Task/>} />
      <Route path="/issue" element={<IssueCreation/>} />
    </Routes>
  );
}

export default DashboardRoutes;
