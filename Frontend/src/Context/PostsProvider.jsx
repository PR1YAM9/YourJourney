import { createContext, useContext, useState } from "react";

const postContext = createContext();
function PostsProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: "something unique",
      title: "Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sunt ut molestias ipsam esse provident ducimus. Facilis in molestiae expedita incidunt!",
      tags: ["lorem", "ipsum", "dolet"],
      author: "example@email.com",
      likes: 10,
      image: "https://source.unsplash.com/random",
    },
  ]);

  function addPost(newpost) {
    setPosts((p) => [...p, newpost]);
  }

  // function UpdateLikes(likes, id) {
  //   setPosts((posts) =>
  //     posts.map((post) => {
  //       if (post.id === id) {
  //         post.likes = likes;
  //       }
  //     }),
  //   );
  // }

  function incrementLikes(id) {
    setPosts((posts) => {
      const p = posts.find((p) => p.id === id);
      p.likes = p.likes + 1;
      return posts;
    });
  }

  function decrementLikes(id) {
    setPosts((posts) => {
      const p = posts.find((p) => p.id === id);
      if (p.likes > 0) {
        p.likes = p.likes - 1;
      }
      return posts;
    });
  }

  return (
    <postContext.Provider
      value={{
        posts,
        addPost,
        incrementLikes,
        decrementLikes,
      }}
    >
      {children}
    </postContext.Provider>
  );
}

export function usePostsContext() {
  const x = useContext(postContext);
  return x;
}

export default PostsProvider;
