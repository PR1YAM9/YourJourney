import { useState } from "react";
import { HiCog, HiHome } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import NavbarListItem from "./NavbarListItem";
import NavbarLink from "./NavbarLink";

function Navbar() {
  const [expandNav, setExpandNav] = useState(false);
  return (
    <header className="ease flex flex-col justify-start border bg-slate-800 px-4 py-4 text-white opacity-90 transition-all duration-500">
      <button
        onClick={() => setExpandNav((p) => !p)}
        className="text-left text-lg"
      >
        {!expandNav ? "→" : "←"}
      </button>
      <nav>
        <ul className="mt-8 flex flex-col gap-4 ">
          <NavbarListItem>
            <NavbarLink to="/">
              <span className="text-lg">
                <HiHome />
              </span>
              {expandNav && <span>Home</span>}
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to="feed">
              <span className="text-lg">
                <MdOutlineTravelExplore />
              </span>
              {expandNav && <span>Explore</span>}
            </NavbarLink>
          </NavbarListItem>

          <NavbarListItem>
            <NavbarLink to="createPost">
              <span className="text-lg">
                <IoCreate />
              </span>
              {expandNav && <span>Create</span>}
            </NavbarLink>
          </NavbarListItem>

          <NavbarListItem>
            <NavbarLink to="profile">
              <span className="text-lg">
                <CgProfile />
              </span>
              {expandNav && <span>Profile</span>}
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to="settings">
              <span className="text-xl">
                <HiCog />
              </span>
              {expandNav && <span>Settings</span>}
            </NavbarLink>
          </NavbarListItem>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
