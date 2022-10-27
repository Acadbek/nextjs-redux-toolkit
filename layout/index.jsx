import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col max-w-[1280px] bg-[#EBEEF6] m-auto">
      <Navbar />
      <div className="flex">
        <div className="w-full max-w-[208px]">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
