import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLmvijDDvh1QU53zARXv_owiKpkM2DUjQ",
  authDomain: "well-fit-app1.firebaseapp.com",
  projectId: "well-fit-app1",
  storageBucket: "well-fit-app1.firebasestorage.app",
  messagingSenderId: "640436636126",
  appId: "1:640436636126:web:ad1fcdba68b24da2ceb54f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default firebaseConfig;
