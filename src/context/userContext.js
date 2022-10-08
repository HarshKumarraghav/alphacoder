import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Token: token,
        },
      };

      const response = await fetch("/api/users/me", requestOptions);

      if (!response.ok) {
        setToken(undefined);
      }
      localStorage.setItem("access_token", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {children}
    </UserContext.Provider>
  );
};
export function useUserAuth() {
  return useContext(UserContext);
}
