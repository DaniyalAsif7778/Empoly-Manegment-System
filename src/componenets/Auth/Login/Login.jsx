import React from 'react'
import { useState } from 'react';
function Login() {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showpassword,setShowPassword] =useState("password");
  const sumbitHandler =(e)=>{
    e.preventDefault();
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
  }
  const  passwordshowHandler=()=>{
  
 
    }
   
  return (
   <>
   <div className="signup-container w-full h-screen flex items-center justify-center p-4" >
  <div className="h-max  w-full max-w-3xl   bg-navbar p-4 rounded-lg border-2 border-border">
    <form className="  w-full  h-full   " onSubmit={(e)=>{
      sumbitHandler(e)
    }}>
      <fieldset className=" h-full border-2 boder-border border-solid rounded-md p-2">
        <legend className="p-2 text-text-primary text-2xl">Login</legend>

        <div className="p-2  grid grid-cols-1 sm:grid-cols-2 gap-3 ">
          <div className="flex flex-col items-start justify-center gap-0.5 mb-2.5 ">
            <label htmlFor="name" className="text-text-primary">FirstName :</label>
            <input
              id="FirstName"
              value={firstname}
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
              type="text"
              placeholder="FirstName"
              className="w-full   border-2 border-border rounded-md p-2 text-text-secondary"
            />
          </div>

          <div className="flex flex-col   items-start justify-center gap-0.5  mb-2.5">
            <label htmlFor="name" className="text-text-primary">LastName :</label>
            <input
               value={lastName}
               onChange={(e)=>{
                  setLastName(e.target.value)
               }}
              id=" LastName"
              type="text"
              placeholder="LastName"
              className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
            />
          </div>
          <div className="flex   flex-col  items-start justify-center gap-0.5  mt-6  mb-2.5">
            <label htmlFor="name" className="text-text-primary">Password :</label>
            <input
               value={ password}
               onChange={(e)=>{
                  setPassword(e.target.value)
               }}
              id="Password"
              type='password'
              placeholder="Password"
              className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
            />
            <div className="flex justify-end pr-3 text-text-secondary w-full" onClick={()=>{
              passwordshowHandler()
            }}> <h1>Show Password</h1></div>
          </div>
          <div className="flex flex-col  items-start justify-center gap-0.5 mb-2.5 ">
            <label htmlFor="name" className="text-text-primary"> Email :</label>
            <input
               value={email}
               onChange={(e)=>{
                  setEmail(e.target.value)
               }}
              id="Email"
              type="Email"
              placeholder="Email"
              className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
            />
          </div>
        </div>

        <div className="w-full sm:flex sm:justify-center">
          <button type="submit" className= "w-full max-w-2xs  sm:item-center text-Semibold bg-primary text-text-primary">Sing up </button>
        </div>
      </fieldset>
    </form>
  </div>
</div>

   
   </>
  )
}

export default Login