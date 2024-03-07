import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col  h-screen items-center justify-center gap-8">
      <h1 className="text-5xl font-serif font-bold tracking-wider">
        Your Journey
      </h1>
      <NavLink
        to="/app"
        className="inline-block py-2 px-4 
      rounded-md bg-red-500 text-cyan-100"
      >
        Start
      </NavLink>
    </section>
  );
}

export default Home;
