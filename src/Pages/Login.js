import React from "react";
import background from "../Assets/Images/Bahnaric1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../App"

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

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
            dispatch({
              type: "LOGIN",
              payload: {
                user: username,
                token: response.data.access_token
              }
            })
            // localStorage.setItem("user", JSON.stringify({
            //   "access_token" : token,
            //   "username": username,
            // }))
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
        <h1>Đăng nhập</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="auth_input">
            <label htmlFor="user">Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            {usernameError != "" && (
              <span className="error">{usernameError}</span>
            )}
          </div>
          <div className="auth_input">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {passwordError != "" && (
              <span className="error">{passwordError}</span>
            )}
          </div>
          <div className="submit">
            <button>Đăng nhập</button>
            <p>
              Chưa có tài khoản? <Link to="..\signup" relative="path">Đăng kí ngay</Link>.
            </p>
          </div>
        </form>
      </div>
      <img src={background} className="background"></img>
    </div>
  );
}

export default Login;
