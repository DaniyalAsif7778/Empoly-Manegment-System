import React, { useState } from 'react';
 
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import useLogout from '../../hooks/useLogout';
export default function EmpolyDashBordHeader() {
  const navigate = useNavigate();
   
  const currentUser =  useSelector((state)=> state.currentUser.user)
  console.log(currentUser);
  const {logOutHandler} =  useLogout()
  const Logout = () => {
    const toastId = toast.loading("Logging out...");
    logOutHandler()
    console.log(currentUser);
    
    // setTimeout(() => {
    //   if (currentadmin.loginStatus === true) {
    //     setData((prevData) => ({
    //       App: prevData.App.map((admin) => {
    //         if (admin.id === currentadmin.id) {
    //           return {
    //             ...admin,
    //             loginStatus: false
    //           };
    //         }
    //         return admin;
    //       })
    //     }));

    //     setCurrentAdmin({ loginStatus: false });
    //   }

    //   if (currentuser.loginStatus === true) {
    //     setData((prevData) => ({
    //       App: prevData.App.map((admin) => {
    //         return {
    //           ...admin,
    //           Employees: admin.Employees.map((employee) => {
    //             if (employee.id === currentuser.id) {
    //               return { ...employee, loginStatus: false };
    //             }
    //             return employee;
    //           }),
    //         };
    //       }),
    //     }));

    //     setCurrentUser({ loginStatus: false });
    //   }

    //   toast.dismiss(toastId);
    //   toast.success("Logged out successfully!");
    //   navigate("/login");
    // }, 700); // 2 seconds delay for realism
  };

  return (
    <nav className='w-full flex justify-between items-center bg-surface p-4 mt-4 border border-border shadow-md rounded-md'>
      <div>
        <h3 className='text-text-secondary text-semibold'>Hello</h3>
        <h1>
          <span className='text-text-primary text-semibold text-2xl'>
            {currentUser   ? currentUser.name :"" } 👏
          </span>
        </h1>
      </div>
      <div>
        <button className='bg-primary px-3 rounded-sm py-1.5' onClick={Logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
