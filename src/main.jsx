import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
 
import "./index.css";
import "./App.css";
import Layout from "./Layout";
import { AdminDashbord, EmpolyDashBoard, Home, Login } from "./imports.js";
import Singup from "./componenets/Auth/Singup/Singup.jsx";
import {
    createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import {AuthProvider}   from "./context/AuthProvider.jsx";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path= "/admindashboard"  element={<AdminDashbord/>} />
      <Route path="/employedashboard" element={<EmpolyDashBoard/>}/>
      <Route path="/singup" element={<Singup />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
