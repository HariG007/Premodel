import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import CardMembershipTwoToneIcon from '@mui/icons-material/CardMembershipTwoTone';
import StorageIcon from '@mui/icons-material/Storage';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';

const Sidebar = () => {

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
            <span>Map</span>
          </li>
          
          <p></p>

          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
