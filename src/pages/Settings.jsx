import React from "react";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "../componenets/ChangePassword";
import Delete from "../componenets/Delete";
 import { useSelector } from "react-redux"; 
const Settings = () => {
 
const currentUser = useSelector((state)=> state.currentUser.user)

  const isLoggedIn = currentUser?.loginStatus;
 
  return (
    <div>
      {isLoggedIn ? (
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
