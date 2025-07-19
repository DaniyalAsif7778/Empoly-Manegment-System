 
import {Header ,Footer} from "./imports";
 import { Outlet } from "react-router";
function Layout () {
  return (
    
    <div className="w-full ">
   <Header/>  
  <Outlet/>
   <Footer/>
   </div>
     
  )
}

export default Layout;