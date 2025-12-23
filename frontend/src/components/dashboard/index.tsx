import { useNavigate } from "react-router-dom";
import { useGetDashboardStatsQuery } from "../../Shared/redux/services/Dashboard";
import { DashboardStatsCards } from "./StatCards";
import {
  Loader,
  AlertCircle,
  Upload,
  BarChart3,
  Edit,
  PlusCircleIcon,
} from "lucide-react";
import growth from "../../assets/pie-chart.png";
export const Dashboard = () => {
  const { data, isLoading, error } = useGetDashboardStatsQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Failed to load dashboard data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">Welcome back! Here's your task summary</p>
      </div>

      <DashboardStatsCards stats={data ? data : null} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface rounded-xl shadow-lg border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Quick Actions
            </h3>
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <div className="flex flex-rwo justify-center gap-4 mb-6">
            <div className="relative w-32 h-32 rounded-full bg-primary/10 border-2 border-primary">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-primary">75%</span>
                <span className="text-xs text-secondary">Complete</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              className="flex items-center justify-center gap-2 p-3 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors group"
              onClick={() => navigate("/add-task")}
            >
              <PlusCircleIcon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
              <span className="text-sm font-medium text-primary">New Task</span>
            </button>

            <button
              className="flex items-center justify-center gap-2 p-3 bg-surface-hover border border-border rounded-lg "
              disabled
            >
              <Upload className="h-4 w-4" />
              <span className="text-sm font-medium text-secondary group-hover:text-text-primary transition-colors">
                Export
              </span>
            </button>

            <button
              className="flex items-center justify-center gap-2 p-3 bg-surface-hover border border-border rounded-lg hover:bg-surface transition-colors group"
              onClick={() => navigate("/tasks")}
            >
              <Edit className="h-4 w-4" />
              <span className="text-sm font-medium text-secondary group-hover:text-text-primary transition-colors">
                Quick Edit
              </span>
            </button>

            <button
              className="flex items-center justify-center gap-2 p-3 bg-surface-hover border border-border rounded-lg hover:bg-surface transition-colors group"
              onClick={() => navigate("/analytics")}
            >
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm font-medium text-secondary group-hover:text-text-primary transition-colors">
                Analytics
              </span>
            </button>
          </div>
        </div>
        <div className="bg-surface rounded-xl shadow-lg border border-border p-6">
          <div className="flex flex-row justify-center items-center text-center mx-auto w-75">
            <img src={growth} alt="Growth Chart" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
