import { doc, getDoc, setDoc } from "firebase/firestore";
import { app, db } from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    const userDocRef = doc(db, "users", result.user.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      console.log("user exists");
    } else {
      await setDoc(userDocRef, {
        money: 300,
      });
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
