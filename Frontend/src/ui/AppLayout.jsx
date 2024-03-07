import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function AppLayout() {
  return (
    <div className="flex h-screen  ">
      <Navbar />
      <main className="p-8 grow bg-cyan-100 flex">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
