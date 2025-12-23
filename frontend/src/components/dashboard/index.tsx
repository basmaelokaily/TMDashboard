import { useGetDashboardStatsQuery } from "../../Shared/redux/services/Dashboard";
import { DashboardStatsCards } from "./StatCards";
import { Loader, AlertCircle } from "lucide-react";
export const Dashboard = () => {
  const { data, isLoading, error } = useGetDashboardStatsQuery();

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

      {/* Additional dashboard content can go here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <p className="text-gray-500 text-sm">
            Task completion chart will go here
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h3>
          <p className="text-gray-500 text-sm">
            Quick task actions will go here
          </p>
        </div>
      </div>
    </div>
  );
};
