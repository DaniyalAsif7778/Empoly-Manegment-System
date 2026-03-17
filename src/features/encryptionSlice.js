import { createSlice } from "@reduxjs/toolkit";

const initialState={
    encryptedEmail:"",
    nonceEmail:"",
}


const encryptionSlice = createSlice({
    name:"encryption",
    initialState,
    reducers:{
        setEncryptionEmail:(state,action)=>{
            state.encrypted = action.payload.encrypted;
            state.nonce = action.payload.nonce
        },
        setEncryptionPassword:()=>{

        }
    }
}
   
)


 export const {setState} =  encryptionSlice.actions
export default encryptionSlice.reducer