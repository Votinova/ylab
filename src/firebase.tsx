import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig"


export const Reg = () => {
  const navigate = useNavigate();
  const handleReg = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => navigate('/page'))
    .then(() => localStorage.setItem('user', email))
    .catch((error) => {
      console.log(error)
    });
  }

  return handleReg;
}

export const Auth = () => {
  const navigate = useNavigate();
  const handleTake = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(() => navigate('/page'))
    .then(() => localStorage.setItem('user', email))
    .catch((error) => {
      console.log(error)
    });
  
  }

  return handleTake;
}