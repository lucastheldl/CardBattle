import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { app } from "../firebase/config";

const auth = getAuth(app);

interface AuthContextType {
  user: User | null;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

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
  function logOut() {
    signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {loading ? <div>Carregando...</div> : children}
    </AuthContext.Provider>
  );
}
