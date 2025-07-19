import React from "react";

import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContex";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
function Singup() {
  const { data, addAdmin, addUser } = useAuthContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState(" ");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  // const [showpassword,setShowPassword] =useState("password");
  const SingupHandler = (e) => {
    e.preventDefault();

    if (
      name.trim() == "" &&
      email.trim() == "" &&
      password.trim() == "" &&
      role.trim() == ""
    ) {
      alert("Please fill all fields correctly");
      return;
    }

    if  (
      role.trim() === "Admin" &&
      data.App.find(
        (item) => item.Admin.trim()  === name.trim().toLowerCase()
      )
      ) {
      setErrorName("Already Taken");
      } else if (
      role.trim() === "Admin" &&
      data.App.find(
        (item) => item.Email.trim().toLowerCase() === email.trim().toLowerCase()
      )
      ) {
      setErrorEmail("Already Taken");
      } else if (
      role.trim() === "Admin" &&
      data.App.find(
        (item) =>
          item.password.trim().toLowerCase() === password.trim().toLowerCase()
      )
       ) {
        setErrorPassword("Already Taken");
       } else if (name && email && password && role.trim() == "Admin") {
      addAdmin({
        id: uuidv4(),
        Admin: name.trim(),
        Email: email.trim(),
        password: password.trim(),
        loginStatus: true,
        Employees: [
          {
            id: "",
            userName: "Daniyal Asif",

            Email: "user@.com",

            password: 1236576,
            tasks: [],
          },
        ],
      });

      // reset form fields
      setName("");
      setEmail("");
      setPassword("");
      setRole("");

      // navigate
      navigate("/admindashboard");
       } else if (
      role.trim() == "Admin" &&
      name.trim() == "" &&
      email.trim() == "" &&
      password.trim() == ""
       ) {
        alert("Please fill all fields correctly");
    } 

      const checkuserPresense = data.App.some((admins)=>{
         admins.Employees.some((user)=> user.userName ==  name.trim() && user.Email ==email.trim())  
        
      })
       
     
      
    if (   role.trim() == "Employee" &&
           data.App.some((admins)=>{
          admins.Employees.some((user)=> user.userName ==  name.trim() )
       
     })
      
          
     ) {
      setErrorName("Already Taken");
     } else if ( role.trim() == "Employee" &&
      
      data.App.some((admins)=>{
        admins.Employees.some((user)=> user.password ==  password.trim() )
       
     })
      ) {
       setErrorPassword("Already Taken");
      } else {
      addUser({ 
        id: uuidv4(),
        userName: name,

        Email: email,

        password: password,
        tasks: [],
      });

      // reset form fields
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
    }
  };

  return (
    <div className="signup-container w-full h-screen flex items-center justify-center p-4">
      <div className="h-max  w-full max-w-3xl   bg-navbar p-4 rounded-lg border-2 border-border">
        <form
          className="  w-full  h-full   "
          onSubmit={(e) => {
            SingupHandler(e);
          }}
        >
          <fieldset className=" h-full border-2 boder-border border-solid rounded-md p-2">
            <legend className="p-2 text-text-primary text-2xl">Sign Up</legend>

            <div className="p-2  grid grid-cols-1 sm:grid-cols-2 gap-3 ">
              <div className="flex flex-col items-start justify-center gap-0.5 mb-2.5   ">
                <label htmlFor="name" className="text-text-primary">
                  Name :
                </label>
                <input
                  id=" Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder=" Name"
                  className="w-full   border-2 border-border rounded-md p-2 text-text-secondary"
                />
                <div className="flex justify-end pr-3 text-error w-full">
                  <h1>{errorName} </h1>
                </div>
              </div>

              <div className="flex flex-col   items-start justify-center gap-0.5  mb-2.5">
                <label htmlFor="role" className="text-text-primary">
                  Role :
                </label>
                <input
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  id="  Role"
                  type="text"
                  placeholder=" Role"
                  className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
                />
                <div
                  className="flex justify-end pr-3 text-text-secondary w-full"
                  onClick={() => {}}
                >
                  <h1> </h1>
                </div>
              </div>
              <div className="flex   flex-col  items-start justify-center gap-0.5  mt-6  mb-2.5">
                <label htmlFor="name" className="text-text-primary">
                  Password :
                </label>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="Password"
                  type="password"
                  placeholder="Password"
                  className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
                />
                <div
                  className="flex justify-end pr-3  text-errorw-full"
                  onClick={() => {}}
                >
                  <h1>{errorPassword} </h1>
                </div>
              </div>
              <div className="flex flex-col  items-start justify-center mt-6 gap-0.5 mb-2.5 ">
                <label htmlFor="name" className="text-text-primary">
                  Email :
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="Email"
                  type="Email"
                  placeholder="Email"
                  className="w-full border-2 border-border rounded-md  p-2 text-text-secondary"
                />
                <div
                  className="flex justify-end pr-3  text-error w-full"
                  onClick={() => {}}
                >
                  <h1>{errorEmail} </h1>
                </div>
              </div>
            </div>

            <div className="w-full sm:flex sm:justify-center">
              <button
                type="submit"
                className="w-full max-w-2xs  sm:item-center text-Semibold bg-primary text-text-primary"
              >
                Sing up
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Singup;
