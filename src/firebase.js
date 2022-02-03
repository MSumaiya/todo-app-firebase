// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKeoN8QX3HldQDKCb7EHk-qjAVqOIiLCM",
  authDomain: "todo-app-firebase-5a85b.firebaseapp.com",
  databaseURL: "https://todo-app-firebase-5a85b-default-rtdb.firebaseio.com",
  projectId: "todo-app-firebase-5a85b",
  storageBucket: "todo-app-firebase-5a85b.appspot.com",
  messagingSenderId: "267457493349",
  appId: "1:267457493349:web:f1eb267479962ec3c4098c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
