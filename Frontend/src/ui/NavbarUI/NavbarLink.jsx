import { NavLink } from "react-router-dom";
function NavbarLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className=" flex items-center gap-4 transition-all duration-100 ease-linear"
    >
      {children}
    </NavLink>
  );
}

export default NavbarLink;
