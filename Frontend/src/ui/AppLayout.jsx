import { Outlet } from "react-router-dom";
import Navbar from "./NavbarUI/Navbar";
function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[auto,1fr] bg-cyan-100">
      <Navbar />

      <main className="overflow-y-auto px-4">
        <header className=" border-b-2 border-cyan-900 p-4 backdrop:blur-lg ">
          <h2 className="mx-auto space-x-4 text-center font-serif font-extrabold uppercase tracking-widest">
            <span>Your</span>
            <span>Journey</span>
          </h2>
        </header>
        <div className="mt-8 flex flex-col gap-4  p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
