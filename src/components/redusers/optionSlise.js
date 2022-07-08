import { createSlice } from "@reduxjs/toolkit";
const optionSlise = createSlice({
    name: "option",
    initialState: {en:false,ar:false,isLogin:false},
    reducers: {
        english: (state) => {
            state.ar = false;
            state.en = true;
        },
        arabic: (state) => {
            state.en = false;
            state.ar = true;
        }
        ,
        login: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        }

    }
    
})
export const { english,arabic,login,logout } = optionSlise.actions;
export default optionSlise.reducer;