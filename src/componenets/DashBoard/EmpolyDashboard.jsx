import React from 'react'
import { DashBordHeader,   TaskListInfo, TasksList } from '../../imports'
import { useAuthContext } from '../../context/AuthContex'
export default function EmpolyDashboard() {
  const {currentuser}=useAuthContext();
  return (
    <div >
      {!currentuser.loginStatus ? (<div className='w-full h-screen  flex items-center justify-center'><h1>Please Login...</h1></div>) : (
        <div className='w-[100%] h-full  p-2'>
          {/* <DashBordHeader /> */}
          <TaskListInfo />
          <TasksList />
         
        </div>)}

        </div>

      )
  
}

