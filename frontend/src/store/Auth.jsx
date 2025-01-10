import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      userAuthentication();
    } else {
      setUser(null);
    }
  }, [token]);

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5689/users/currentUser", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Authentication error:", error.message);
      setUser(null);
    }
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
