import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {isLogin:false,name:"ahemdsalama"},
    reducers: {
        loginout: (state) => {
            state.isLogin = !state.isLogin;
        }
    }
})
export const { loginout } = authSlice.actions;
export default authSlice.reducer;