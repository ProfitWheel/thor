import React from "react";
import AdminNavbar from "./../components/Navbars/AdminNavbar.js";
import Footer from "./../components/Footer/Footer.js";
import Sidebar from "./../components/Sidebar/Sidebar.js";

export default function Layout(props) {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);

 
  const handleMiniClick = () => {
    document.body.classList.toggle("sidebar-mini");
  };

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
    document.documentElement.classList.toggle("nav-open");
  };

  return (
    <div className="wrapper">
      <AdminNavbar
          {...props}
          handleMiniClick={handleMiniClick}
          sidebarOpened={sidebarOpened}
          toggleSidebar={toggleSidebar}
        />
      <Sidebar/>
      <div className="main-panel">
        
        {props.children}
        
        <Footer fluid />
      </div>
    </div>
  );
};
