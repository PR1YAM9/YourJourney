function FormField({ children }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-4 sm:flex-row">
      {children}
    </div>
  );
}

export default FormField;
