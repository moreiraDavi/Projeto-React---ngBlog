import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjzS6wJQFIKdghPtGGo-fGlJxkhRz1-KY",
  authDomain: "ngblog-2f97d.firebaseapp.com",
  projectId: "ngblog-2f97d",
  storageBucket: "ngblog-2f97d.firebasestorage.app",
  messagingSenderId: "170839088831",
  appId: "1:170839088831:web:3b9a2ae0ab5edb6005b00a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
