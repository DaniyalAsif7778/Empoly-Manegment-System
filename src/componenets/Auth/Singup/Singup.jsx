import React, { useState } from "react";
import { useAuthContext } from "../../../context/AuthContex";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

function Signup() {
  const { data, addAdmin, addUser } = useAuthContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const safeTrim = (val) => (typeof val === "string" ? val.trim() : "");

  const SignupHandler = (e) => {
    e.preventDefault();

    if (
      safeTrim(name) === "" ||
      safeTrim(email) === "" ||
      safeTrim(password) === "" ||
      safeTrim(role) === ""
    ) {
      toast.error("Please fill all fields correctly");
      return;
    }

    if (safeTrim(role).toLowerCase() === "admin") {
      const nameTaken = data.App.find(
        (item) => safeTrim(item.Admin).toLowerCase() === safeTrim(name).toLowerCase()
      );
      const emailTaken = data.App.find(
        (item) => safeTrim(item.Email).toLowerCase() === safeTrim(email).toLowerCase()
      );
      const passwordTaken = data.App.find(
        (item) =>
          safeTrim(item.password).toLowerCase() === safeTrim(password).toLowerCase()
      );

      if (nameTaken) return toast.error("Admin name is already taken.");
      if (emailTaken) return toast.error("Email is already taken.");
      if (passwordTaken) return toast.error("Password is already taken.");

      const toastId = toast.loading("Creating admin...");
      setTimeout(() => {
        addAdmin({
          id: uuidv4(),
          Admin: safeTrim(name),
          Email: safeTrim(email),
          password: safeTrim(password),
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
      }, 700);
    }

    if (safeTrim(role).toLowerCase() === "employee") {
      let nameTaken = false;
      let passwordTaken = false;

      data.App.forEach((admin) => {
        if (
          admin.Employees.some(
            (emp) =>
              safeTrim(emp.userName).toLowerCase() === safeTrim(name).toLowerCase()
          )
        ) {
          nameTaken = true;
        }

        if (
          admin.Employees.some(
            (emp) =>
              safeTrim(emp.password).toLowerCase() === safeTrim(password).toLowerCase()
          )
        ) {
          passwordTaken = true;
        }
      });

      if (nameTaken) return toast.error("Employee name is already taken.");
      if (passwordTaken) return toast.error("Password is already taken.");

      const toastId = toast.loading("Creating employee...");
      setTimeout(() => {
        addUser({
          id: uuidv4(),
          userName: safeTrim(name),
          Email: safeTrim(email),
          password: safeTrim(password),
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
      }, 700);
    }
  };

  return (
    <div className="signup-container w-full h-screen flex items-center justify-center p-4">
      <div className="h-max w-full max-w-3xl bg-navbar p-4 rounded-lg border-2 border-border">
        <form className="w-full h-full" onSubmit={SignupHandler}>
          <fieldset className="h-full border-2 border-border border-solid rounded-md p-2">
            <legend className="p-2 text-text-primary text-2xl">Sign Up</legend>
            <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              <div className="flex flex-col items-start justify-center gap-0.5 mb-2.5">
                <label htmlFor="role" className="text-text-primary">Role :</label>
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  type="text"
                  placeholder="Role"
                  className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-0.5 mt-6 mb-2.5">
                <label htmlFor="password" className="text-text-primary">Password :</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full border-2 border-border rounded-md p-2 text-text-secondary"
                />
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
