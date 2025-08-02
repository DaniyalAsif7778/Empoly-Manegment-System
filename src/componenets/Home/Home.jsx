import React from "react";
import Settings from "../Settings/Settings";

const Home = () => {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text-primary)] font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          EMPLO<span className="text-[var(--color-primary)]">MANAGE</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl mb-6">
          Efficiently manage your employees, tasks, and team performance – all in one place.
        </p>
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-xl text-lg font-medium transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-[var(--color-surface)] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-navbar)] p-6 rounded-xl border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-2">Task Management</h3>
              <p className="text-[var(--color-text-secondary)]">
                Assign, update, and track employee tasks in real-time.
              </p>
            </div>
            <div className="bg-[var(--color-navbar)] p-6 rounded-xl border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-2">Secure Access</h3>
              <p className="text-[var(--color-text-secondary)]">
                Role-based authentication to ensure data protection.
              </p>
            </div>
            <div className="bg-[var(--color-navbar)] p-6 rounded-xl border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-2">Detailed Reports</h3>
              <p className="text-[var(--color-text-secondary)]">
                Generate performance and attendance insights with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Smart Dashboard Preview</h2>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border-secondary)] rounded-xl p-10 md:p-20 shadow-lg">
            <div className="h-60 bg-[var(--color-navbar)] rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] text-lg italic">
              Dashboard UI Preview (Screenshot Placeholder)
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[var(--color-surface)] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-6">
          Join hundreds of teams already managing their employees smarter.
        </p>
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-xl text-lg font-medium transition">
          Start Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-navbar)] py-6 text-center text-[var(--color-text-secondary)] text-sm">
        © {new Date().getFullYear()} EMPLOMANAGE — Built with 💻 & 🧠
      </footer>
      
    </main>
  );
};

export default Home;
