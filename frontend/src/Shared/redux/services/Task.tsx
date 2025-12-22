import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./BaseQuery";

interface GetTasksProps {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export const tasksApiReducer = createApi({
  reducerPath: "tasksApi",
  baseQuery: baseQuery,
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: ({
        search = "",
        status = "",
        page = 1,
        limit = 10,
      }: GetTasksProps = {}) => ({
        url: "/tasks/",
        params: {
          search,
          status,
          page,
          limit,
        },
      }),
      providesTags: ["Task"],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApiReducer;
