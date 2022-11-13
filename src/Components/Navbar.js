import React from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconContext } from "react-icons";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    if (searchValue !== "") {
      navigate("/search", { state: { searchValue: searchValue } });
    }
  };
  return (
    <nav className="nav">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="logo">Bahnaric</div>
      </Link>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <IconContext.Provider value={{size: "20px"}}>
          <AiOutlineSearch className="search_icon" />
          </IconContext.Provider>
          <input
            type="text"
            placeholder="Search for any words or phrases"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="profile">
      <button onClick={(e) => handleLogin(e)}>Log in</button>
      </div>
    </nav>
  );
}

export default Navbar;
