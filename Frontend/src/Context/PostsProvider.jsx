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
    },
  ]);

  function addPost(newpost) {
    setPosts((p) => [...p, newpost]);
  }

  function incrementLikes(id) {
    setPosts((posts) =>
      posts.map((post) => {
        if (post.id === id) post.likes = post.likes + 1;
      }),
    );
  }

  function decrementLikes(id) {
    setPosts((posts) =>
      posts.map((post) => {
        if (post.id === id && post.likes !== 0) {
          post.likes = post.likes - 1;
        }
      }),
    );
  }

  return (
    <postContext.Provider
      value={{ posts, addPost, incrementLikes, decrementLikes }}
    >
      {children}
    </postContext.Provider>
  );
}

export default PostsProvider;
