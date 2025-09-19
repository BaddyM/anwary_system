import React, { createContext, useContext, useState, useEffect } from "react";
import { useUserLoginMutation } from "@/api/apiSlice";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy users data
// const DUMMY_USERS = [
//   {
//     id: '1',
//     email: 'admin@example.com',
//     password: 'admin123',
//     name: 'John Admin',
//     role: 'Administrator'
//   },
//   {
//     id: '2',
//     email: 'user@example.com',
//     password: 'user123',
//     name: 'Jane User',
//     role: 'User'
//   },
//   {
//     id: '3',
//     email: 'demo@example.com',
//     password: 'demo123',
//     name: 'Demo User',
//     role: 'Demo'
//   }
// ];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userLogin] = useUserLoginMutation();

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("auth-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    const res = await userLogin({ email, password });

    if (!res.error) {
      const foundUser = res.data.data;
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("auth-user", JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth-user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
