import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC3H6BZneAxYBrx9aZPXBuY1CSxUUpvdNc",
  authDomain: "carrito-coder-react-backend.firebaseapp.com",
  projectId: "carrito-coder-react-backend",
  storageBucket: "carrito-coder-react-backend.appspot.com",
  messagingSenderId: "438227239240",
  appId: "1:438227239240:web:31f944a2b8cbbda094737d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = getFirestore(app)