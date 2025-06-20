                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM9M6wWl8LII8jdNLflC2znE2ibN6AAXc",
  authDomain: "dashboard-546af.firebaseapp.com",
  projectId: "dashboard-546af",
  storageBucket: "dashboard-546af.firebasestorage.app",
  messagingSenderId: "783803535136",
  appId: "1:783803535136:web:33a3c1555b4d1fcd331145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;