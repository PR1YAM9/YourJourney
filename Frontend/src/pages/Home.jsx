import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="flex h-screen  flex-col items-center justify-center gap-8">
      <h1 className="font-serif text-5xl font-bold tracking-wider">
        Your Journey
      </h1>
      <NavLink
        to="/app"
        className="inline-block rounded-md bg-red-500 
      px-4 py-2 text-cyan-100"
      >
        Start
      </NavLink>
    </section>
  );
}

export default Home;
