import React from "react";
import { TMSidebar } from "../SideMenu/SideMenu";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 text-shift-dark-blue font-bold text-xl mb-6">
        Headerrrrrr
      </div>

      <div className="flex gap-1">
        <TMSidebar />

        <main className="flex-1 p-4 bg-white rounded-lg shadow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
