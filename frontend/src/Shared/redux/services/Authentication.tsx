import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface tokenResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

interface loginCredentials {
  username: string;
  password: string;
}
export const AuthenticationReducer = createApi({
  reducerPath: "AuthenticationReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<tokenResponse, loginCredentials>({
      query: (credentials) => ({
        url: "/token/",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<tokenResponse, loginCredentials>({
      query: (credentials) => ({
        url: "/user/register/",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthenticationReducer;
