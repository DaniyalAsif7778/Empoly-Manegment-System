import { configureStore } from "@reduxjs/toolkit";
import  userReducer   from "../features/user/UserSlice";
import encryptionReducer from '../features/encryptionSlice'
import currentUserReducer from '../features/currentUser'


  export const store = configureStore({
    reducer: {
       users:userReducer,
       encryption:encryptionReducer,
       currentUser:currentUserReducer,

    },
})