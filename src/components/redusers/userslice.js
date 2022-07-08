import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
export const insetrUser = createAsyncThunk("users/insetrUser", async (user,thunkAPI) => {
    const {rejectWithValue}=thunkAPI
    try{
        const response = await fetch("http://localhost:3001/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        const data = await response.json();
        return data;
    }catch (error) {
        rejectWithValue(error)
    }
})
export const getUsers = createAsyncThunk("users/getUsers", async (user,thunkAPI) => {
    const {rejectWithValue}=thunkAPI
    try{
        const response = await fetch("http://localhost:3001/users",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await response.json();
        return data;
    }catch (error) {
        rejectWithValue(error)
    }
})
export const deleteUser = createAsyncThunk("users/deleteUser", async (user,thunkAPI) => {
    const {rejectWithValue}=thunkAPI
    try{
        const response = await fetch(`http://localhost:3001/users/${user.id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await response.json();
        return data;
    }catch (error) {
        rejectWithValue(error)
    }
})
export const updateUser = createAsyncThunk("users/updateUser", async (user,thunkAPI) => {
    const {rejectWithValue}=thunkAPI
    try{
        const response = await fetch(`http://localhost:3001/users/${user.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        const data = await response.json();
        return data;
    }catch (error) {
        rejectWithValue(error)
    }
})
const usersSlice = createSlice({
    name: "users",
    initialState: {users:[],error:null,isLoading:false},
    reducers: {
        register: (state,action) => {
            state.users=action.payload;
            console.log(state.users)
        },
        handleerror: (state,action) => {
            state.error=action.payload;
            console.log(state.error)
            },
    },
    // extraReducers: {
    //     //insertuser
    //     [insetrUser.pending]: (state,action) => {
    //         state.isLoading = true;
    //     },
    //     [insetrUser.fulfilled]: (state,action) => {
    //         state.isLoading = false;
    //         state.users.push(action.payload);
    //     },
    //     [insetrUser.rejected]: (state,action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     //getUsers
    //     [getUsers.pending]: (state,action) => {
    //         state.isLoading = true;
    //     },
    //     [getUsers.fulfilled]: (state,action) => {
    //         state.isLoading = false;
    //         state.users = action.payload;
    //     },
    //     [getUsers.rejected]: (state,action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     //deleteUser
    //     [deleteUser.pending]: (state,action) => {
    //         state.isLoading = true;
    //     },
    //     [deleteUser.fulfilled]: (state,action) => {
    //         state.isLoading = false;
    //         state.users = state.users.filter(user => user.id !== action.payload.id);
    //     },
    //     [deleteUser.rejected]: (state,action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     //updateUser
    //     [updateUser.pending]: (state,action) => {
    //         state.isLoading = true;
    //     },
    //     [updateUser.fulfilled]: (state,action) => {
    //         state.isLoading = false;
    //         state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
    //     },
    //     [updateUser.rejected]: (state,action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     }
    // }
    
})
export const {register,handleerror} = usersSlice.actions;
export default usersSlice.reducer;