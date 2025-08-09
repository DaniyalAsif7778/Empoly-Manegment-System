<<<<<<< HEAD
 
function TaskListInfo() {
    
=======
import React from 'react'
import { useAuthContext } from '../context/AuthContex'
function TaskListInfo() {
  const {currentuser}=useAuthContext();
   const   newTask = currentuser.tasks.filter((task)=> task.taskStatus === "null" ).length;
   const  Completed  = currentuser.tasks.filter((task)=> task.taskStatus === "Completed" ).length;
   const  Failed = currentuser.tasks.filter((task)=> task.taskStatus === "Failed" ).length;
   const  ActiveTask = currentuser.tasks.filter((task)=> task.taskStatus === "Working" ).length;

   console.log(newTask,Completed,Failed,ActiveTask);
   
>>>>>>> 52f2fb345d299bc238b152a4a86d9a4180c98019
  return (
    
      <div className='w-full  h-max grid grid-cols-2 gap-5 place-items-center sm:grid-cols-4  border border-border bg-surface p-4  mt-4'>
        <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border border-border-secondary rounded-2xl'>
          <h2 className='text-Semibold text-2xs text-text-primary'>{newTask}</h2>
          <h1 className='text-[1rem] text-Semibold text-text-secondary '>New Task</h1>
        </div>   <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border  border-border-secondary  rounded-2xl'>
          <h2 className='text-Semibold text-2xs text-text-primary'>{Completed}</h2>
          <h1 className='text-[1rem] text-Semibold text-text-secondary '>Completed</h1>
        </div>   <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border border-border-secondary rounded-2xl'>
          <h2 className='text-Semibold text-2xs text-text-primary'>{ActiveTask}</h2>
          <h1 className='text-[1rem] text-Semibold text-text-secondary '>Accepted</h1>
        </div>   <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border border-border-secondary  rounded-2xl'>
          <h2 className='text-Semibold text-2xs text-text-primary'>{Failed}</h2>
          <h1 className='text-[1rem] text-Semibold text-text-secondary '>Faild</h1>
        </div>
      </div>
    
    
  )
  
}

export default TaskListInfo