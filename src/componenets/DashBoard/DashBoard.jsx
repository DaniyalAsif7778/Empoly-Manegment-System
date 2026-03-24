import React from 'react'
import { Outlet } from 'react-router'
 import DashBordHeader from '../ui/DashBordHeader'
 
function DashBoard() {
  return (
    <div> 
    <DashBordHeader/> 
      <Outlet/>
    </div>
  )
}

export default DashBoard