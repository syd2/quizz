// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3t7_NmmhHKeHPF9LmpztJeDCjNFlj8vM",
  authDomain: "test-app-cb2dd.firebaseapp.com",
  projectId: "test-app-cb2dd",
  storageBucket: "test-app-cb2dd.appspot.com",
  messagingSenderId: "333378246295",
  appId: "1:333378246295:web:d992115a3544dc64f8fbd2",
  measurementId: "G-0CBL636GQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
