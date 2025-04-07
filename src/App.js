import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import PersonalInfo from "./Components/PersonalInfo.js";
import { useState } from "react";
import Experience from "./Components/Experience.js";
import Home from "./Components/Home.js";
import Education from './Components/Education.js'
function App() {
  const[data, setData]=useState({
    personalInfo:{},
    experience:{},skills:{},interests:{},awards:{} 
  })
  return (
    <Router>
      <div className="App">
        <div className="background"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Welcome" desc={<p>Welcome to your Resume Builder. Please click on continue and enter the necessary details.</p>}/>}/>
          <Route path="/personalInfo" element={<PersonalInfo data={data} setData={setData} />}/>
          <Route path="/experience"  element={<Experience popText="Are you a fresher?" data={data} setData={setData} />}/>
          <Route path="/education"  element={<Education  data={data} setData={setData} />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
