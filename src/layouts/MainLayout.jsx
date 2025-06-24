import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Navbar>
      {children}
      <Outlet />
    </Navbar>
  );
};

export default MainLayout;
