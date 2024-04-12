import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProjectOverview from "./DashboardPages/Project/ProjectOverview";
import Sidebar from "./Sidebar/Sidebar";
import Team from "./DashboardPages/Team/Team";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/projectoverview" element={<ProjectOverview />} />
      <Route path="/teamates" element={<Team />} />
    </Routes>
  );
}

export default DashboardRoutes;
