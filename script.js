// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// DOM Elements
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const logoutSection = document.getElementById('logout-section');
const listingsSection = document.getElementById('listings-section');
const userEmailSpan = document.getElementById('user-email');
const listingsDiv = document.getElementById('listings');

// Register Function
window.register = async () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password
::contentReference[oaicite:12]{index=12}
 

