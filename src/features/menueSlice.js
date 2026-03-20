import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOpened:false,
}

const menueSlice = createSlice({
    name:"menueSlice",
    initialState,
    reducers:{

        setMenue:(state,action)=>{
           state.isOpened = action.payload
        }
    }
})


 export const {setMenue} = menueSlice.actions;
 export default menueSlice.reducer;