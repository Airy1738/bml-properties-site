// Your Firebase configuration from your project info
const firebaseConfig = {
  apiKey: "AIzaSyCyiS46drfUfcBY6DOCCAOMEDuogCiaa9Y",
  authDomain: "bml-properties-site.firebaseapp.com",
  projectId: "bml-properties-site",
  storageBucket: "bml-properties-site.firebasestorage.app",
  messagingSenderId: "566242853279",
  appId: "1:566242853279:web:5bd04a264b314b0518fdaa",
  measurementId: "G-YTT6FSXCJ6"
};

// Initialize Firebase (using the globally loaded firebase from the SDK <script> tags)
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();

// DOM Elements for authentication
const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const signOutBtn = document.getElementById("sign-out-btn");

const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

const userInfo = document.getElementById("user-info");
const userEmailDisplay = document.getElementById("user-email");
const authForms = document.getElementById("auth-forms");

// Register new user
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const email = registerEmail.value;
    const password = registerPassword.value;
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful
        console.log("Registered:", userCredential.user);
        // Clear form
        registerEmail.value = "";
        registerPassword.value = "";
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        alert(error.message);
      });
  });
}

// Login user
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = loginEmail.value;
    const password = loginPassword.value;
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful
        console.log("Logged in:", userCredential.user);
        // Clear form
        loginEmail.value = "";
        loginPassword.value = "";
      })
      .catch((error) => {
        console.error("Login Error:", error);
        alert(error.message);
      });
  });
}

// Sign out user
if (signOutBtn) {
  signOutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      console.log("User signed out");
    }).catch((error) => {
      console.error("Sign Out Error:", error);
    });
  });
}

// Update UI on auth state change
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    userInfo.classList.remove("hidden");
    authForms.classList.add("hidden");
    userEmailDisplay.textContent = user.email;
  } else {
    // No user is signed in
    userInfo.classList.add("hidden");
    authForms.classList.remove("hidden");
  }
});

// Dummy schedule form handling (for schedule.html)
const scheduleForm = document.getElementById("schedule-form");
const scheduleResponse = document.getElementById("schedule-response");

if (scheduleForm) {
  scheduleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // In a real app, you would send the schedule info to your backend.
    scheduleResponse.textContent = "Visit scheduled successfully!";
    scheduleForm.reset();
  });
}

// Dummy contact form handling (for contact.html)
const contactForm = document.getElementById("contact-form");
const contactResponse = document.getElementById("contact-response");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // In a real app, you would send the message to your backend.
    contactResponse.textContent = "Your message has been sent!";
    contactForm.reset();
  });
}
