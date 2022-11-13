import React from "react";
import background from "./Assets/Images/Bahnaric1.png";

function Login() {
  return (
    <div className="login">
      <div className="login_form">
        <h1>Log in</h1>
        <form>
          <div className="auth_input">
            <label htmlFor="user">Username</label>
            <input type="text" placeholder="Enter your username"></input>
          </div>
          <div className="auth_input">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password"></input>
          </div>
          <div className="submit">
            <button>Log in</button>
            <p>No account? <a href="#">Create an account</a></p>
          </div>
        </form>
      </div>
      <img src={background} className="background"></img>
    </div>
  );
}

export default Login;
