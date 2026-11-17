// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZBRiK0xV2pNsppbxZhgtW7f8WUs-YvRw",
  authDomain: "cstp2107-vernaculargenerator.firebaseapp.com",
  projectId: "cstp2107-vernaculargenerator",
  storageBucket: "cstp2107-vernaculargenerator.firebasestorage.app",
  messagingSenderId: "1028058897494",
  appId: "1:1028058897494:web:f56da161274e916f95aff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);