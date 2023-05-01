// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-1G6HF7AJGXV_aDq6A5mJV0KHcmgIuTU",
  authDomain: "jm-recipes.firebaseapp.com",
  projectId: "jm-recipes",
  storageBucket: "jm-recipes.appspot.com",
  messagingSenderId: "425048222417",
  appId: "1:425048222417:web:ae8632685de76e131533f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;