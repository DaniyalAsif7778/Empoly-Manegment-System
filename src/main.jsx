import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "./index.css";
import "./App.css";
import Layout from "./Layout";
import { ProtectedRoutes, AdminRoutes, EmployeeRoutes } from "./ProtectedRoutes.jsx";
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
  Singup
} from "./imports.js";
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
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route element={<ProtectedRoutes />}>

        <Route path="DashBoard" element={<DashBoard />} >

          <Route index element={<OverView />} />

          <Route element={<AdminRoutes />}>
            <Route path="AdminDashbord" element={<AdminDashbord />} />
            <Route path="AdminDepartment" element={<AdminDepartment />} />
            <Route path="AdminEmployees" element={<AdminEmployees />} />
            <Route path="AdminProfile" element={<AdminProfile />} />
            <Route path="AdminReports" element={<AdminReports />} />
            <Route path="AdminTasks" element={<AdminTasks />} />
          </Route>
          <Route element={<EmployeeRoutes />}>

            <Route path="employedashboard" element={<EmpolyDashBoard />} />

            <Route path="Annoucments" element={<Annoucments />} />
            <Route path="Colleagues" element={<Colleagues />} />
            <Route path="EmployeeLeave" element={<EmployeeLeave />} />
            <Route path="EmployeeSchedule" element={<EmployeeSchedule />} />
            <Route path="EmployeeTasks" element={<EmployeeTasks />} />
          </Route>
          <Route path="settings" element={<Settings />} />

        </Route>
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
