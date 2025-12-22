import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ACCESS_TOKEN } from "../../constants";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});
