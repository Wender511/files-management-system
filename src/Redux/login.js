import { createSlice } from "@reduxjs/toolkit";

export const useLogin = createSlice({
    name: "checkLogin",
    initialState: {
        login: false
    },
    reducers: {
        update: (state, action)=>{
            state.login = action.payload.login;
        }
    }
})

export const {update} = useLogin.actions;
export default useLogin.reducer;
