import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import useLogout from '../../hooks/useLogout';
import { LayoutDashboard, Users, ListTodo, BarChart2, 
  Settings, Bell, Search, Plus, Download, 
  CheckCircle, Clock, AlertCircle, LogOut, Briefcase } 
from 'lucide-react'
import HeaderDrawer from './HeaderDrawer';
export default function DashBordHeader() {
  const navigate = useNavigate();
  const isOpened = useSelector((state)=> state.menue.dashBoardDrawer)
  const currentUser = useSelector((state) => state.currentUser.user)
 
  const { logOutHandler } = useLogout()
  
  const adminLinks = [

    { id:1, text: "DashBord", icon: <LayoutDashboard/>, link: "/Dashboard" },
    { id:2,  text: "Employees", icon:  <Users/>, link: "/Dashboard" },
    {  id:3,  text: "Tasks", icon:  <ListTodo/>, link: "/Dashboard" },
    { id:4,  text: "Settings", icon: <Settings/>, link: "settings" },
  ]
  const employeeLinks =[

  ];
  
  
return (

 isOpened && (
  <nav className='  w-full  sm:max-w-fit mr-2 sm:m-0 sm:h-screen fixed sm:absolute z-10 bottom-0 sm:top-0 sm:left-0 flex  flex-col   bg-navbar    border border-border shadow-md text-white rounded-md'>
    <div className='  hidden sm:flex       px-5.5 py-4 flex-row items-center border-b border-border   justify-start gap-3'>
      <HeaderDrawer status1={ false}  />
      <div className=' flex flex-col items-start justify-start'><h1 className=' font-bold text-xl whitespace-nowrap'><span className='text-primary '>Emplo</span><span className='text-text-primary'>Manager</span></h1>
        <p className='text-sm text-text-secondary'> </p></div>
    </div>
    <div className=' w-full h-full sm:h-3/5  sm:flex  sm:items-start sm:px-1 sm:py-4'>

      <ul className=' w-full  flex flex-row justify-evenly sm:flex-col   ' >
        {adminLinks.map((link) => {
          return (
            <li className='mb-2' key={link.id}> <NavLink to={link.link}    className={({ isActive }) =>
              `flex   sm:flex-row  sm:justify-start  gap-1 p-2  sm:px-3  sm:py-2 rounded-md text-xs sm:text-sm
                sm:transition-all sm:duration-150 sm:border-l-2 flex-col   justify-center items-center
                ${isActive
                  ? 'text-[#009F8E] sm:bg-[#009F8E]/10 border-[#009F8E]'
                  : 'text-[#888] border-transparent hover:text-white hover:bg-white/5'
                }`
            } ><span>{link.icon}</span><h3>{link.text}</h3></NavLink></li>

          )
        })}
      </ul>
    </div>
    <div className='p-2   hidden   sm:flex'>
      {/* admin logo or name */}
      <div>
          <img src="" alt="" />
          </div>
      <div >
        <h1 className=' text-text-primary text-2xl  '>Admin </h1>
        <p > Super Admin</p>
      </div >
    </div>
  </nav>
 
 ) 
)
  

 
}
