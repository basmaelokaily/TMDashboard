import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./BaseQuery";

interface GetTasksParams {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
}

interface Task {
  id: number;
  title: string;
  description: string | null;
  status: "pending" | "in-progress" | "completed";
  created_at: string;
  updated_at: string;
  author: number;
}

interface TasksResponse {
  count: number;
  results: Task[];
  total_pages: number;
}

export const tasksApiReducer = createApi({
  reducerPath: "tasksApi",
  baseQuery: baseQuery,
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<TasksResponse, GetTasksParams>({
      query: (params = {}) => ({
        url: "/tasks/",
        params: {
          search: params.search || "",
          status: params.status || "",
          page: params.page || 1,
          limit: params.limit || 10,
        },
      }),
      providesTags: ["Task"],
    }),
    getTask: builder.query<Task, number>({
      query: (id) => ({
        url: `/tasks/${id}/`,
      }),
      providesTags: ["Task"],
    }),

    createTask: builder.mutation<Task, Partial<Task>>({
      query: (task) => ({
        url: "/tasks/",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),

    editTask: builder.mutation<Task, { id: number; data: Partial<Task> }>({
      query: ({ id, data }) => ({
        url: `/tasks/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),

    deleteTask: builder.mutation<void, number>({
      query: (id) => ({
        url: `/tasks/delete/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});
export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = tasksApiReducer;
