import { Toaster } from "react-hot-toast";
  import { Header,Footer } from "./imports";
  import { Outlet } from "react-router";
  import  './index.css'
function Layout() {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
      import { Toaster } from "react-hot-toast";

<Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
    className: `
      bg-surface
      text-text-primary 
      border border-[var(--color-border)]
      rounded-xl px-5 py-4
      shadow-[0_8px_30px_rgba(0,0,0,0.5)]
      font-medium backdrop-blur-md
      transition-all duration-300
      hover:scale-[1.015]
    `,
    success: {
      icon: '✅',
      className: `
        border-l-4 border-[var(--color-success)]
        bg-[var(--color-surface)]
      `,
    },
    error: {
      icon: '❌',
      className: `
        border-l-4 border-[var(--color-error)]
        bg-[var(--color-surface)]
      `,
    },
    loading: {
      icon: '⏳',
      className: `
        border-l-4 border-[var(--color-primary)]
        bg-[var(--color-surface)]
      `,
    },
  }}
/>



    </div>
  );
}

export default Layout;
