function NavbarListItem({ children }) {
  return (
    <li className="px-4 hover:bg-slate-50 py-2 hover:text-black ">
      {children}
    </li>
  );
}

export default NavbarListItem;
