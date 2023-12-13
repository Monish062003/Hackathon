// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCfw5cLJeAzVUOMViBuRaMnFjLhOS9nS8",
    authDomain: "auth1-38e16.firebaseapp.com",
    projectId: "auth1-38e16",
    storageBucket: "auth1-38e16.appspot.com",
    messagingSenderId: "433874341051",
    appId: "1:433874341051:web:660e540af762e96ea5ad9e",
    measurementId: "G-PVMXW4VYEX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = new getAuth(app);

export {auth,provider}