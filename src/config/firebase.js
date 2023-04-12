import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9tve8zOoAHwtcjzxdafMHmDTQ68Gx9hk",
  authDomain: "portfolio-acc43.firebaseapp.com",
  projectId: "portfolio-acc43",
  storageBucket: "portfolio-acc43.appspot.com",
  messagingSenderId: "28698931238",
  appId: "1:28698931238:web:ab155a434afcab015f76e7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);