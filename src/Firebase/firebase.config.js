// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB1J-r2lcO9anXrzdkdb_3hY_uIHFrj74",
  authDomain: "jm-recipest.firebaseapp.com",
  projectId: "jm-recipest",
  storageBucket: "jm-recipest.appspot.com",
  messagingSenderId: "891756402521",
  appId: "1:891756402521:web:9941ae56bda51a93d71e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;