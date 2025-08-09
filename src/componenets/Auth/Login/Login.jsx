import React, { useState } from 'react';
import { useAuthContext } from '../../../context/AuthContex';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data, setData, setCurrentAdmin, setCurrentUser } = useAuthContext();
  const navigate = useNavigate();

  const safeTrim = (val) => (typeof val === 'string' ? val.trim() : '');

  const LoginHandler = (e) => {
    e.preventDefault();
    const emailTrimmed = safeTrim(email).toLowerCase();
    const pwdTrimmed = safeTrim(password);

    if (!emailTrimmed || !pwdTrimmed) {
      toast.error('Please enter both email and password');
      return;
    }

    const allAdmins = Array.isArray(data?.App) ? data.App : [];

    // Admin login check
    const admin = allAdmins.find(
      (a) =>
        safeTrim(a.Email).toLowerCase() === emailTrimmed &&
        safeTrim(a.password) === pwdTrimmed
    );

    if (admin) {
      if (admin.loginStatus) {
        toast.error('You are already logged in as Admin');
        return;
      }
      setCurrentAdmin({ ...admin, loginStatus: true });
      setData((prev) => ({
        ...prev,
        App: prev.App.map((a) =>
          a.id === admin.id ? { ...a, loginStatus: true } : a
        ),
      }));
      toast.loading('Logging in...');
      setTimeout(() => {
        toast.success('Admin logged in successfully!');
        setEmail('');
        setPassword('');
        navigate('/admindashboard');
      }, 700);
      return;
    }

    // Employee login check
    let found = false;
    allAdmins.forEach((a) => {
      a.Employees?.forEach((u) => {
        if (
          safeTrim(u.Email).toLowerCase() === emailTrimmed &&
          safeTrim(u.password) === pwdTrimmed
        ) {
          found = true;
          if (u.loginStatus) {
            toast.error('You are already logged in as Employee');
          } else {
            setCurrentUser({ ...u, loginStatus: true });
            setData((prev) => ({
              ...prev,
              App: prev.App.map((adm) => ({
                ...adm,
                Employees: adm.Employees.map((emp) =>
                  emp.id === u.id ? { ...emp, loginStatus: true } : emp
                ),
              })),
            }));
            toast.loading('Logging in...');
            setTimeout(() => {
              toast.success('Employee logged in successfully!');
              setEmail('');
              setPassword('');
              navigate('/employedashboard');
            }, 700);
          }
        }
      });
    });

    if (!admin && !found) {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="signup-container w-full h-screen flex items-center justify-center p-4">
      <div className="h-max w-full max-w-3xl bg-navbar p-4 rounded-lg border-2 border-border">
        <form className="w-full h-full" onSubmit={LoginHandler}>
          <fieldset className="h-full border-2 border-border rounded-md p-2">
            <legend className="p-2 text-text-primary text-2xl">Login</legend>
            <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col items-start justify-center gap-0.5 mb-2.5">
                <label htmlFor="email" className="text-text-primary">Email :</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="Email"
                  type="email"
                  placeholder="Email"
                  className="w-full border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition rounded-md p-2 text-text-secondary"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-0.5 mt-6 mb-2.5">
                <label htmlFor="password" className="text-text-primary">Password :</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="Password"
                  type="password"
                  placeholder="Password"
                  className="w-full border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition rounded-md p-2 text-text-secondary"
                />
              </div>
            </div>
            <div className="w-full sm:flex sm:justify-center">
              <button type="submit" className="w-full max-w-2xs sm:item-center text-Semibold bg-primary text-text-primary">
                Login
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;
