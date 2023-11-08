import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
