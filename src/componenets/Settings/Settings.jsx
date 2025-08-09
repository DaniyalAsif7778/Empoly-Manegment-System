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
