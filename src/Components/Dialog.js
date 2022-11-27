import React from "react";
import { Link } from "react-router-dom";

function Dialog({ close }) {
  return (
    <div>
      <div className="overlay"></div>
      <div className="dialog">
        <button className="close-button" onClick={close}></button>
        <h2>Sign up succesful.</h2>
        <button className="dialog-login" ><Link to="../login" relative="path">Log in</Link></button>
      </div>
    </div>
  );
}

export default Dialog;
