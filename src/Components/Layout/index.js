import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      {/* <h1>Layout</h1> */}
      {/* {children} */}
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
