import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import DashboardRoutes from './Pages/Dashboard/DashboardRoutes';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <AllRoutes/>
      <DashboardRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
