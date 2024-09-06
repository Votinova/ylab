
import { useNavigate } from "react-router-dom"
import { auth } from "./firebaseConfig"

function Page () {
    const user = localStorage.getItem('user');
    const navigate = useNavigate()
    function out () {
      auth.signOut();
      navigate('/');
    }
  return (
    <>
      <div>{user}</div>
      <button onClick={() => out()}>Выход</button>
    </>

  )
}

export default Page