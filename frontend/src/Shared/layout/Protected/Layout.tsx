import { TMSidebar } from "../../SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../NavBar/NavBar";

export const Layout = () => {
  return (
    <div className="h-screen flex bg-gray-100 p-6 gap-6">
      <div className="h-full sticky top-4 self-start">
        <TMSidebar />
      </div>

      <main className="flex-1 bg-white rounded-lg shadow overflow-y-auto">
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
};
