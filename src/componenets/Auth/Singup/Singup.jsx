
import React, { useEffect, useState } from "react";
import useSingUp from "../../../hooks/useSingUp";
import { Button, Input } from "../../components";
import { useRef } from "react";
function Signup() {
  const nameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()
  const adminRef = useRef()
  const employeeRef = useRef()

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [debounceEmail, setDebounceEmail] = useState("");
  const [debouncePassword, setDebouncePassword] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceEmail(email);
      setDebouncePassword(password);
    }, 600);

    return () => clearTimeout(handler);
  }, [email, password]);

  const { signUpHandler } = useSingUp(
    name,
    debounceEmail,
    debouncePassword,
    role,
    setEmailError,
    setPasswordError
  );
  const isDisabled = !name || !email || !password || !role;
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--color-bg)]">

      <div className="w-full max-w-md bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-xl p-8">

        <h2 className="text-3xl font-semibold mb-2 text-[var(--color-text-primary)]">
          Create Account
        </h2>

        <p className="text-sm mb-6 text-[var(--color-text-secondary)]">
          Register for the employee management system
        </p>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            signUpHandler();
          }}
        >
          {/* <Input   
              type="password"
            label="password"
            name="password"
            ref={passwordRef}
            error={passwordError}
            placeholder="Enter your password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" /> 
             */}
          {/* Name */}
          <div className="space-y-1">
            {/* <label className="text-sm text-[var(--color-text-secondary)]">
              Name
            </label> */}
            <Input
              name="name"
              label="Name"
              ref={nameRef}
              type="text"
              placeholder="Enter name"
              value={name}
              onchange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
            />
            {/* <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
            /> */}
          </div>

          {/* Password */}
          <div className="space-y-1">
            {/* <label className="text-sm text-[var(--color-text-secondary)]">
              Password
            </label> */}
            <Input
              name="password"
              label="password"
              ref={passwordRef}
              type="password"
              error={passwordError}
              placeholder="Enter password"
              value={password}
              onchange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
            />
            {/* <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
            /> */}
            {/* 
            {passwordError && (
              <p className="text-xs text-[var(--color-error)]">
                {passwordError}
              </p>
            )} */}
          </div>

          {/* Email */}
          <div className="space-y-1">
            {/* <label className="text-sm text-[var(--color-text-secondary)]">
              Email
            </label> */}
            <Input
              name="email"
              label="Email"
              ref={emailRef}
              type="email"
              error={emailError}
              placeholder="Enter email"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
            />
            {/* <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[var(--color-navbar)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
            />

            {emailError && (
              <p className="text-xs text-[var(--color-error)]">
                {emailError}
            //   </p> */}
            {/* // )} */}
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

              <div div className="flex  flex-row-reverse justify-center  items-center gap-2 cursor-pointer text-[var(--color-text-primary)]">
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

          <Button type="submit"
            disabled={isDisabled}
            text="SingUp"
            className={`
              w-full py-2.5 rounded-md font-medium transition
              bg-[var(--color-primary)] text-white
              
              ${isDisabled ? "opacity-50 cursor-not-allowed hover:bg-[var(--color-primary-hover)]" : ""}
            `} />
        </form>
      </div>
    </div>
  );
}

export default Signup;

