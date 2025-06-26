// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeJ4nO7Q58IT7GbdFPCl1pSYBL-QDc7rI",
  authDomain: "netflixgpt-89909.firebaseapp.com",
  projectId: "netflixgpt-89909",
  storageBucket: "netflixgpt-89909.firebasestorage.app",
  messagingSenderId: "584942934966",
  appId: "1:584942934966:web:a3cc1d815a95234be63f17",
  measurementId: "G-N685YBL0GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth();