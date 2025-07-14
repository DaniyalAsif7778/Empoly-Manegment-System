import React from 'react'
import {  Link, NavLink } from 'react-router'
function Header() {
  return (
    < > 
<header className="bg-navbar text-text-primary  border-b border-border  px-6 py-4 flex justify-between items-center overflow-none">
 
  <div className="flex items-center gap-3">
    {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
    <span className="text-xl font-bold">EmpoManager</span>
  </div>

  {/* Navigation Links */}
  <nav className="flex items-center gap-6 text-sm font-medium">

  <ul className=' hidden sm:flex  gap-5  '>
      <li> <NavLink to="" className="hover:text-primary-hover   transition">Home</NavLink></li>
      <li> < NavLink to="" className="hover:text-primary-hover transition">About</NavLink></li>
      <li> <NavLink to="/login" className="   hover:text-primary-hover transition">Login</NavLink></li>
      <li>< NavLink to="/singup" className="  hover:text-primary-hover transition">Sign Up</ NavLink>
      </li>
    </ul>
  </nav>
</header>

    </ >
  )
}

export default Header