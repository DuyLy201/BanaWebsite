import React from "react";
import background from "./Assets/Images/Bahnaric2.png";
import {Link} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Dialog from "./Components/Dialog";

function Signup() {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [reenterPassword, setReenterPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [reenterPasswordError, setReenterPasswordError] = useState("");
    const [openDialog, setOpenDialog] = useState(false);


    const closeDialog = () => {
        setOpenDialog(false);
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        setEmailError("");
        setUsernameError("");
        setPasswordError("");
        setOpenDialog(false);
        let error = false;
        if(username === "") {
            setUsernameError("Please provide a username");
            error = true;
        };
        if(email === "")  {
            setEmailError("Please provide an email");
            error = true;
        }

        if(password === "") {
            setPasswordError("Please provide a password");
            error = true;
        } else if(password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            error = true;
        }
        if(reenterPassword === "") {
            setReenterPasswordError("Please re-enter your password");
            error = true;
        }
        if(password !== reenterPassword) {
            setPasswordError("Passwords do not match");
            setReenterPasswordError("Passwords do not match");
            error = true;
        }
        if(!error) {
            axios.post("http://localhost:5000/api/register", {
                "username" : username,
                "email_address": email,
                "password1" : password,
                "password2": reenterPassword
            }).then((response) => {
                console.log(response);
                if(response.data.err) {
                    for(let err of response.data.err) {
                        if(err.msg === "There was an error: ['Username exists!']") setUsernameError("Username already exists");
                        if(err.msg === "There was an error: ['Email exists!']") setEmailError("Email already exists");
                        if(err.msg === "There was an error: ['Invalid email address.']") setEmailError("Invalid email address");
                    }
                } else {
                    if(response.data.msg === "create success !!!!!") {
                        setOpenDialog(true);
                    }
                }
            })
        }
    }

  return (
    <div className="login">
      <div className="login_form">
        <h1>Sign up</h1>
        <form onSubmit={(e) => handleSignUp(e)}>
        <div className="auth_input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => {setEmail(e.target.value)}}></input>
            {emailError != "" && <span className="error">{emailError}</span>}
          </div>
          <div className="auth_input">
            <label htmlFor="user">Username</label>
            <input type="text" placeholder="Enter your username" onChange={(e) => {setUsername(e.target.value)}}></input>
            {usernameError != "" && <span className="error">{usernameError}</span>}
          </div>
          <div className="auth_input">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => {setPassword(e.target.value)}}></input>
            {passwordError != "" && <span className="error">{passwordError}</span>}
          </div>
          <div className="auth_input">
            <label htmlFor="password">Re-enter password</label>
            <input type="password" placeholder="Re-enter your password" onChange={(e) => {setReenterPassword(e.target.value)}}></input>
            {reenterPasswordError != "" && <span className="error">{passwordError}</span>}
          </div>
          <div className="submit">
            <button>Sign up</button>
            <p>Already have an account? <Link to="../login" relative="path">Log in</Link>.</p>
          </div>
        </form>
      </div>
      <img src={background} className="background"></img>
      {openDialog && <Dialog close={closeDialog}/>}
    </div>
  );
}

export default Signup;
