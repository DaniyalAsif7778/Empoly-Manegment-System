import React from 'react'
import { AdminForm ,  EmployeesList} from '../../imports'
  import {  useSelector } from 'react-redux'
function AdminDashbord() {
 
 const currentUser =  useSelector((state)=> state.currentUser.user)
 console.log(currentUser);
 

  return (
    <div >
     {  !currentUser.loginStatus    ?  (<div className='w-full h-screen  flex items-center justify-center'><h1>Please Login...</h1></div>):  ( <div className='w-full h-full p-2 '>
     
    
   <AdminForm/>
<EmployeesList/> 
     </div> ) }
  
    </div >
  )
}

export default AdminDashbord