
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpX5eA7t6l2DF3eP0JNEqXXQk0XGNwE4o",
  authDomain: "blogwebreactjs.firebaseapp.com",
  projectId: "blogwebreactjs",
  storageBucket: "blogwebreactjs.firebasestorage.app",
  messagingSenderId: "477508738425",
  appId: "1:477508738425:web:f53003b37e94027ecb63a8",
  measurementId: "G-HVXGNJ8TLZ"     
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider}