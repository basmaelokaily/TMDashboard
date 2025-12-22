import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthenticationReducer } from "./services/Authentication";
import UserDataReducer from "./Data/UserDataSlice";
import { tasksApiReducer } from "./services/Task";
export const store = configureStore({
  reducer: {
    [AuthenticationReducer.reducerPath]: AuthenticationReducer.reducer,
    [tasksApiReducer.reducerPath]: tasksApiReducer.reducer,
    UserData: UserDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthenticationReducer.middleware)
      .concat(tasksApiReducer.middleware),
});

setupListeners(store.dispatch);
