import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

    function ProtectedRoutes(){
    const currentUser = useSelector((state)=> state.currentUser.user)
     return   !currentUser?.loginStatus ? <Navigate to="/login" replace /> :   <Outlet/>
}

   function AdminRoutes(){
  const currentUser = useSelector((state)=> state.currentUser.user)
     return  currentUser?.role == "employee" && currentUser.loginStatus ? <Navigate to="/DashBoard/employedashboard" replace /> : !currentUser?.role == "admin" && !currentUser.loginStatus ? <Navigate to="/login" replace /> : <Outlet/>
}
function EmployeeRoutes(){
  const currentUser = useSelector((state)=> state.currentUser.user)
  return  currentUser?.role == "admin" && currentUser.loginStatus ? <Navigate to="/DashBoard/AdminDashbord" replace /> : !currentUser?.role == "employee" && !currentUser.loginStatus ? <Navigate to="/login" replace /> : <Outlet/>
}
export {ProtectedRoutes ,AdminRoutes,EmployeeRoutes}