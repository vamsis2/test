import React from 'react'
 import cloud from "./cloud.jpg"
 import Header from "./Header"
 import sim2 from "./sim2.png"
 import Home from "./Home.js";
 import Services from "./Services.js"
 import About from "./About.js"
 import Career from "./Career.js"
 import Technologies from "./Technologies.js"
 import { IoIosArrowDown } from 'react-icons/io';
 import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <div> 
      
      <img src={cloud} alt={cloud}  className='home'/>
      <h1>WellCome To simtekway</h1>
      <img src={sim2} alt={sim2} className='sim1'/>
    
      <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/services" element={<Services/>} />
           <Route path="/technologies" element={<Technologies/>}/>
          <Route path="/career" element={<Career/>} />
        </Routes>
        <Header/>
       
     
      <Link to="/" id="home1"> Home </Link>
        <Link to="/about" id="about"> About Us </Link>
        <Link to="/Servicies" id="servicies" class="sBtn-text"> Servicies<IoIosArrowDown id='io1'/> </Link>
        <Link to="/technologies" id="technologies"> Technologies<IoIosArrowDown id='io'/></Link>
        <Link to="/career" id="career"> Careers </Link>
        <Link to="/menu">
          <box id="contact">Contact</box>
        </Link>
        <h1 id='well1'>AWS</h1>
        <h1 id='well'> 
       WellCome To simtekway</h1>
        <Link >
          <box id="know">Know-More</box>
        </Link>
        </Router>
    </div>
  )
}

export default App


