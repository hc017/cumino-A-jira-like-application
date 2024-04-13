import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import DashboardRoutes from './Pages/Dashboard/DashboardRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isAfterSignUpForm = location.pathname === '/siginupform';

  return (
    <>
      {/* Render Navbar and Footer for all routes except AfterSignUpForm */}
      {!isAfterSignUpForm && <Navbar />}
      <AllRoutes />
      <DashboardRoutes/>
      {!isAfterSignUpForm && <Footer />}
    </>
  );
}

export default App;
