import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import CardMembershipTwoToneIcon from '@mui/icons-material/CardMembershipTwoTone';
import StorageIcon from '@mui/icons-material/Storage';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SIH</span>
        </Link>
      </div> 
      <hr />
      <div className="center">
        <ul>
          <p className="title">Navigation</p>

          <Link to={'/'} style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>

          {/* <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Add Appointment</span>
            </li>
          </Link> */}
          
          <p className="title">Authentication</p>

          <li>
            <LoginIcon className="icon" />
            <span>Login</span>
          </li>

          <p></p>

          <li>
            <AppRegistrationIcon className="icon" />
            <span>Register</span>
          </li>

          <p></p>

          <Link to="/logstatus" style={{ textDecoration: "none" }}>
          <li>
            <StorageIcon  className="icon" />
            <span>Log Status</span>
          </li>
          </Link>

          <p></p>

          <Link to="/datasubcription" style={{ textDecoration: "none" }}>
          <li>
            <CardMembershipTwoToneIcon className="icon" />
            <span>Data Subscription</span>
          </li>
          </Link>
          
          <p></p>

          <Link to="/usersettings" style={{ textDecoration: "none" }}>
          <li>
            <ManageAccountsTwoToneIcon className="icon" />
            <span>User Settings</span>
          </li>
          </Link>
          
          <p></p>

          <li>
            <MyLocationTwoToneIcon className="icon" />
            <span><a style={{color:"gray",textDecoration:"none"}} href="https://armrus.org/extranet/proj/">Map </a></span>
          </li>
          
          <p></p>

          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
          {/* <p> 
        food adulteration finding machine pcb machine 45 hrs single layer multilayer spectrophotometer
        </p> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
