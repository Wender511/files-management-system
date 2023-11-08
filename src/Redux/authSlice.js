import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      user: null,
    },
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.login.user = action.playload;
    },
  },
});
export default authSlice.reducer;
