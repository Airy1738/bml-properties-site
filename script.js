// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyiS46drfUfcBY6DOCCAOMEDuogCiaa9Y",
    authDomain: "bml-properties-site.firebaseapp.com",
    projectId: "bml-properties-site",
    storageBucket: "bml-properties-site.firebasestorage.app",
    messagingSenderId: "566242853279",
    appId: "1:566242853279:web:5bd04a264b314b0518fdaa",
    measurementId: "G-YTT6FSXCJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch and display property listings
async function fetchProperties() {
    const propertiesContainer = document.getElementById('properties-container');
    const querySnapshot = await getDocs(collection(db, "properties"));
    querySnapshot.forEach((doc) => {
        const property = doc.data();
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.imageUrl}" alt="${property.name}">
            <div class="content">
                <h3>${property.name}</h3>
                <p>${property.description}</p>
                <p class="price">$${property.price}</p>
            </div>
        `;
        propertiesContainer.appendChild(propertyCard);
    });
}

// Call the function to display properties
fetchProperties();
