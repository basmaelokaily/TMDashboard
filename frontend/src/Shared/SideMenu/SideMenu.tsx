import { Suspense, useState, useEffect } from "react";
import { navigationItems } from "../NavigationItems/NavItems";
import { Loader } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export const SideMenu = () => {
  const [currentSection, setCurrentSection] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").pop() || "dashboard";
    setCurrentSection(path);
  }, [location.pathname]);

  const handleNavigation = (href: string) => {
    setCurrentSection(href);
    navigate(href);
  };

  return (
    <div className="h-full">
      <aside className="w-60 bg-gray-900 shadow-xl border-r border-gray-800 rounded-xl h-full py-6">
        <div className="px-6 pb-4 mb-6 border-b border-gray-600">
          <h1 className="text-2xl font-bold text-white text-center tracking-tight">
            Task Manager
          </h1>
          <p className="text-xs text-gray-400 text-center mt-2">
            Manage your workflow
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {navigationItems.map((item) => {
            const isActive = currentSection === item.href;
            return (
              <li key={item.id} className="px-2">
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full flex flex-row gap-3 text-start rounded-lg px-8 py-3 text-sm font-medium cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.icon}
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
    <Suspense fallback={<Loader className="animate-spin w-1/3 text-primary" />}>
      <SideMenu />
    </Suspense>
  );
};
