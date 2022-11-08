import { initializeApp } from "Firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7P0fBczQYIHWD5uudbFQmB1w_A1qLLv8",
  authDomain: "exploresemarang-donasi.firebaseapp.com",
  projectId: "exploresemarang-donasi",
  storageBucket: "exploresemarang-donasi.appspot.com",
  messagingSenderId: "469793113190",
  appId: "1:469793113190:web:28f8515847dde18aa859a7",
  measurementId: "G-TR3839JHG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = firebase.firestore();
