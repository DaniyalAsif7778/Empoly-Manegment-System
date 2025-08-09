import React from "react";

import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContex";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

function Singup() {
  const { data, addAdmin, addUser } = useAuthContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
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
 
    
    // Check for empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      role.trim() === ""
    ) {
      toast.error("Please fill all fields correctly");
      return;
    }
    
    if (role.trim() === "Admin") {
      const nameTaken = data.App.find(
        (item) => item.Admin.trim().toLowerCase() === name.trim().toLowerCase()
      );
      const emailTaken = data.App.find(
        (item) => item.Email.trim().toLowerCase() === email.trim().toLowerCase()
      );
      const passwordTaken = data.App.find(
        (item) => item.password.trim().toLowerCase() === password.trim().toLowerCase()
      );
    
      if (nameTaken) {
        toast.error("Admin name is already taken.");
        return;
      }
    
      if (emailTaken) {
        toast.error("Email is already taken.");
        return;
      }
    
      if (passwordTaken) {
        toast.error("Password is already taken.");
        return;
      }
    
      const toastId = toast.loading("Creating admin...");
    
      setTimeout(() => {
        addAdmin({
          id: uuidv4(),
          Admin: name.trim(),
          Email: email.trim(),
          password: password.trim(),
          loginStatus: true,
          Employees: [],
        });
    
        toast.dismiss(toastId);
        toast.success("Admin created successfully!");
    
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
        navigate("/admindashboard");
      }, 2000);
    }
    
    if (role.trim() === "Employee") {
      let nameTaken = false;
      let passwordTaken = false;
    
      data.App.forEach((admin) => {
        if (
          admin.Employees.some(
            (emp) => emp.userName.trim().toLowerCase() === name.trim().toLowerCase()
          )
        ) {
          nameTaken = true;
        }
    
        if (
          admin.Employees.some(
            (emp) => emp.password.trim().toLowerCase() === password.trim().toLowerCase()
          )
        ) {
          passwordTaken = true;
        }
      });
    
      if (nameTaken) {
        toast.error("Employee name is already taken.");
        return;
      }
    
      if (passwordTaken) {
        toast.error("Password is already taken.");
        return;
      }
    
      const toastId = toast.loading("Creating employee...");
    
      setTimeout(() => {
        addUser({
          id: uuidv4(),
          userName: name.trim(),
          Email: email.trim(),
          password: password.trim(),
          loginStatus: true,
          tasks: [],
        });
    
        toast.dismiss(toastId);
        toast.success("Employee created successfully!");
    
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
        navigate("/employedashboard");
      }, 2000);
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
                  <h1>{ } </h1>
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
                  <h1>{ } </h1>
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
                  <h1>{ } </h1>
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
