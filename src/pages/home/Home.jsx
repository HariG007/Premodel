import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import DashboardDefault from '../../components/Dashboardcomp/index';
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Modal from 'react-modal';
import FacialRecognition from '../../FaceRecog/FacialRecognition';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDoctorAttendanceClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <button style={{padding:'3px',marginLeft:'20px', margin:'10px',backgroundColor:' #f9688d',color:'white'}}>Statistic</button>
        <DashboardDefault/>
        
      </div>
    </div>
  );
};

export default Home;
