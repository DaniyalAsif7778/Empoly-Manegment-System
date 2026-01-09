import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  Admins: [{
    name: "AliRaza",
    id: 123,
    password: 7861,
    Email: "AliRaza78690",
    EmployeesID: 1234,
  }],
  Employees: [{ name: "xyz" }],
  Tasks: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.Admins.push(action.payload)



    },
    updateAdmin: () => { },
    deleteAdmin: () => { },

    addEmployee: () => { },
    updateEmployee: () => { },
    deleteEmployee: () => { },

    addTask: () => { },
    deleteTask: () => { },

  },
});

export const { addAdmin } = userSlice.actions;

export default userSlice.reducer;
