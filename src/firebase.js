// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlVOGkqeW2PQnrWNY1tiAqAJBlQ-AV0Wo",
  authDomain: "clone-63478.firebaseapp.com",
  projectId: "clone-63478",
  storageBucket: "clone-63478.appspot.com",
  messagingSenderId: "959599904381",
  appId: "1:959599904381:web:1f752c2513b24aff4d1314",
  measurementId: "G-9P51SG62GC",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };
