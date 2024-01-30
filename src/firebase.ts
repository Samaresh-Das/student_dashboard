// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "student-dashboard-bf0b4.firebaseapp.com",
  databaseURL:
    "https://student-dashboard-bf0b4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-dashboard-bf0b4",
  storageBucket: "student-dashboard-bf0b4.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
