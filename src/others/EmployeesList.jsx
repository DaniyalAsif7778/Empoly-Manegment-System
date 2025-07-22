import React from 'react'
import { useAuthContext } from '../context/AuthContex'
function EmployeesList() {
    const {currentadmin}=useAuthContext()
    return (
        <div className='w-full flex flex-col gap-2 mt-4 bg-navbar  px-2 py-4 rounded-lg '>
            <header className='w-full flex justify-evenly items-center flex-wrap'>
                <h1 className='text-[2vmax]'>Employee Name</h1>
                <h1 className='text-[2vmax]'>New Tasks</h1>
                <h1  className='text-[2vmax]'>Active Tasks</h1>
                <h1  className='text-[2vmax]'>Completed</h1>
                <h1  className='text-[2vmax]'> Failed</h1>
            </header>
            {
               currentadmin.Employees.map((employee,id)=>{
                    return(
                        <div key={id}  className='w-full flex justify-evenly items-center  border-border border '>
                        <h1> {employee.userName}   </h1>
                        <h1>0</h1>
                        <h1>0</h1>
                        <h1>0</h1>
                        <h1>0</h1>
        
                    </div >
                    )
               })
            }
            {/* <div className='w-full flex justify-evenly items-center  border-border border '>
                <h1>Talh    </h1>
                <h1>0</h1>
                <h1>0</h1>
                <h1>0</h1>
                <h1>0</h1>

            </div > */}

        </div>
    )
}

export default EmployeesList