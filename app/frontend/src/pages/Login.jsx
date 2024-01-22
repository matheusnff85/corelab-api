/* eslint-disable array-callback-return */
import '../styles/Pages/login.sass';

function Login() {
  window.onload = () => {
    const loginBtn = document.getElementsByClassName('login')[0];
    const signupBtn = document.getElementsByClassName('signup')[0];
    console.log(loginBtn);
    loginBtn.addEventListener('click', (e) => {
      const parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== 'slide-up') {
          parent.classList.add('slide-up');
        } else {
          signupBtn.parentNode.classList.add('slide-up');
          parent.classList.remove('slide-up');
        }
      });
    });

    signupBtn.addEventListener('click', (e) => {
      const parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== 'slide-up') {
          parent.classList.add('slide-up');
        } else {
          loginBtn.parentNode.parentNode.classList.add('slide-up');
          parent.classList.remove('slide-up');
        }
      });
    });
  };
  return (
    <div className="form-structor">
      <div className="signup">
        <h2 className="form-title" id="signup">
          <span>or</span>Sign up
        </h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button className="submit-btn">Sign up</button>
      </div>
      <div className="login slide-up">
        <div className="center">
          <h2 className="form-title" id="login">
            <span>or</span>Log in
          </h2>
          <div className="form-holder">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
