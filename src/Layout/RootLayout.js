import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="container">
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="main ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
