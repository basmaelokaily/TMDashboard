import React, { Suspense, useState } from "react";
import { navigationItems } from "../NavigationItems/NavItems";

export const SideMenu = () => {
  const [currentSection, setCurrentSection] = useState("dashboard");
  const handleNavigation = (href: string) => {};
  return (
    <div className="w-[268px]">
      <aside className="w-60 min-h-screen bg-white shadow-md border-r border-gray-200 rounded-xl">
        <ul className="flex flex-col gap-3">
          {navigationItems.map((item) => {
            const isActive = currentSection === item.href;

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`w-fullblock px-7 py-3 text-sm font-bold cursor-pointer text-shift-dark-blue hover:bg-[#7152F30D] ${
                    isActive ? "bg-[#7152F30D] font-bold" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export const TMSidebar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SideMenu />
    </Suspense>
  );
};
