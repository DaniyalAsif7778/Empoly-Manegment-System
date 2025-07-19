import React from 'react'
import {EmpolyDashBordHeader,TaskListInfo,TasksList} from '../../imports'

export default function EmpolyDashboard() {
  return (
    
      <div className='w-[100%] h-full  p-2'>
     <EmpolyDashBordHeader />
     <TaskListInfo/>
     <TasksList/>
      
    </div>
    
  )
}

 