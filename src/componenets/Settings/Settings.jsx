import React from "react";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import Delete from "./Delete";
import { useAuthContext } from "../../context/AuthContex";

const Settings = () => {
  const { currentadmin ,currentuser } = useAuthContext();

  const isLoggedIn = currentadmin?.loginStatus;
  const userLogedIn = currentuser?.loginStatus;
  return (
    <div>
      {isLoggedIn || userLogedIn ? (
        <div className="max-w-4xl mx-auto py-10 px-6 text-[var(--color-text-primary)] font-sans">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Settings</h2>

          <UpdateProfile />
          <ChangePassword />

          {/* Preferences Section */}
          <section className="bg-[var(--color-surface)] p-6 md:p-8 rounded-2xl border border-[var(--color-border)] mb-8 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Preferences</h3>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-text-secondary)]">Enable Dark Mode</span>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <div className="toggle-bg bg-[var(--color-border-secondary)] block w-12 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
              </div>
            </div>
          </section>

          {/* Danger Zone */}
          <Delete />
        </div>
      ) : (
        <div className="w-full h-screen bg-bg flex items-center justify-center">
          <h2>Please Login First</h2>
        </div>
      )}
    </div>
  );
};

export default Settings;
