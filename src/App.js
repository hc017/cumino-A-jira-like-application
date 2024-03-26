import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      
    </Router>
  );
}

export default App;
