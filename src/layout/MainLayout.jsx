import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MiniNavbar from "../components/MiniNavbar";

function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <MiniNavbar />
      <div className="md:mx-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
