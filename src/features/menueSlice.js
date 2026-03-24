import { createSlice } from "@reduxjs/toolkit";

const initialState={
     dashBoardDrawer:false,
     headerDrawer:false,
   

}

const menueSlice = createSlice({
    name:"menueSlice",
    initialState,
    reducers:{

        setDashBoardStatus:(state,action)=>{
           state.dashBoardDrawer = action.payload
        },
        setHeaderDrawwer:(
            state,action
        )=>{
            state.headerDrawer = action.payload
        },
        
    }
})


 export const {setDashBoardStatus,setHeaderDrawwer} = menueSlice.actions;
 export default menueSlice.reducer;