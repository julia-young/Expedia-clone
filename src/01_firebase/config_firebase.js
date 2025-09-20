// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAem4qrql00bMKfo52K4JzX5M8YXcvaalI",
  authDomain: "expedia-clone-c658b.firebaseapp.com",
  projectId: "expedia-clone-c658b",
  storageBucket: "expedia-clone-c658b.firebasestorage.app",
  messagingSenderId: "28470156977",
  appId: "1:28470156977:web:83c417c8de563643840c90",
  measurementId: "G-V46H2WLK8J"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app;