// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4wgrs2AO2MA4puPC0F-tiZkesbpBfokU",
  authDomain: "interai-c62e8.firebaseapp.com",
  projectId: "interai-c62e8",
  storageBucket: "interai-c62e8.firebasestorage.app",
  messagingSenderId: "389482869583",
  appId: "1:389482869583:web:fb322764625f491bed8b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
