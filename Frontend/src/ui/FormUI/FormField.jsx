function FormField({ children, type }) {
  const style = {
    primary: "flex w-full flex-col items-center gap-4 p-4 sm:flex-row",
    secondary: "flex w-full flex-colw  gap-4 p-4  sm:flex-row",
  };
  return <div className={style[type]}>{children}</div>;
}

export default FormField;
