// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeG9GcnipMGMoo6_pUGy-Tj2RtoPVTm-8",
  authDomain: "clinic-58be6.firebaseapp.com",
  projectId: "clinic-58be6",
  storageBucket: "clinic-58be6.firebasestorage.app",
  messagingSenderId: "128891585766",
  appId: "1:128891585766:web:4b0febbe90e2c5f6fe6727",
  measurementId: "G-29B3L1VCVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;