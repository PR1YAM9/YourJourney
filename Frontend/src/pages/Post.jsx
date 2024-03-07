function Post() {
  return (
    <section className="max-w-96 border p-4 ">
      <div className="grid grid-cols-[3.5rem,1fr] mb-4 gap-2">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user-profile"
        />
        <div>
          <h1 className="text-base italic font-serif">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-sm text-stone-500 flex items-center justify-between">
            <span>time</span>
            <span>date</span>
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ut
        molestias ipsam esse provident ducimus. Facilis in molestiae expedita
        incidunt!
      </p>
    </section>
  );
}

export default Post;
