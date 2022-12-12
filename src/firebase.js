// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-dOVv_-GKmqd-qJEErvDu97xuR_5IXlA",
    authDomain: "gaston-react1.firebaseapp.com",
    projectId: "gaston-react1",
    storageBucket: "gaston-react1.appspot.com",
    messagingSenderId: "1060313383971",
    appId: "1:1060313383971:web:2f2cd9d9ccf0b5956f5d96"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db