// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLcJ9zMSC6i-PgSfwKzIjUdic5VXnvesI",
  authDomain: "genius-car-service-64651.firebaseapp.com",
  projectId: "genius-car-service-64651",
  storageBucket: "genius-car-service-64651.appspot.com",
  messagingSenderId: "434328627704",
  appId: "1:434328627704:web:30a3cc35992dbc447cce0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;