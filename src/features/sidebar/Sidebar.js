import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice=createSlice({
    name:'sidebar',
    initialState:{
        showSideBar:false,
    },
    reducers:{
        toggle:(state)=>{
            state.showSideBar=!state.showSideBar;
        },
        toggleOff:(state)=>{
            state.showSideBar=true;
        },
        toggleOn:(state)=>{
            state.showSideBar=false;
        }
    }
});

export const {toggle,toggleOff,toggleOn}=sidebarSlice.actions;
export default sidebarSlice.reducer;
