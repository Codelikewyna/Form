
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCoy_cVzzj3jr0_mUJAKJiJClaeLugDbcU",
    authDomain: "test1-ec1d4.firebaseapp.com",
    projectId: "test1-ec1d4",
    storageBucket: "test1-ec1d4.firebasestorage.app",
    messagingSenderId: "908248728254",
    appId: "1:908248728254:web:dd94bb53eb7e8d9536d4ef",
    measurementId: "G-H10BF4BYG8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




//submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
    event.preventDefault()
  
  
//inputs

const email = document.getElementById('email').value
const password = document.getElementById('password').value


    
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    window.location.href="404.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  
}

)