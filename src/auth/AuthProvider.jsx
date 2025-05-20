import React, { createContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const userData = [
    {
      id: 1,
      name: "Aloe Vera",
      image: "https://i.ibb.co/4fY0J2M/logo.jpg",
      wateringDay: "Monday",
    },
    {
      id: 2,
      name: "Snake Plant",
      image: "https://i.ibb.co/4fY0J2M/logo.jpg",
      wateringDay: "Tuesday",
    },
  ];
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
