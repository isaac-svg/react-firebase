
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import  {getStorage} from "firebase/storage" 
const firebaseConfig = {
  apiKey: "AIzaSyATX1Srs4nL38IZn4XK6f9fD-SFzDxr43I",
  authDomain: "fir-course-57255.firebaseapp.com",
  projectId: "fir-course-57255",
  storageBucket: "fir-course-57255.appspot.com",
  messagingSenderId: "1012756357378",
  appId: "1:1012756357378:web:c3f61426fe6b3ba46da21b",
  measurementId: "G-EB944PE6NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export const googleProvider =  new GoogleAuthProvider()
export const db =  getFirestore(app);
export const storage  = getStorage(app)