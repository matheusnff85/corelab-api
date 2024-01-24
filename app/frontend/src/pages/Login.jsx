import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { userRequest } from '../services/requests';
import '../styles/Pages/login.sass';

function Login() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setLogged] = useState(false);
  const [wrongPassword, setWrongPass] = useState(false);

  const apiBaseUrl = process.env.REACT_APP_BASE_API_URL;

  const registerNewUser = async () => {
    try {
      const result = await userRequest(`${apiBaseUrl}/users/register`, {
        username,
        name,
        password,
      });
      localStorage.setItem('userInfos', { id: result.id, name: result.name });
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    try {
      const result = await userRequest(`${apiBaseUrl}/users/login`, {
        username,
        password,
      });
      localStorage.setItem('userInfos', { id: result.id, name: result.name });
      setLogged(true);
    } catch (error) {
      setWrongPass(true);
    }
  };

  if (isLogged) return <Navigate to="/tasks" />;
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Registre-se
          </label>
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            value={username}
            onChange={({ target: { value } }) => setUsername(value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Senha"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <button onClick={registerNewUser} type="button">
            Registrar
          </button>
        </form>
      </div>
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            value={username}
            onChange={({ target: { value } }) => setUsername(value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Senha"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          {wrongPassword ? <p>Senha incorreta</p> : null}
          <button onClick={login} type="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
