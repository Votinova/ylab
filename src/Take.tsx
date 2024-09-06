
import './App.css';
import { Reg } from './firebase';
import { useState } from 'react';

function Take() {
  const handleReg = Reg();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <div className='title'>Регистрация</div>
      <form action='' autoComplete='on' onSubmit={(e:React.ChangeEvent<HTMLFormElement>) => {e.preventDefault(); handleReg(email, password)}}>
        <p>
          <label >Введите email</label>
          <input title='email' name='email' id='email' placeholder='введите email' required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        </p>
        <p>
          <label>Введите пароль</label>
          <input title='password' name='password' type="password" id='password' placeholder='введите пароль' required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
          {password.length < 6? <div className='word'>пароль должен быть не менее 6 символов</div>: null}
        </p>
        <button title='submit'type='submit'>Peгистрация</button>
      </form>
      <div className='take'>Уже есть аккаунт?<a href={`/registr`}>Войти</a></div>
    </>
  )
}

export default Take
