import React from "react";
import { useGetDashboardStatsQuery } from "../../Shared/redux/services/Dashboard";
import { DashboardStatsCards } from "../dashboard/StatCards";
import { ViewTasks } from "../Tasks/ViewTasks";
import { Loader } from "lucide-react";

export const AnalyticsPage = () => {
  const { data, isLoading, error } = useGetDashboardStatsQuery();

  return (
    <>
      <div className="flex flex-col w-full py-8 px-5">
        {isLoading ? (
          <div className="flex flex-row items-center justify-center">
            <Loader className="h-48 w-48 text-center animate-spin text-primary" />
          </div>
        ) : (
          <DashboardStatsCards stats={data ? data : null} />
        )}
      </div>
      <ViewTasks />
    </>
  );
};
