import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <AllRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
