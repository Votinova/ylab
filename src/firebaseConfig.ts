
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCTDV4a7wkoXjdpD-c7HWltDMGQIYO-jIE",
  authDomain: "ylab-55208.firebaseapp.com",
  projectId: "ylab-55208",
  storageBucket: "ylab-55208.appspot.com",
  messagingSenderId: "936168975673",
  appId: "1:936168975673:web:2398d115d0ef4188648ce8",
  measurementId: "G-YG4227G8ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

