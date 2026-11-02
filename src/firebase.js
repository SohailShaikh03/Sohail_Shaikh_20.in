import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const clean = (val) => (val || "").toString().trim().replace(/^[",']+|[",',]+$/g, "").trim();

const firebaseConfig = {
  apiKey: clean(import.meta.env.VITE_FIREBASE_API_KEY) || "AIzaSyCuJ0r3OnDY0Rk4GnqmsCgDjA65Tv-5FZE",
  authDomain: clean(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN) || "sohail-portfolio-25f9f.firebaseapp.com",
  projectId: clean(import.meta.env.VITE_FIREBASE_PROJECT_ID) || "sohail-portfolio-25f9f",
  storageBucket: clean(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET) || "sohail-portfolio-25f9f.firebasestorage.app",
  messagingSenderId: clean(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID) || "850357509625",
  appId: clean(import.meta.env.VITE_FIREBASE_APP_ID) || "1:850357509625:web:176af255aa178eecdf3128"
};

// Check if credentials are present and valid
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes("YOUR_")
);

let dbInstance = null;
if (isFirebaseConfigured) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    dbInstance = getFirestore(app);
  } catch (err) {
    console.error("Firebase initialization failed:", err);
  }
}

export const db = dbInstance;
