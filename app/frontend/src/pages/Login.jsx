import React from 'react';
import '../styles/Pages/login.sass';

function Login() {
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
            required=""
          />
          <input type="text" name="name" placeholder="Nome" required="" />
          <input type="password" name="pswd" placeholder="Senha" required="" />
          <button>Registrar</button>
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
            required=""
          />
          <input type="password" name="pswd" placeholder="Senha" required="" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
