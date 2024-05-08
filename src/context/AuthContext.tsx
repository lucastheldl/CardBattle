import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { app, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const auth = getAuth(app);

interface UserFile {
  ownedCards: number[];
  money: number;
  role: "ADMIN | USER";
}

interface AuthContextType {
  user: User | null;
  userFile: UserFile | null;
  fetchUserFile: () => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userFile, setUserFile] = useState<UserFile | null>(null);
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
  async function fetchUserFile() {
    if (!user) {
      return;
    }
    const userDocRef = doc(db, "users", user.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      console.log("user exists");
    }
    const userData = userDocSnapshot.data() as UserFile;
    setUserFile(userData);
  }

  return (
    <AuthContext.Provider value={{ user, logOut, fetchUserFile, userFile }}>
      {loading ? <div>Carregando...</div> : children}
    </AuthContext.Provider>
  );
}
