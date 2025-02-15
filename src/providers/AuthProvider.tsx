import { useState, useEffect } from "react";
import { AuthContext, User } from "@/lib/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token and validate
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        if (token) {
          // Validate token with backend
          // const user = await validateToken(token);
          // setUser(user);
        }
      } catch (error) {
        console.error("Auth error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Call your backend login API
      // const response = await loginApi(email, password);
      // setUser(response.user);
      // localStorage.setItem('auth_token', response.token);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      // Call your backend signup API
      // const response = await signupApi(email, password, name);
      // setUser(response.user);
      // localStorage.setItem('auth_token', response.token);
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const logout = async () => {
    localStorage.removeItem("auth_token");
    setUser(null);
  };

  const upgradeSubscription = async (plan: "premium" | "enterprise") => {
    try {
      // Call your backend upgrade API
      // const response = await upgradeApi(plan);
      // setUser({ ...user!, plan });
    } catch (error) {
      console.error("Upgrade error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        upgradeSubscription,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
