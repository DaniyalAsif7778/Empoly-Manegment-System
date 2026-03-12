import { useNavigate } from "react-router";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin } from "../features/user/UserSlice";
import { setState } from "../features/encryptionSlice";
import { CryptoService, useValidator } from './hooks'
function useSingUp(name, debounceEmail, debouncePassword, role, setEmailError, setPasswordError) {
    const dispatch = useDispatch();
    console.log(debounceEmail,debouncePassword);
    const navigate =  useNavigate()
    const data = useSelector((state) => state )
    const safeTrim = (val) => (typeof val === "string" ? val.trim() : "");
    const { emailValid, passwordValid } = useValidator(debounceEmail, debouncePassword)
    console.log(emailValid, passwordValid);
    useEffect(() => {
        if (!emailValid && debounceEmail !== "" && !debounceEmail.includes("@")) {
          setEmailError("Wrong formate");
        } else {
          setEmailError("");
        }
      }, [emailValid, debounceEmail, setEmailError]);
      
      useEffect(() => {
        if (!passwordValid && debouncePassword !== "" && debouncePassword.length > 8 ) {
          setPasswordError("Wrong formate");
        } else {
          setPasswordError("");
        }
      }, [passwordValid, debouncePassword, setPasswordError]);
    const SignupHandler = () => {
       let result="";
      async function name() {
        const cryptoService = new CryptoService("mySecretKey123456789");

          result = cryptoService.encrypt(debouncePassword);

        localStorage.setItem("adminId", result);
        dispatch(setState(result))
      
        
     }
    name()
    console.log(data);
      const loginDetails = {
        id: uuidv4(),
        name: safeTrim(name),
        Email: safeTrim(result.encrypted),
        password: safeTrim(debouncePassword),
    }

    Object.keys(loginDetails).forEach((key) => {
        if (loginDetails[key] == "") {
            toast.error(` Enter ${key}. `);

        }
    })
      
        if (safeTrim(name) !== "" && safeTrim(debounceEmail) !== "" && safeTrim(debouncePassword) !== "" && safeTrim(role) == "Admin") {
            if (emailValid, passwordValid) {

                const toastId = toast.loading("Creating admin...");
                setTimeout(() => {
                    
                    dispatch(addAdmin(loginDetails))


                    toast.dismiss(toastId);
                    toast.success("Admin created successfully!");


                    navigate("/admindashboard")
                }, 700);

               
            }
        }



   
        // if (safeTrim(role).toLowerCase() === "employee") {
        //   let nameTaken = false;
        //   let passwordTaken = false;

        //   data.App.forEach((admin) => {
        //     if (
        //       admin.Employees.some(
        //         (emp) =>
        //           safeTrim(emp.userName).toLowerCase() === safeTrim(name).toLowerCase()
        //       )
        //     ) {
        //       nameTaken = true;
        //     }

        //     if (
        //       admin.Employees.some(
        //         (emp) =>
        //           safeTrim(emp.password).toLowerCase() === safeTrim(password).toLowerCase()
        //       )
        //     ) {
        //       passwordTaken = true;
        //     }
        //   });

        //   if (nameTaken) return toast.error("Employee name is already taken.");
        //   if (passwordTaken) return toast.error("Password is already taken.");

        //   const toastId = toast.loading("Creating employee...");
        //   setTimeout(() => {
        //     addUser({
        //       id: uuidv4(),
        //       userName: safeTrim(name),
        //       Email: safeTrim(email),
        //       password: safeTrim(password),
        //       loginStatus: true,
        //       tasks: [],
        //     });

        //     toast.dismiss(toastId);
        //     toast.success("Employee created successfully!");

        //     setName("");
        //     setEmail("");
        //     setPassword("");
        //     setRole("");
        //     navigate("/employedashboard");
        //   }, 700);
        // }    
         console.log(data);

    };
    return { SignupHandler }
}

export default useSingUp