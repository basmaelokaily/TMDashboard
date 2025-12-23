import { Outlet } from "react-router-dom";
import authbackground from "../../../assets/authbackground.png";
import authimg from "../../../assets/bar-chart.png";

export function AuthLayout() {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="hidden md:flex md:w-2/3 relative overflow-hidden">
        <img
          src={authbackground}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center p-8">
          <div className="w-[300px] md:w-[380px] mb-8 md:mb-0">
            <img
              src={authimg}
              alt="Task Manager Icon"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="text-center text-white space-y-6 p-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Manage your Tasks <br /> Effectively
            </h1>
            <p className="text-xl md:text-2xl font-normal opacity-90">
              Organize, Track and Complete <br /> your Tasks Effortlessly
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 relative">
        <img
          src={authbackground}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 md:bg-primary/40" />

        <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8">
          <div className="w-full bg-black/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20 bg-gradient-to-r from-black via-gray-800 to-red-500/4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
