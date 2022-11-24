// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAaZU1o5pmkvtanLz3KXPq3nj725WpkIM",
  authDomain: "beats-to-read.firebaseapp.com",
  projectId: "beats-to-read",
  storageBucket: "beats-to-read.appspot.com",
  messagingSenderId: "906008859983",
  appId: "1:906008859983:web:0c657e19b5bc3d2102213a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;