import React from "react";
import Sidebar from "../components/home/Sidebar";
import { Outlet } from "react-router-dom";

export const Home = (props) => {
  return (
    <>
      <div className="flex h-[98vh] gap-4">
        <div className="flex flex-col justify-between w-1/6 border border-gray-500 rounded-xl p-4">
            <Sidebar onLogout={props.onLogout} />
        </div>
        <div className="w-5/6 border border-gray-500 rounded-xl p-4">
          <Outlet />        </div>
      </div>
    </>
  );
};
