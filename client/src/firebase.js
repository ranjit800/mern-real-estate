// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-a8cf6.firebaseapp.com",
  projectId: "mern-realestate-a8cf6",
  storageBucket: "mern-realestate-a8cf6.firebasestorage.app",
  messagingSenderId: "388035928520",
  appId: "1:388035928520:web:6d3bbeb7428930e8e120fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);