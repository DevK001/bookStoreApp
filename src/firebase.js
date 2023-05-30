import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKe242PRrGf0RRfxi70Xc2ehXvqwMMqiI",
  authDomain: "login-signup-af07e.firebaseapp.com",
  projectId: "login-signup-af07e",
  storageBucket: "login-signup-af07e.appspot.com",
  messagingSenderId: "359204689620",
  appId: "1:359204689620:web:284ff48b77008dce738d41",
  measurementId: "G-79J71HG1QL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
