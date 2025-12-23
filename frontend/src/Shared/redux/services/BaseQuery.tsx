import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "/token/refresh/",
          method: "POST",
          body: { refresh: refreshToken },
        },
        api,
        extraOptions
      );
      if (refreshResult.data) {
        const { access } = refreshResult.data as { access: string };
        localStorage.setItem(ACCESS_TOKEN, access);
        result = await baseQuery(args, api, extraOptions);
      } else {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        localStorage.removeItem("user_data");
        window.location.href = "/login";
      }
    } else {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      localStorage.removeItem("user_data");
      window.location.href = "/login";
    }
  }

  return result;
};

export { baseQueryWithReauth as baseQuery };
