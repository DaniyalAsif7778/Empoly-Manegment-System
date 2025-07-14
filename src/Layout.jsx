 
import {Header ,Footer} from "./imports";
 import { Outlet } from "react-router";
function Layout () {
  return (
    <>
   <Header/>  
  <Outlet/>
   <Footer/>
    </>
  )
}

export default Layout;