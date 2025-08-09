import React from 'react'
import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContex';
function ChangePassword() {

  const [newpassword , setNewPassword] = useState();
  const [conformpassword , setConformPassword] = useState();
  const {updateAdmin,currentadmin, updateUser,currentuser}=useAuthContext();
     const passwordChanger =()=>{
      if (currentadmin.loginStatus === true) {
        if (newpassword === conformpassword) {
          updateAdmin(undefined, undefined , newpassword)
        }else{
          alert("please conform password corectly")
        }
      }
      if ( currentuser.loginStatus === true) {
        if (newpassword === conformpassword) {
           updateUser( undefined , newpassword)
        }else{
          alert("please conform password corectly")
        }
      }
     setConformPassword("")
     setNewPassword("")
     }
  return (
    <section className="bg-[var(--color-surface)] p-6 md:p-8 rounded-2xl border border-[var(--color-border)] mb-8 shadow-md">
    <h3 className="text-xl font-semibold mb-6">Change Password</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="password"
        value={newpassword}
        onChange={(e)=>setNewPassword(e.target.value)}
        placeholder="New Password"
        className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
      />
      <input
        type="password"
        value={conformpassword}
        onChange={(e)=> setConformPassword(e.target.value)}
        placeholder="Confirm Password"
        className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
      />
    </div>

    <div className="mt-6 flex justify-end">
      <button onClick={()=>{
        passwordChanger();
      }} className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-xl font-medium transition">
        Update Password
      </button>
    </div>
  </section>

  )
}

export default ChangePassword
