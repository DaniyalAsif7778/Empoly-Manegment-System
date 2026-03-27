 
import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useRef } from "react";
import { Input,Button } from "../componenets/components";
function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const adminRef = useRef()
  const employeeRef = useRef()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role, setRole] = useState("");
  const { loginHandler } = useLogin(
    email,
    password,
    setPasswordError,
    setEmailError,role
  );

  const isDisabled = !email || !password;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--color-bg)]">
      <div className="w-full max-w-md bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow">

        {/* Header */}
        <div className="  flex flex-col   mb-6">
          <h2 className="text-3xl whitespace-nowrap font-semibold text-[var(--color-text-primary)]">
            Welcome Back
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={loginHandler} className="space-y-5">

          {/* Email */}
          <div className="flex flex-col gap-1">
          
            <Input  type="email"
            label="Email"
            name="email"
            ref={emailRef}
            error={emailError}
              placeholder="Enter your email"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" /> 
           
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
           
            <Input   
              type="password"
            label="Password"
            name="password"
            ref={passwordRef}
            error={passwordError}
            placeholder="Enter your password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" /> 
            
          
          </div>
                    {/* Role */}
          <div className="space-y-2">
            <label className="text-sm text-[var(--color-text-secondary)]">
              Role :
            </label>

            <div className="flex gap-6   py-2">

              <div className="flex flex-row-reverse items-center  justify-center gap-2 cursor-pointer text-[var(--color-text-primary)]">
                <Input
                  labelClassName={" "}
                  label="Admin"
                  ref={adminRef}
                  type="radio"
                  name="role"
                  value="Admin"
                  checked={role === "Admin"}
                  onchange={(e) => setRole(e.target.value)}
                  className="accent-[var(--color-primary)]"
                />

              </div>

              <div   className="flex  flex-row-reverse justify-center  items-center gap-2 cursor-pointer text-[var(--color-text-primary)]">
                <Input

                  label="Employee"
                  ref={employeeRef}
                  type="radio"
                  name="role"
                  value="Employee"
                  checked={role === "Employee"}
                  onchange={(e) => setRole(e.target.value)}
                  className="accent-[var(--color-primary)] "
                />

              </div>

            </div>
          </div>
          {/* Button */}
           
          <Button   type="submit"
            disabled={isDisabled}
            className={`
              w-full py-2.5 rounded-md font-medium transition
              bg-[var(--color-primary)] text-white
              hover:bg-[var(--color-primary-hover)]
              ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
            `} text="Login"/> 
        </form>
      </div>
    </div>
  );
}

export default Login;
 
