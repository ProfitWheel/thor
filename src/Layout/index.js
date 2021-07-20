import React, { useEffect } from "react";
import AdminNavbar from "./../components/Navbars/AdminNavbar.js";
import Footer from "./../components/Footer/Footer.js";
import Sidebar from "./../components/Sidebar/Sidebar.js";

export default function Layout(props) {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);
  const [sidebarOpenedSmall, setSidebarOpenedSmall] = React.useState(false);

 
  const handleMiniClick = () => {
    setSidebarOpened(!sidebarOpened);
    document.body.classList.toggle("sidebar-mini");
  };

  const toggleSidebar = () => {
    setSidebarOpenedSmall(!sidebarOpenedSmall);
  };

  useEffect(()=>{
    if(sidebarOpenedSmall) {
      document.documentElement.classList.add("nav-open");
    }
    else {
    document.documentElement.classList.remove("nav-open");
    }
  },[sidebarOpenedSmall]);

  return (
    <div className="wrapper">
      <AdminNavbar
          {...props}
          handleMiniClick={handleMiniClick}
          sidebarOpened={sidebarOpened}
          sidebarOpenedSmall={sidebarOpenedSmall}
          toggleSidebar={toggleSidebar}
        />
      <Sidebar sidebarOpened={sidebarOpened}/>
      <div className="main-panel">
        
        {props.children}
        
        <Footer fluid />
      </div>
    </div>
  );
};
