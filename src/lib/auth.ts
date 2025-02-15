import { createContext, useContext } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: "free" | "premium" | "enterprise";
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  upgradeSubscription: (plan: "premium" | "enterprise") => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
