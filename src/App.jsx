import React from 'react'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HowItWork from './Components/HowItWork/HowItWork'
import GetStart from './Components/GetStart/GetStart'
import Features from './Components/Features/Features'
import Team from './Components/Team/Team'
import WarehouseDashboard from './Components/Dashbord/Dashbord'
import "./App.css";
import "./index.css";

export default function App() {
  return (<>
    <Navbar/>
    <About/>
    <Features/>
    <HowItWork/>
    <Team/>
    <WarehouseDashboard/>
    <GetStart/>
   <Footer/>
   </>
  )
}





