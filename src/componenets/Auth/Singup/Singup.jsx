import React, { useEffect, useState } from "react";
import useSingUp from "../../../hooks/useSingUp";

function Signup() {

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [debounceEmail, setDebounceEmail] = useState("")
  const [debouncePassword, setDebouncePassword] = useState("")
  useEffect(() => {
    const handler = setTimeout(() => {


      setDebounceEmail(email)
      setDebouncePassword(password)




    }, 1000)
    return ()=> clearTimeout(handler)
  }, [email, password
  ])
  console.log(debounceEmail,debouncePassword);
  
  const { SignupHandler } = useSingUp(name, debounceEmail, debouncePassword, role, setEmailError, setPasswordError);
   
  
  // // const SignupHandler = () => {


  // //   const loginDetails = {
  // //     id: uuidv4(),
  // //     name: safeTrim(name),
  // //     Email: safeTrim(email),
  // //     password: safeTrim(password),
  // //   }

  // //   Object.keys(loginDetails).forEach((key) => {
  // //     if (loginDetails[key] == "") {
  // //       toast.error(` Enter ${key}. `);

  // //     }
  // //   })
  // //   if (safeTrim(name) !== "" && safeTrim(email) !== "" && safeTrim(password) !== "" && safeTrim(role) == "Admin") {
  // //     if (emailValid, passwordValid) {

  // //       const toastId = toast.loading("Creating admin...");
  // //       setTimeout(() => {
  // //         async function name() {
  // //           const cryptoService = new CryptoService("mySecretKey123456789");

  // //           const result = cryptoService.encrypt("Admin123");

  // //           localStorage.setItem("adminId", result);
  // //           console.log(result);
  // //         }
  // //         name()
  // //         dispatch(addAdmin(loginDetails))


  // //         toast.dismiss(toastId);
  // //         toast.success("Admin created successfully!");


  // //         setName("");
  // //         setEmail("");
  // //         setPassword("");
  // //         setRole("");


  // //       }, 700);


  // //     }
  // //   }



  //   console.log(data);
  //   // if (safeTrim(role).toLowerCase() === "employee") {
  //   //   let nameTaken = false;
  //   //   let passwordTaken = false;

  //   //   data.App.forEach((admin) => {
  //   //     if (
  //   //       admin.Employees.some(
  //   //         (emp) =>
  //   //           safeTrim(emp.userName).toLowerCase() === safeTrim(name).toLowerCase()
  //   //       )
  //   //     ) {
  //   //       nameTaken = true;
  //   //     }

  //   //     if (
  //   //       admin.Employees.some(
  //   //         (emp) =>
  //   //           safeTrim(emp.password).toLowerCase() === safeTrim(password).toLowerCase()
  //   //       )
  //   //     ) {
  //   //       passwordTaken = true;
  //   //     }
  //   //   });

  //   //   if (nameTaken) return toast.error("Employee name is already taken.");
  //   //   if (passwordTaken) return toast.error("Password is already taken.");

  //   //   const toastId = toast.loading("Creating employee...");
  //   //   setTimeout(() => {
  //   //     addUser({
  //   //       id: uuidv4(),
  //   //       userName: safeTrim(name),
  //   //       Email: safeTrim(email),
  //   //       password: safeTrim(password),
  //   //       loginStatus: true,
  //   //       tasks: [],
  //   //     });

  //   //     toast.dismiss(toastId);
  //   //     toast.success("Employee created successfully!");

  //   //     setName("");
  //   //     setEmail("");
  //   //     setPassword("");
  //   //     setRole("");
  //   //     navigate("/employedashboard");
  //   //   }, 700);
  //   // }
  // };
  // console.log(data.Admins, "data");
  return (
    <div className="signup-container w-full h-screen flex items-center justify-center p-4">
      <div className="h-max w-full max-w-3xl bg-navbar p-4 rounded-lg border-2 border-border">
        <form className="w-full h-full" onSubmit={(e) => {
          e.preventDefault();

          SignupHandler()


        }}>
          <fieldset className="h-full border-2 border-border border-solid rounded-md p-2">
            <legend className="p-2 text-text-primary text-2xl">Sign Up</legend>
            <div className="p-2  ">
              <div className="flex flex-col">
                <div className="flex flex-col items-start justify-center gap-0.5 mb-2.5">
                  <label htmlFor="name" className="text-text-primary">Name :</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
                  />
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 mt-6 mb-2.5">
                  <label htmlFor="password" className="text-text-primary">Password :</label>
                  <input
                    value={password}
                    onChange={(e) => {

                      setPassword(e.target.value)


                    }}
                    type="password"
                    placeholder="Password"
                    className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
                  />
                  <p>{passwordError}</p>
                </div>
                <div className="flex flex-col items-start justify-center gap-0.5 mt-6 mb-2.5">
                  <label htmlFor="email" className="text-text-primary">Email :</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
                  />
                  <p>{emailError}</p>
                </div>
              </div>
              <div className="flex flex-col  items-start justify-start gap-2 mb-2.5">
                <label htmlFor="role" className="text-text-primary">Role :</label>
                <div className="flex flex-row items-center gap-2">

                  <input
                    type="checkbox"
                    checked={role === "Admin"}        // select if role is Admin
                    onChange={() => setRole(role === "Admin" ? "" : "Admin")}  // toggle Admin
                    name="Admin"
                    className="
        appearance-none w-4 h-4 border-2 border-gray-400 rounded
        checked:bg-green-500 checked:border-green-500
        focus:outline-none transition-colors
      "
                  /><label htmlFor="Admin"> Admin
                  </label>
                </div>

                <div className="flex flex-row items-center gap-2">

                  <input
                    type="checkbox"
                    checked={role === "Employee"}    // select if role is Employee
                    onChange={() => setRole(role === "Employee" ? "" : "Employee")}  // toggle Employee
                    name="Employee"
                    className="
        appearance-none w-4 h-4 border-2 border-gray-400 rounded
        checked:bg-green-500 checked:border-green-500
        focus:outline-none transition-colors
      "
                  />    <label htmlFor="Employee">Employee
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full sm:flex sm:justify-center">
              <button
                type="submit"
                className="w-full max-w-2xs sm:item-center text-Semibold bg-primary text-text-primary"
              >
                Sign up
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Signup;
