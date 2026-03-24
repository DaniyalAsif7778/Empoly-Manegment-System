import { useSelector ,useDispatch} from "react-redux"
import { useNavigate } from "react-router";
 import useUserFinder from "./useUserFinder"
import { setCurrentUser } from "../features/currentUser";
import CryptoService from "./encyription";
function useLogin(email,password,setPasswordError,setEmailError) {
    const navigate = useNavigate();
    const Admins = useSelector((state)=> state.users.Admins)
    const Employees = useSelector((state)=> state.users.Employees)
const dispatch = useDispatch();
    console.log(Admins,email,password);
    
    function loginHandler(e) {
      e.preventDefault()
    
      if (!email || !password) return
    
      // 1️⃣ check if email exists in admins
      const admin = Admins.find((a) => a.Email === email)
    
      // 2️⃣ check if email exists in employees
      const employee = Employees.find((emp) => emp.Email === email)
    
      // 3️⃣ if email not found anywhere
      if (!admin && !employee) {
        setEmailError("Use correct email")
        return
      }else{
        setEmailError("")
      }
    
      // 4️⃣ Admin login
      if (admin) {
    
        if (admin.password !== password) {
          setPasswordError("Incorrect password")
          return
        }else{
          setPasswordError("")
        }
         
         
        dispatch(setCurrentUser({ ...admin }))
        navigate("/DashBoard")
        return
      }
    
      // 5️⃣ Employee login
      if (employee) {
    
        if (employee.password !== password) {
          setPasswordError("Incorrect password")
          return
        }else{
          setPasswordError("")
        }
    
        // check admin using EmployerID
        const employer = Admins.find(
          (adm) => adm.id === employee.EmployerID
        )
    
        if (!employer) {
          setEmailError("No admin found. Please signup")
          return
        } 
      
    
        dispatch(setCurrentUser({ ...employee  }))
        navigate("/DashBoard")
      }
    }
    //    useUserFinder(user.id)
    return {loginHandler}
}

export default useLogin

