import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./BaseQuery";

interface DashboardStats {
  total_tasks: number;
  completed_tasks: number;
  pending_tasks: number;
  in_progress_tasks: number;
}

export const dashboardReducer = createApi({
  reducerPath: "dashboardApi",
  baseQuery: baseQuery,
  tagTypes: ["Dashboard"],
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => ({
        url: "/dashboard/stats/",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardReducer;
