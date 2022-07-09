import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getBooks=createAsyncThunk('books/getbooks',async(_,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try{
    const res=await fetch('http://localhost:3009/books');
    const data=await res.json();
    return data;
    }
    catch(error){
       return rejectWithValue(error.message);
    }
})
export const insertBooks=createAsyncThunk('books/insertbooks',async(dataBook,thunkAPI)=>{
    const {rejectWithValue,getState}=thunkAPI;
    try{
        dataBook.name=getState().auth.name;
        const res=await fetch('http://localhost:3009/books',{
            method:'POST',
            body:JSON.stringify(dataBook),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await res.json();
        return data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
})
export const deleteBooks=createAsyncThunk('books/deleteBook',async(item,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        await fetch(`http://localhost:3009/books/${item.id}`,{
            method:'DELETE',
        })
        return item
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
})
export const getBook=createAsyncThunk('books/getBook',async(item,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        await fetch(`http://localhost:3009/books/${item.id}`,{
            method:'GET',
        })
        return item
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
})
export const addBooktocart=createAsyncThunk('books/addBooktocart',async(item,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        await fetch(`http://localhost:3009/books/${item.id}`,{
            method:'GET',
        })
        return item
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
})
const books=createSlice({
    name:"books",
    initialState:{books:[],isLoading:false,error:null,bookinfo:[],bookcart:[]},
    reducers:{
        deleteBook:(state,action)=>{
            state.bookcart=state.bookcart.filter(item=>item.id!==action.payload)
        },
        // addBooktocart:(state,action)=>{
        //     state.bookcart.push(action.payload)
        // }
    },
    extraReducers:{
        //getBooks
        [getBooks.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=null;
        },
        [getBooks.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.books=action.payload;
        },
        [getBooks.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        //insertBooks
        [insertBooks.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=null;
        },
        [insertBooks.fulfilled]:(state,action)=>{
            state.books.push(action.payload);
            state.isLoading=false;
        },
        [insertBooks.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload; 
        },
        //deleteBooks
        [deleteBooks.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=null;
        },
        [deleteBooks.fulfilled]:(state,action)=>{
            state.bookcart=state.bookcart.filter(book=>book.id!==action.payload.id);
            state.isLoading=false;
        },
        [deleteBooks.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload; 
        },
       // getBook
        [getBook.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=null;
        }
        ,
        [getBook.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.bookinfo=action.payload;
        }
        ,
        [getBook.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload; 
        },
        //addBooktocart
        [addBooktocart.pending]:(state,action)=>{
            state.isLoading=true;
            state.error=null;
        },
        [addBooktocart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.bookcart.push(action.payload);
        },
        [addBooktocart.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload; 
        }
    }
 
})
export const {deleteBook}=books.actions;
export default books.reducer;