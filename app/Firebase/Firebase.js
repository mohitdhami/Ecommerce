// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { DEFAULT_SANS_SERIF_FONT } from "next/dist/shared/lib/constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANp88V6YFg_hvSoMeK0FOCMsAoE0tWL14",
  authDomain: "ecommerce-4ccbd.firebaseapp.com",
  projectId: "ecommerce-4ccbd",
  storageBucket: "ecommerce-4ccbd.appspot.com",
  messagingSenderId: "733093096110",
  appId: "1:733093096110:web:a2623022d0dea23a1b9b3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

