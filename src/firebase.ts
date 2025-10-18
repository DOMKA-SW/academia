import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW38L2UCSzjC_PSCtZWdqgvDbJfAnReO0",
  authDomain: "academia-demo-b32a3.firebaseapp.com",
  databaseURL: "https://academia-demo-b32a3-default-rtdb.firebaseio.com",
  projectId: "academia-demo-b32a3",
  storageBucket: "academia-demo-b32a3.firebasestorage.app",
  messagingSenderId: "958630347553",
  appId: "1:958630347553:web:2d0f7b23b0dbd844f6f460"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
