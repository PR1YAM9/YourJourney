import { usePostsContext } from "../../Context/PostsProvider";
import Post from "./Post";

function AllPosts() {
  const { posts } = usePostsContext();
  console.log(posts);

  return (
    <ul className="flex flex-col items-center gap-10">
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </ul>
  );
}

export default AllPosts;
