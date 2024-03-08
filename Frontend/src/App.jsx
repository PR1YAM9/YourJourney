import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Post from "./features/feed/Post";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import CreatePost from "./features/feed/CreatePost";
import PostsProvider from "./Context/PostsProvider";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "/app",
        element: <Navigate to="feed" />,
      },
      {
        path: "feed",
        children: [
          {
            path: "",
            element: <Feed />,
          },
          {
            path: ":postID",
            element: <Post />,
          },
        ],
      },
      {
        path: "createPost",
        element: <CreatePost />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App({ children }) {
  return (
    <PostsProvider>
      <RouterProvider router={Router}>{children}</RouterProvider>
    </PostsProvider>
  );
}

export default App;
