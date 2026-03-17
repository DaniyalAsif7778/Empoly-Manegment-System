/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function useValidator(debounceEmail, debouncePassword, role) {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [idValidator, setIdValidator] = useState(false); // reserved for future use
  const [emailTaken, setEmailTaken] = useState(false);
  const [passwordTaken, setPasswordTaken] = useState(false);
  const [employerId, setEmployerId] = useState(null);

  const Admins = useSelector((state) => state.users.Admins || []);
  const Employees = useSelector((state) => state.users.Employees || []);

  useEffect(() => {
    // 1️⃣ Validate email & password formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    setEmailValid(emailRegex.test(debounceEmail));
    setPasswordValid(passwordRegex.test(debouncePassword));

    // 2️⃣ Role-specific checks
    if (role === "Admin") {
      setEmailTaken(Admins.some((admin) => admin.Email === debounceEmail));
      setPasswordTaken(Admins.some((admin) => admin.password === debouncePassword));
      setEmployerId(null);
    }

    if (role === "Employee") {
      // Check if admin exists for the given email
      const admin = Admins.find((a) => a.Email === debounceEmail);
      if (admin) {
        setEmployerId(admin.EmployerID);
        setEmailTaken(true); // email corresponds to an existing admin
      } else {
        setEmployerId(null);
        setEmailTaken(false); // invalid admin email
      }
      setPasswordTaken(Employees.some((emp) => emp.password === debouncePassword));
    }
  }, [debounceEmail, debouncePassword, role  ]);

  return {
    emailValid,
    passwordValid,
    emailTaken,
    passwordTaken,
    employerId
  };
}