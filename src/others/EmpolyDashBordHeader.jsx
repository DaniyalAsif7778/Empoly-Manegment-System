import React from 'react'
import { useAuthContext } from '../context/AuthContex'
import { useNavigate } from 'react-router'
export default function EmpolyDashBordHeader() {
  const navigate = useNavigate();
  const {   setData, currentadmin, setCurrentAdmin } = useAuthContext()
  const Logout = () => {
    
 setData((prevData)=>({
  App: prevData.App.map((admin)=>{
         if(admin.id == currentadmin.id){
          return {
            ...admin,
            loginStatus:false,
          }
         }
         return admin;

  })
 
 })
  
  )
   
  setCurrentAdmin( {loginStatus:false,});
navigate("/Login")
 
 
  
 

    

  }











  return (
   

      <nav className=' w-full flex justify-between items-center   p-4 mt-4 border border-border  shadow-md rounded-md'>
        <div>
          <h3 className='text-text-secondary text-Semibold'>Hellow</h3>
          <h1><span className='text-text-primary text-Semibold text-2xl'> {currentadmin.Admin} 👏</span></h1>
        </div>
        <div>
          <button className='bg-primary px-3 rounded-sm py-1.5' onClick={() => {
            Logout()
          }}>Logout</button>
        </div>
      </nav>

   
  )
}

