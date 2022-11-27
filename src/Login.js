import React from "react";
import background from "./Assets/Images/Bahnaric1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");
    let error = false;
    if (username === "") {
      setUsernameError("Please provide a username");
      error = true;
    }
    if (password === "") {
      setPasswordError("Please provide a password");
      error = true;
    }
    if (!error) {
        axios
          .post("http://localhost:5000/api/login", {
            username,
            password,
          })
          .then((response) => {
            let token = response.data.access_token;
            localStorage.setItem("user", JSON.stringify({
              "access_token" : token,
              "username": username,
            }))
            navigate("/");
          }).catch((err) => {
            setUsernameError("Invalid username or password");
            setPasswordError("Invalid username or password");
          });
    }
  };

  return (
    <div className="login">
      <div className="login_form">
        <h1>Log in</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="auth_input">
            <label htmlFor="user">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            {usernameError != "" && (
              <span className="error">{usernameError}</span>
            )}
          </div>
          <div className="auth_input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {passwordError != "" && (
              <span className="error">{passwordError}</span>
            )}
          </div>
          <div className="submit">
            <button>Log in</button>
            <p>
              No account? <Link to="..\signup" relative="path">Sign up</Link>.
            </p>
          </div>
        </form>
      </div>
      <img src={background} className="background"></img>
    </div>
  );
}

export default Login;
