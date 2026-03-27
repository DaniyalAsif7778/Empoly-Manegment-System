import React from "react";
import { Navigate } from "react-router";
import { NavLink } from "react-router";
export default function AdminEmployees() {
  return (
    <div className="p-4 text-[var(--color-text-primary)]">
      AdminEmployees page
      <NavLink to="/DashBoard/EmployeeSchedule">emp</NavLink>
    </div>
  );
}
