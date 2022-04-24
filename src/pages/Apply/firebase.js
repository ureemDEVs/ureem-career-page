// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClcg6iwRwy-4A4ex2Q26j7Sna1n3tCf0w",
  authDomain: "resumedb-376dc.firebaseapp.com",
  projectId: "resumedb-376dc",
  storageBucket: "resumedb-376dc.appspot.com",
  messagingSenderId: "191595895214",
  appId: "1:191595895214:web:12371d281ef83d46d0503f",
  measurementId: "G-YXBFRQKY2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export{app, storage}