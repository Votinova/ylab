
import { useState } from 'react';
import './App.css'
import { Auth} from './firebase'

function Registr() {
  const handleAuth = Auth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
    <div className='title'>Вход</div>
      <form action='' autoComplete='on' onSubmit={(e:React.ChangeEvent<HTMLFormElement>) => {e.preventDefault(); handleAuth(email, password)}}>
        <p>
          <label >Введите email</label>
          <input title='email' name='email' id='email' placeholder='введите email' required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        </p>
        <p>
          <label>Введите пароль</label>
          <input title='password' name='password' id='password' placeholder='введите пароль'  type='password'   required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
        </p>
        {password.length < 6? <div className='word'>пароль должен быть не менее 6 символов</div>: null}
        <button title='submit'type='submit'>Вход</button>
      </form>
      <div className='take'>Нет аккаунта?<a href={`/`}>Зарегистрироваться</a></div>
    </>
  )
}

export default Registr