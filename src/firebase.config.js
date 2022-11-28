import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoj3dy0KmWtTAtrA_oytDof0MWKCNS-20",
    authDomain: "house-marketplace-app-a97cd.firebaseapp.com",
    projectId: "house-marketplace-app-a97cd",
    storageBucket: "house-marketplace-app-a97cd.appspot.com",
    messagingSenderId: "795860484958",
    appId: "1:795860484958:web:7170f7c1f8195a7e5dc5cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
