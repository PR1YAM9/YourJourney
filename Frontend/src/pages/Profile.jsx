import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { usePostsContext } from "../Context/PostsProvider";
import Post from "../features/feed/Post";
function Profile() {
  const { posts } = usePostsContext();
  return (
    <section className="mx-auto flex w-full max-w-[700px] flex-col gap-4">
      <header className="h-60 w-full overflow-y-scroll rounded-md shadow-md shadow-white">
        <img
          src="https://source.unsplash.com/random"
          alt="background-img"
          className="aspect-auto w-full  rounded-md  border-none "
        />
      </header>
      <header className="flex flex-col gap-4  min-[400px]:flex-row">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile-pic"
          className="aspect-square w-16 rounded-md shadow-md shadow-white min-[400px]:w-20 sm:w-40"
        />
        <div className="flex w-full flex-col  rounded-xl border-4 border-dashed px-4 py-2">
          <div>
            <h4 className="min-[400px]:text-md  font-serif text-sm font-semibold italic tracking-wide text-stone-500">
              Username
            </h4>
            <p className="my-2 text-sm">Title</p>
          </div>
          <div>
            <ul className="flex gap-4 text-lg ">
              <li>
                <NavLink>
                  <FaTwitter />
                </NavLink>
                <span aria-hidden={true} className="sr-only">
                  Twitter
                </span>
              </li>
              <li>
                <NavLink>
                  <FaLinkedin />
                </NavLink>
                <span aria-hidden={true} className="sr-only">
                  LinkedIn
                </span>
              </li>
              <li>
                <NavLink>
                  <FaGithub />
                </NavLink>
                <span aria-hidden={true} className="sr-only">
                  Github
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        <p className="p-2 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero
          ratione numquam, a nisi qui necessitatibus saepe soluta neque
          quibusdam ut laboriosam dolorum quidem veniam assumenda ab similique
          eligendi aperiam.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <h3 className="rounded-md border-4 p-4 shadow-lg  transition-all  ease-linear hover:scale-105  ">
            <span className=" font-mono text-lg font-bold uppercase tracking-wide">
              Work Experience
            </span>
            <span>
              <ul className="list-decimal px-8 py-2 font-mono text-sm font-thin italic text-stone-500">
                <li>ABC</li>
                <li>XYZ</li>
              </ul>
            </span>
          </h3>
          <h3 className="rounded-md border-4 p-4 shadow-lg transition-all ease-linear hover:scale-105 ">
            <span className="font-mono text-lg font-bold uppercase tracking-wide">
              Education
            </span>
            <span>
              <ul className="list-decimal px-8 py-2 font-mono text-sm italic text-stone-500">
                <li>ABC</li>
                <li>XYZ</li>
              </ul>
            </span>
          </h3>
        </div>
      </div>
      <div className="py-8">
        <ul>
          {posts.map((post) => {
            return <Post key="post.id" type="short" post={post} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Profile;
