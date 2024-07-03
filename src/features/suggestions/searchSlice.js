import { createSlice } from "@reduxjs/toolkit";

export const searchslice=createSlice({
    name:'searchSlice',
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }
});

export const {cacheResults}=searchslice.actions;
export default searchslice.reducer;