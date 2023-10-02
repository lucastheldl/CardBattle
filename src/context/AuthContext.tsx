import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "../firebase/config";

const auth = getAuth(app);

export const AuthContext = createContext<User | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {loading ? <div>Carregando...</div> : children}
    </AuthContext.Provider>
  );
}
