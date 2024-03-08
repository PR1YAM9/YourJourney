function Tag({ children }) {
  return (
    <li className="flex items-center gap-2 rounded-md border border-cyan-500 px-2 py-1 font-serif text-xs italic text-stone-500">
      {children}
    </li>
  );
}

export default Tag;
