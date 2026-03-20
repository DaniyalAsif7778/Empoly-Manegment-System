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

export default function DashBordHeader() {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.currentUser.user)
 
  const { logOutHandler } = useLogout()
  
  const navLinks = [

    { text: "DashBord", icon: <LayoutDashboard/>, link: "" },
    { text: "Employees", icon:  <Users/>, link: "" },
    { text: "Tasks", icon:  <ListTodo/>, link: "" },
    { text: "Settings", icon: <Settings/>, link: "" },
  ]
  return (


    <nav className='max-w-fit h-screen absolute z-10 top-0 left-0 flex  flex-col justify-between bg-navbar   p-2   border border-border shadow-md text-white rounded-md'>
      <div className='  flex  flex-row items-center   justify-start gap-3'>
        <div className='h-5 w-5'>
          <button

            className="text-text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >

              {/* <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> */}

              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />

            </svg>
          </button>
        </div>
        <div className=' flex flex-col items-start justify-start'><h1 className=' text-3xl whitespace-nowrap'><span className='text-primary '>Empo</span><span className='text-text-primary'>Manager</span></h1>
          <p className='text-sm text-text-secondary'> </p></div>
      </div>
      <div className='h-3/5'>

        <ul className='w-full h-full  ' >
          {navLinks.map((link) => {
            return (
              <li className='mb-2'> <NavLink to={link.link}  className="flex flex-row gap-3  hover:bg-primary" ><span>{link.icon}</span><h3>{link.text}</h3></NavLink></li>

            )
          })}
        </ul>
      </div>
      <div className='h-1/5'>
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
    

  );
}
