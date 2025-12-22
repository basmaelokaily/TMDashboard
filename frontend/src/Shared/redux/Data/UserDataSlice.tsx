import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

interface User {
  id: number;
  username: string;
  email: string;
}

interface UserDataState {
  user: User | null;
  token: string | null;
}

const initialState: UserDataState = {
  user: null,
  token: localStorage.getItem("access_token"),
};

const UserDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
    },
  },
});

export const { setCredentials, logout } = UserDataSlice.actions;
export default UserDataSlice.reducer;
