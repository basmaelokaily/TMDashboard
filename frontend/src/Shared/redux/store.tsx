import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthenticationReducer } from "./services/Authentication";
import UserDataReducer from "./Data/UserDataSlice";
import { tasksApiReducer } from "./services/Task";
import { dashboardReducer } from "./services/Dashboard";
export const store = configureStore({
  reducer: {
    [AuthenticationReducer.reducerPath]: AuthenticationReducer.reducer,
    [tasksApiReducer.reducerPath]: tasksApiReducer.reducer,
    [dashboardReducer.reducerPath]: dashboardReducer.reducer,
    UserData: UserDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthenticationReducer.middleware)
      .concat(tasksApiReducer.middleware)
      .concat(dashboardReducer.middleware),
});

setupListeners(store.dispatch);
