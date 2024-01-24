import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { userRequest } from '../services/requests';
import '../styles/pages/login.sass';

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
      localStorage.clear();
      localStorage.setItem(
        'userInfos',
        JSON.stringify({ id: result.id, name: result.name })
      );
      setLogged(true);
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
      localStorage.clear();
      localStorage.setItem(
        'userInfos',
        JSON.stringify({ id: result.id, name: result.name })
      );
      setLogged(true);
    } catch (error) {
      setWrongPass(true);
    }
  };

  if (isLogged) return <Navigate to="/tasks" />;
  const isBtnDisable = username && name && password;
  return (
    <main className="login-page">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true" className="login-label">
              Registre-se
            </label>
            <input
              className="input-login-page"
              type="text"
              name="username"
              placeholder="Usuário"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <input
              className="input-login-page"
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
            <input
              className="input-login-page"
              type="password"
              name="pswd"
              placeholder="Senha"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <button
              onClick={registerNewUser}
              type="button"
              disabled={!isBtnDisable}
              className="btn-login-page"
            >
              Registrar
            </button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true" className="login-label">
              Login
            </label>
            <input
              className="input-login-page"
              type="text"
              name="username"
              placeholder="Usuário"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <input
              className="input-login-page"
              type="password"
              name="pswd"
              placeholder="Senha"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            {wrongPassword ? (
              <p className="incorrect-pass">Usuário ou Senha Incorreto(s)</p>
            ) : null}
            <button className="btn-login-page" onClick={login} type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
