// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCkXiv0QInruncpQ2xyJNOVmhfXBNDCVZM",
    authDomain: "mindful-life-360802.firebaseapp.com",
    projectId: "mindful-life-360802",
    storageBucket: "mindful-life-360802.appspot.com",
    messagingSenderId: "304539250034",
    appId: "1:304539250034:web:2e4398a8e51a07ac8181eb",
    measurementId: "G-4HFF98PZZ1"
};
// Initialize Firebase
console.log(firebaseConfig);
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;