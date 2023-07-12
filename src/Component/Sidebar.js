import React from 'react'

import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";





const Sidebar = () => {

    const sidebar=[
      {icon:<DashboardIcon/>,text:"Dashboard"},
      {icon:<PaidIcon/>,text:"Transations"},
      {icon:<PendingActionsIcon/>,text:"Schedules"},
      {icon:<AccountCircleIcon/>,text:"Users"},
      {icon:<SettingsIcon/>,text:"Settings"},
      
    ]
  return (
    <div className="dashboard">
      <h2>Board.</h2>

      <ul className="sidebar-list">
        {sidebar.map((item, index) => {
          return (
            <li key={index} className="sidebar-item">
              <span className="sidebar-icon" style={{ padding: "1rem" }}>
                {item.icon}
              </span>
              <span className="sidebar-text">{item.text}</span>
            </li>
          );
        })}
      </ul>
      <div id="customer">
        <div id='customer-support'>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
