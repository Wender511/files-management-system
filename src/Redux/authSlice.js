import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {
      user: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.userData = {
        user: null,
      };
    }
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
