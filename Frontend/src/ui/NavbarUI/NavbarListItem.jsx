function NavbarListItem({ children }) {
  return (
    <li className="block px-4 py-2 hover:bg-slate-50 hover:text-black">
      {children}
    </li>
  );
}

export default NavbarListItem;
