import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import DashboardDefault from '../../components/Dashboardcomp/index';
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <button style={{padding:'3px',marginLeft:'20px', margin:'10px',backgroundColor:'rgb(41, 233, 3)',color:'white'}}>Statistic</button>
        <DashboardDefault/>
        
      </div>
    </div>
  );
};

export default Home;
