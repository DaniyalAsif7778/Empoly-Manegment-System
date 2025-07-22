import React from 'react'
import { AdminForm ,EmpolyDashBordHeader ,EmployeesList} from '../../imports'
 import { useAuthContext } from '../../context/AuthContex'
function AdminDashbord() {
 const {currentadmin} = useAuthContext();
  

  return (
    <div >
     {!currentadmin.loginStatus  ?  (<div className='w-full h-screen  flex items-center justify-center'><h1>Please Login...</h1></div>):  ( <div className='w-full h-full p-2 '>
     
     <EmpolyDashBordHeader/> 
   <AdminForm/>
<EmployeesList/>
     </div> ) }
  
    </div >
  )
}

export default AdminDashbord