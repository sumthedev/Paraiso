import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <>
      <div className="container">
        <div>
          <Sidebar isOpen={isSidebarOpen} />
        </div>
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
        </div>
        <div className="main ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
