import React from 'react'
import { AdminForm ,EmpolyDashBordHeader } from '../../imports'
 import { useAuthContext } from '../../context/AuthContex'
function AdminDashbord() {
 const {currentadmin} = useAuthContext();
    console.log(currentadmin);

  return (
    <div >
     {!currentadmin ?  (<div className='w-full h-screen  flex items-center justify-center'><h1>Please Login...</h1></div>):  ( <div className='w-full h-full  '>
     
     <EmpolyDashBordHeader/> 
   <AdminForm/>
     </div> ) }
  
    </div >
  )
}

export default AdminDashbord