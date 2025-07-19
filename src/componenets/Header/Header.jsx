import React from 'react'
import {  NavLink } from 'react-router'

import { useAuthContext } from '../../context/AuthContex'
function Header() {
  const { currentadmin } = useAuthContext();




  return (
 
      <header className="w-full bg-navbar text-text-primary  border-b border-border  px-6 py-4 flex justify-between items-center overflow-none">

        <div className="flex items-center gap-3">
          {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
          <span className="text-xl font-bold">EmpoManager</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-sm font-medium">

          <ul className=' hidden sm:flex  gap-5  '>
            <li> <NavLink to="/" className="hover:text-primary-hover   transition">Home</NavLink></li>
            <li> < NavLink to="/" className="hover:text-primary-hover transition">About</NavLink></li>
            { currentadmin.loginStatus ? (<li> < NavLink to="/admindashboard" className=" m-0 hover:text-primary-hover transition"> Dashbord</NavLink></li>) : (<li>< NavLink to="/singup" className=" m-0 hover:text-primary-hover transition" >Sign Up</NavLink></li>)}

 
            <li> <NavLink to="/login" className="   hover:text-primary-hover transition">Login</NavLink></li>


          </ul>
        </nav>
      </header>

 
  )
}

export default Header