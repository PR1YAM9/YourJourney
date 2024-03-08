function Button({ children, type, onClick }) {
  const style = {
    base: "rounded-md bg-cyan-900 px-8  text-white py-2 text-sm font-semibold uppercase tracking-wider ",
    primary:
      "px-4 py-2 bg-cyan-500 text-sm uppercase border-cyan-700 font-semibold text-cyan-900 tracking-wider ",
  };

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
