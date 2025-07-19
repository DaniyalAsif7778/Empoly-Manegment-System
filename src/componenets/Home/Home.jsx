import React from 'react'
 import  {AdminDashbord, EmpolyDashBoard}   from '../../imports';
  import { useAuthContext } from '../../context/AuthContex';
function Home(  ) {
 
 const { data } = useAuthContext() 
 console.log("home", data);
 
  
  return (
     
     <div className='  '>
     
     {/* < EmpolyDashBoard/> */}
      {/* <AdminDashbord/>   */}
     </div> 
  )
}

export default Home