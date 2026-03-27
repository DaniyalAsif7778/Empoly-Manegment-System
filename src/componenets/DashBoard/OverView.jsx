import React from 'react'
import AdminDashbord from '../../pages/admin/AdminDashboard'
import EmpolyDashBoard from '../../pages/employee/EmpolyDashboard'
import { useSelector } from 'react-redux'
 function OverView() {
  const currentUser = useSelector((state)=> state.currentUser.user)

  return (
    currentUser?.role === "admin" ? (
      <AdminDashbord />
    ) : currentUser?.role === "employee" ? (
      <EmpolyDashBoard />
    ) : null
  )
}

export default OverView