// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUTPWBc8eA_26qVylO0us3_hTbPANzeuk",
  authDomain: "code-reviewer-28653.firebaseapp.com",
  projectId: "code-reviewer-28653",
  storageBucket: "code-reviewer-28653.firebasestorage.app",
  messagingSenderId: "826206689616",
  appId: "1:826206689616:web:5c6cbe9884b0049e51b455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication instance
export const auth = getAuth(app);
