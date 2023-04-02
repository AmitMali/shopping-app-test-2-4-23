import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layoute = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layoute;
