import React from 'react'
import Sidebar from './Sidebar'
import Card from './Card'
import Card1 from './Card1'
import Card3 from './Card3'
import Card4 from './Card4'
import Char from './Char'
import Bottomdiv from './Bottomdiv'
import Bottomdiv2 from './Bottomdiv2'
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import img from './admin.jpeg'

const Dashboard = () => {
  return (
    <>
      <div className="dashboardhome">
        <div className="sidebardiv">
          <Sidebar />
        </div>
        <div className="sidedashboard">
          {/* header */}

          <div className="dashboard-heading">
            <h1>Dashboard</h1>
            <div className="search">
              <div className='serch-icon'>
                <input type="searh" placeholder="Search..." />
               <button className='btn'> <SearchIcon style={{color:"gray"}}/></button>
              </div>
              <NotificationsIcon />
              <img src={img} alt="img" />
            </div>
          </div>

          {/* Sidebar  */}

          <div className="cardrow">
            <Card />
            <Card1 />
            <Card3 />
            <Card4 />
          </div>
          <div className="chartcss">
            <Char />
          </div>
          <div className="datadiv">
            <Bottomdiv />
            <Bottomdiv2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard
