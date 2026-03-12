import { createSlice } from "@reduxjs/toolkit";

const initialState={
    encrypted:"",
    nonce:"",
}


const encryptionSlice = createSlice({
    name:"encryption",
    initialState,
    reducers:{
        setState:(state,action)=>{
            state.encrypted = action.payload.encrypted;
            state.nonce = action.payload.nonce
        }
    }
}
   
)


 export const {setState} =  encryptionSlice.actions
export default encryptionSlice.reducer