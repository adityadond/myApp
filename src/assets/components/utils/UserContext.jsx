import { createContext } from "react";

const UserContext = createContext({
  user: {
    user: "Aditya",
    email: "aditya@gmail.com",
  },
});

export default UserContext;
