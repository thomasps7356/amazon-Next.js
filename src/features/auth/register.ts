import { auth, db } from "configs/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const register = async (name: string, email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  const photoURL = `https://i.pravatar.cc/150?u=${email}`;

  if (!auth.currentUser) {
    throw new Error("Problem occurred");
  }

  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL,
  });

  await setDoc(doc(db, "users", email), {
    name,
    email,
    photoURL,
  });

  if (!res.user?.emailVerified) {
    sendEmailVerification(auth.currentUser);

    throw new Error(
      "Verify your email to complete registration. Check your inbox/spam for verification email."
    );
  }

  return {
    name: res.user?.displayName,
    email: res.user?.email,
    image: res.user?.photoURL,
  };
};

export default register;
