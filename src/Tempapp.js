import AllRoutes from "./Components/AllRoutes";
import BlankRoutes from "./Components/BlankRoutes";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import DashboardRoutes from "./Pages/Dashboard/DashboardRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function Tempapp() {
  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
        <DashboardRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default Tempapp;
