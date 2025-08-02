import React from 'react'

function Delete() {
  return (
    <section className="bg-[var(--color-surface)] p-6 md:p-8 rounded-2xl border border-[var(--color-border)] shadow-md">
    <h3 className="text-xl font-semibold mb-6 text-red-400">Danger Zone</h3>
    <p className="text-[var(--color-text-secondary)] mb-4">
      Deleting your account is permanent and cannot be undone.
    </p>
    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition">
      Delete Account
    </button>
  </section>
  )
}

export default Delete
