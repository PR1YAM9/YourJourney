function FormLabel({ children, htmlFor }) {
  return (
    <label
      className="w-20 text-sm font-semibold uppercase tracking-wide"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default FormLabel;
