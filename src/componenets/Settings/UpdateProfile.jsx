import React from 'react'
import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContex';
function UpdateProfile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { updateAdmin, currentadmin } = useAuthContext();

  const credentialUpdateHandler = () => {
    if (currentadmin.loginStatus === true) {
      updateAdmin(name, email);
    } else {
      alert("please login first")
    }
    setName("")
    setEmail("")
  }


  return (

    <section className="bg-[var(--color-surface)] p-6 md:p-8 rounded-2xl border border-[var(--color-border)] mb-8 shadow-md">
      <h3 className="text-xl font-semibold mb-6">Update Profile</h3>



     { currentadmin.loginStatus ? (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          value={name}

          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Full Name"
          className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
        />
        <input
          type="email"
          value={email}

          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Email Address"
          className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
        />
      </div> ):(<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          type="text"
          value={name}

          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder=" Old Name"
          className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
        />
        <input
          type="text"
          value={name}

          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Full Name"
          className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
        />
      </div>)
}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            value={name}

            onChange={(e)=>{
               setName(e.target.value)
            }}
            placeholder="Full Name"
            className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          />
          <input
            type="email"
            value={email}

            onChange={(e)=>{
               setEmail(e.target.value)
           }}
            placeholder="Email Address"
            className="bg-[var(--color-navbar)] text-white px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          />
        </div> */}

      <div className="mt-6 flex justify-end">
        <button onClick={() => {
          credentialUpdateHandler();
        }} className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-xl font-medium transition">
          Save Changes
        </button>
      </div>
    </section>

  )
}

export default UpdateProfile
