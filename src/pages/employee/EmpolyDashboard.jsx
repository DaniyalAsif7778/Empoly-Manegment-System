import React from 'react'
import { DashBordHeader,   TaskListInfo, TasksList } from '../../imports'
 import { useSelector } from 'react-redux';
export default function EmpolyDashboard() {
  const currentUser = useSelector((state)=> state.currentUser.user)
  console.log(currentUser);
  
  return (
    <div >
      {!currentUser?.loginStatus ? (<div className='w-full h-screen  flex items-center justify-center'><h1>Please Login...</h1></div>) : (
        <div className='w-[100%] h-full  p-2'>
          <DashBordHeader />
          <TaskListInfo />
          <TasksList />
         
        </div>)}

        </div>

      )
  
}

