import React, {  useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { useAuthContext } from '../../context/AuthContex';
 import { useSelector ,useDispatch } from 'react-redux';
 import { setMenue } from '../../features/menueSlice';
function Header() {
  const currentUser = useSelector((state)=> state.currentUser.user)
  const isOpened = useSelector((state)=> state.menue.isOpened)
  const { currentadmin, currentuser } = useAuthContext();
  const [status ,setStatus] =useState(false)
  const dispatch = useDispatch()
useEffect(()=>{
  console.log(currentUser,"admin");
},[currentUser])
  console.log();

  const isLoggedIn = currentUser?.loginStatus  
     
  return (
    <header className="w-full bg-navbar text-text-primary border-b border-border px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">EmploManager</span>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => {
              setStatus(!status)
              dispatch(setMenue(status))
            }}
            className="text-text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpened ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <ul className="flex gap-5">
            <li>
              <NavLink to="/" className="hover:text-primary-hover transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-primary-hover transition">About</NavLink>
            </li>
            {currentUser?.role == "admin" && (
              <li>
                <NavLink to="/admindashboard" className="hover:text-primary-hover transition">Dashboard</NavLink>
              </li>
            )}
            {currentUser?.role == "employee"  && (
              <li>
                <NavLink to="/employedashboard" className="hover:text-primary-hover transition">Dashboard</NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/settings" className="hover:text-primary-hover transition">Settings</NavLink>
              </li>
            )}
            {!isLoggedIn  && (
              <li>
                <NavLink to="/singup" className="hover:text-primary-hover transition">Sign up</NavLink>
              </li>
              
            
            )}
              {!isLoggedIn && (
              <li>
              <NavLink to="/login" className="hover:text-primary-hover transition">Login</NavLink>
            </li>
              
            
            )}
              
          </ul>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpened && (
        <div className="sm:hidden mt-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <NavLink to="/" className="hover:text-primary-hover transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-primary-hover transition">About</NavLink>
            </li>
            {currentUser?.role == "admin"&& (
              <li>
                <NavLink to="/admindashboard" className="hover:text-primary-hover transition">Dashboard</NavLink>
              </li>
            )}
            {currentUser?.role == "employee" && (
              <li>
                <NavLink to="/employedashboard" className="hover:text-primary-hover transition">Dashboard</NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/settings" className="hover:text-primary-hover transition">Settings</NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <NavLink to="/singup" className="hover:text-primary-hover transition">Sign up</NavLink>
              </li>
            )}
              {!isLoggedIn && (
              <li>
              <NavLink to="/login" className="hover:text-primary-hover transition">Login</NavLink>
            </li>
            )}
           
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
