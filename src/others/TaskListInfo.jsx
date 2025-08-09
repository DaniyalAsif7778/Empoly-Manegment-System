<<<<<<< HEAD
 
 
    
 
import React from 'react'
import { useAuthContext } from '../context/AuthContex'
function TaskListInfo() {
  const {currentuser}=useAuthContext();
   const   newTask = currentuser.tasks.filter((task)=> task.taskStatus === "null" ).length;
   const  Completed  = currentuser.tasks.filter((task)=> task.taskStatus === "Completed" ).length;
   const  Failed = currentuser.tasks.filter((task)=> task.taskStatus === "Failed" ).length;
   const  ActiveTask = currentuser.tasks.filter((task)=> task.taskStatus === "Working" ).length;

   console.log(newTask,Completed,Failed,ActiveTask);
   
 
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
  
=======
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContex";

function TaskListInfo() {
  const { currentuser } = useAuthContext();

  const [stats, setStats] = useState({
    newTask: 0,
    Completed: 0,
    Failed: 0,
    ActiveTask: 0,
  });

  useEffect(() => {
    const updateStats = () => {
      const newTask = currentuser.tasks.filter((task) => task.taskStatus === "null").length;
      const Completed = currentuser.tasks.filter((task) => task.taskStatus === "Completed").length;
      const Failed = currentuser.tasks.filter((task) => task.taskStatus === "Failed").length;
      const ActiveTask = currentuser.tasks.filter((task) => task.taskStatus === "Working").length;

      setStats({ newTask, Completed, Failed, ActiveTask });
    };

    updateStats(); // initial render
    window.addEventListener("task-updated", updateStats); // 🔥

    return () => {
      window.removeEventListener("task-updated", updateStats);
    };
  }, [currentuser]);

  return (
    <div className="w-full h-max grid grid-cols-2 gap-5 place-items-center sm:grid-cols-4 border border-border bg-surface p-4 mt-4">
      <Card count={stats.newTask} label="New Task" />
      <Card count={stats.Completed} label="Completed" />
      <Card count={stats.ActiveTask} label="Active" />
      <Card count={stats.Failed} label="Failed" />
    </div>
  );
>>>>>>> 89901e50f0bf696e69876786e5e762f14dc9f921
}

const Card = ({ count, label }) => (
  <div className="w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border border-border-secondary rounded-2xl">
    <h2 className="text-Semibold text-2xs text-text-primary">{count}</h2>
    <h1 className="text-[1rem] text-Semibold text-text-secondary">{label}</h1>
  </div>
);

export default TaskListInfo;
