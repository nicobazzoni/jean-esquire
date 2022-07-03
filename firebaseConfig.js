import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDJOcsVYHbc2uZ71-8J6X6Utx0XeIjiMuI",
    authDomain: "jean-esq.firebaseapp.com",
    projectId: "jean-esq",
    storageBucket: "jean-esq.appspot.com",
    messagingSenderId: "869912759396",
    appId: "1:869912759396:web:3359bbc612d6d9599da371"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore(app);