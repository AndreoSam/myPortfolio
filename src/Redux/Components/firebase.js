// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBS34wvRkx8Uy16169_guG7b9CWBJ_SSUo",
    authDomain: "portfolio-641cf.firebaseapp.com",
    databaseURL: "https://portfolio-641cf-default-rtdb.firebaseio.com",
    projectId: "portfolio-641cf",
    storageBucket: "portfolio-641cf.appspot.com",
    messagingSenderId: "875718720162",
    appId: "1:875718720162:web:8fb1a91daadcee7dfe35fb",
    measurementId: "G-ETXLB9VCJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;