// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTZ2C4TFyAZ4vPuSYXabB3twAVWFvq1QM",
  authDomain: "namma-auto-cf5f8.firebaseapp.com",
  projectId: "namma-auto-cf5f8",
  storageBucket: "namma-auto-cf5f8.appspot.com",
  messagingSenderId: "388056479701",
  appId: "1:388056479701:web:43f6220095a8ada4826f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};