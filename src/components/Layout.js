import React from "react";
import SideBar from "./SideBar";

const Layout = (props) => {
  return (
    <main>
      <div className="dashboard-main-container">
        <SideBar />
        <div className="main-container">{props.children}</div>
      </div>
    </main>
  );
};

export default Layout;
