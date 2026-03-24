import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "./index.css";
import "./App.css";
import Layout from "./Layout";
import {
  OverView,
  EmpolyDashBoard,
  AdminDashbord,
  DashBoard,
  Home,
  Login,
  About,
  Settings,
  AdminDepartment,
  AdminEmployees,
  AdminProfile,
  AdminReports,
  AdminTasks,
  Annoucments,
  Colleagues,
  EmployeeLeave,
  EmployeeSchedule,
  EmployeeTasks,
} from "./imports.js";
import Singup from "./componenets/Auth/Singup/Singup.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router";

import { AuthProvider } from "./context/AuthProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index  element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="DashBoard" element={<DashBoard />} >
        <Route index element={<OverView />} />
        
        
        
        <Route path="employedashboard" element={<EmpolyDashBoard /> } />
        <Route path="AdminDashbord" element={<AdminDashbord /> } />
        <Route path="AdminDepartment" element={<AdminDepartment /> } />
        <Route path="AdminEmployees" element={<AdminEmployees /> } />
        <Route path="AdminProfile" element={<AdminProfile /> } />
        <Route path="AdminReports" element={<AdminReports /> } />
        <Route path="AdminTasks" element={<AdminTasks /> } />
        <Route path="Annoucments" element={<Annoucments /> } />
        <Route path="Colleagues" element={<Colleagues /> } />
        <Route path="EmployeeLeave" element={<EmployeeLeave /> } />
        <Route path="EmployeeSchedule" element={<EmployeeSchedule /> } />
        <Route path="EmployeeTasks" element={<EmployeeTasks /> } />
        <Route path="settings" element={<Settings />} />
      
      </Route>


      <Route path="singup" element={<Singup />} />

      <Route path="login" element={<Login />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </StrictMode>
);
