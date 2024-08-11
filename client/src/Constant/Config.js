// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxM6ncuByTd_GVIWjYmDoqNhj3ndO1qcg",
  authDomain: "agriculture-f84d2.firebaseapp.com",
  projectId: "agriculture-f84d2",
  storageBucket: "agriculture-f84d2.appspot.com",
  messagingSenderId: "759668114677",
  appId: "1:759668114677:web:fd4eb48cbe744da91e31bc",
  measurementId: "G-CD4X3PRLM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
