import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firebaseConfig";

export const saveDailySteps = async (steps) => {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(doc(db, "steps", user.uid), {
    steps: steps,
    updatedAt: new Date(),
  });
};

export const loadDailySteps = async () => {
  const user = auth.currentUser;
  if (!user) return 0;

  const snapshot = await getDoc(doc(db, "steps", user.uid));
  if (snapshot.exists()) {
    return snapshot.data().steps;
  }
  return 0;
};
