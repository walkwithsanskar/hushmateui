import {createSlice} from "@reduxjs/toolkit"

const initialState={
    token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) :null,
    loading:false,
    userData:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
    userFeed:null,
    signUpData:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken:(state,action)=>{
            state.token = action.payload;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setUserData:(state,action)=>{
            state.userData=action.payload;
        },
        setUserFeed:(state,action)=>{
            state.userFeed=action.payload;
        },
        setSignUpData:(state,action)=>{
            state.signUpData=action.payload;
        }
    }
})


export const{setToken,setLoading,setUserData,setUserFeed} = authSlice.actions;

export default authSlice.reducer;
