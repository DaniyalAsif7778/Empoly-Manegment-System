import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Admins: [{
    name: "AliRaza",
    id: 123,
    password: 7861,
    status: false,
    Email: "AliRaza78690",
    EmployerID: 1234,
  }],
  Employees: [{ name: "xyz" }],
  Tasks: [{name:"xcv"}],
   
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
        } else {
          state.adminLoginStatus = false;
        }


      }




    },
    updateAdmin: (state,action,name,password) => { 
      state.Admins = state.Admins.map((admin) => {
        if(admin.id == action.payload.id ){
          if( name == ""){
            admin.name =  name
          }
          if ( password !==  "") {
            admin.password = password
          }
        }
      })

    },
    deleteAdmin: (state,action) => { 

    state.Admins
     = state.Admins.filter((admin)=>admin.id !== action.payload.id)
     
    },

    addEmployee: (state, action) => {
      state.Employees.push(action.payload)
    },
    updateEmployee: () => { },
    deleteEmployee: (state,action) => { 
  state.Employees = state.Employees.filter((employee) => employee.id !== action.payload.id )
        
    },

    addTask: (state , action) => { 
          state.Tasks.push(action.payload)
    },
    deleteTask: () => { },
    Logout:(state, action)=>{
       state.Admins.map((admin)=>{
        if (admin.id == action.payload.id) {
          admin.loginStatus = false;
        }
       })
    }
  },
});

export const { addAdmin, addEmployee,Logout,deleteEmployee, deleteAdmin} = userSlice.actions;

export default userSlice.reducer;
