import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Admins: [{
    name: "AliRaza",
    id: 123,
    password: 7861,
    status:false,
    Email: "AliRaza78690",
    EmployeesID: 1234,
  }],
  Employees: [{ name: "xyz" }],
  Tasks: [],
  adminLoginStatus:"",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      if (action.payload) {
      const checkAdmin = state.Admins.some((user) => user.Email === action.payload.Email && user.password == action.payload.password)
      if (!checkAdmin) {
        
   
        console.log("Stored admin ID:", localStorage.getItem("adminId"));
        state.Admins.push(action.payload)
          state.adminLoginStatus = true; 
      }else{
        state.adminLoginStatus =false;
      }
       

      }
     



    },
    updateAdmin: () => { },
    deleteAdmin: () => { },

    addEmployee: (state, action) => {
      state.Employees.push(action.payload)
    },
    updateEmployee: () => { },
    deleteEmployee: () => { },

    addTask: () => { },
    deleteTask: () => { },

  },
});

export const { addAdmin, addEmployee } = userSlice.actions;

export default userSlice.reducer;
