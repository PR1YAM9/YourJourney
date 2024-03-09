import { createContext, useState } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    email: "john.doe@example.com",
    username: "johndoe",
    status: "",
    lastLoggedIn: "",
    city: "New York",
    bio: {
      workExperience: [
        { title: "Software Developer at XYZ Corp", from: "2019", to: "2023" },
      ],
      education: [
        {
          Institute: "XYZ Institute",
          Degree: "BTECH",
          PassingYear: "2020",
        },
      ],
      socials: [
        {
          platform: "LinkedIn",
          link: "https://www.linkedin.com/in/johndoe",
        },
        {
          platform: "Github",
          link: "https://github.com/johndoe",
        },
        {
          platform: "Twitter",
          link: "https://www.twitter.com/johndoe",
        },
      ],
      profilePic:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backgroundPic:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });

  function createUser(user) {
    setUser(user);
  }

  return (
    <userContext.Provider value={{ user, createUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
