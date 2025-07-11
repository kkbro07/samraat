// src/lib/firebase/config.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAEtjKvTO-Qy1d_IFnstZ-7hGy_FXg9hlU",
  authDomain: "samarth-d9157.firebaseapp.com",
  projectId: "samarth-d9157",
  storageBucket: "samarth-d9157.firebasestorage.app",
  messagingSenderId: "280457001214",
  appId: "1:280457001214:web:ac1b1790e11069152d0daf",
  measurementId: "G-ZTR5YRC2N3"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics if running in the browser
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

// Initialize Cloud Messaging if running in the browser
if (typeof window !== 'undefined') {
  getMessaging(app);
}

export { app };
