// Firebase configuration using your provided credentials
const firebaseConfig = {
  apiKey: "AIzaSyCyiS46drfUfcBY6DOCCAOMEDuogCiaa9Y",
  authDomain: "bml-properties-site.firebaseapp.com",
  projectId: "bml-properties-site",
  storageBucket: "bml-properties-site.firebasestorage.app",
  messagingSenderId: "566242853279",
  appId: "1:566242853279:web:5bd04a264b314b0518fdaa",
  measurementId: "G-YTT6FSXCJ6"
};

// Initialize Firebase using the global firebase object from the CDN scripts
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements for authentication (from index.html)
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

// Message display elements
const registerMessage = document.getElementById("register-message");
const loginMessage = document.getElementById("login-message");

// Register user
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const email = registerEmail.value;
    const password = registerPassword.value;
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Registered:", userCredential.user);
        registerEmail.value = "";
        registerPassword.value = "";
        registerMessage.textContent = "Registration successful!";
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        registerMessage.textContent = "Registration failed: " + error.message;
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
        console.log("Logged in:", userCredential.user);
        loginEmail.value = "";
        loginPassword.value = "";
        loginMessage.textContent = "Login successful!";
      })
      .catch((error) => {
        console.error("Login Error:", error);
        loginMessage.textContent = "Login failed: " + error.message;
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
    userInfo.classList.remove("hidden");
    authForms.classList.add("hidden");
    userEmailDisplay.textContent = user.email;
    // Clear any messages
    loginMessage.textContent = "";
    registerMessage.textContent = "";
  } else {
    userInfo.classList.add("hidden");
    authForms.classList.remove("hidden");
  }
});

// Dummy schedule form handling (for schedule.html)
const scheduleForm = document.getElementById("schedule-form");
if (scheduleForm) {
  scheduleForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("schedule-response").textContent = "Visit scheduled successfully!";
    scheduleForm.reset();
  });
}

// Dummy contact form handling (for contact.html)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("contact-response").textContent = "Your message has been sent!";
    contactForm.reset();
  });
}
