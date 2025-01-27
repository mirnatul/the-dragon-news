// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXlyIDypDu34I10l3SLgQYicuV_NXZuNw",
    authDomain: "the-news-dragon-586a4.firebaseapp.com",
    projectId: "the-news-dragon-586a4",
    storageBucket: "the-news-dragon-586a4.firebasestorage.app",
    messagingSenderId: "999116415735",
    appId: "1:999116415735:web:314b4c2bae35ac1ba5a9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;