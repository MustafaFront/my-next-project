// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging"; // لو محتاجه

// Firebase config (نفس اللي كتبته انت)
const firebaseConfig = {
  apiKey: "AIzaSyDGd46aygR0tw-_i-LX6CAn_vq5fvuqs6g",
  authDomain: "fir-app-dd59e.firebaseapp.com",
  projectId: "fir-app-dd59e",
  storageBucket: "fir-app-dd59e.firebasestorage.app",
  messagingSenderId: "1012372477750",
  appId: "1:1012372477750:web:2755a8da377c01daf00597"
};

// نتاكد اننا مش بنعمل init أكتر من مرة
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// نجهز الخدمات
const db = getFirestore(app); // Firestore
const auth = getAuth(app);     // Auth
const messaging = getMessaging(app); // Messaging (لو محتاجه)

export { db, auth, messaging };
