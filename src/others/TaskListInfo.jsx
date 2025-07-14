import React from 'react'

function TaskListInfo() {
  return (
    < > 
    <div className='w-full  h-max grid grid-cols-2 gap-5 place-items-center sm:grid-cols-4  border border-border bg-surface p-4  mt-4'>
   <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border border-border-secondary rounded-2xl'>
    <h2 className='text-Semibold text-2xs text-text-primary'>0</h2>
    <h1 className='text-[1rem] text-Semibold text-text-secondary '>New Task</h1>
   </div>   <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border  border-border-secondary  rounded-2xl'>
    <h2 className='text-Semibold text-2xs text-text-primary'>0</h2>
    <h1 className='text-[1rem] text-Semibold text-text-secondary '>Completed</h1>
   </div>   <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border border-border-secondary rounded-2xl'>
    <h2 className='text-Semibold text-2xs text-text-primary'>0</h2>
    <h1 className='text-[1rem] text-Semibold text-text-secondary '>Accepted</h1>
   </div>   <div className='w-[20vmax] bg-navbar p-4 flex flex-col items-start justify-end border border-border-secondary  rounded-2xl'>
    <h2 className='text-Semibold text-2xs text-text-primary'>0</h2>
    <h1 className='text-[1rem] text-Semibold text-text-secondary '>Faild</h1>
   </div>
    </div>
    </ >
  )
}

export default TaskListInfo