import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCoAfDvR1rxxP6_XUHxgCxoxODVhxsIR6M",
  authDomain: "o-time-43625.firebaseapp.com",
  projectId: "o-time-43625",
  storageBucket: "o-time-43625.appspot.com",
  messagingSenderId: "909576124531",
  appId: "1:909576124531:web:80d02d90ad092887425206",
  measurementId: "G-GPKB30FE2C"
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app);

export { db, set, ref };
