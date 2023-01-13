import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKjeu_ts0mO4JkVBONPxk4HvnuAgC7aqU",
  authDomain: "chat-99188.firebaseapp.com",
  projectId: "chat-99188",
  storageBucket: "chat-99188.appspot.com",
  messagingSenderId: "317040768788",
  appId: "1:317040768788:web:d97fe2ad399d0f00853401"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();