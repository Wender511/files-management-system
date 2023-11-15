import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {
      user: null,
    },
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
