import React, { useEffect } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconContext } from "react-icons";
import AuthService from "../AuthService";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(()=>{
    const user = AuthService.getCurrentUser();
    if(user) {
      setCurrentUser(user);
    }
  })

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    setCurrentUser(undefined);
  };

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
          <IconContext.Provider value={{ size: "20px" }}>
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
        {currentUser ? (
          <>
            <span className="nav-username">{currentUser.username}</span>
            <IconContext.Provider value={{size: "42px"}}>
            <CgProfile />
            </IconContext.Provider>
            <button onClick={(e) => handleLogout(e)}>Log out</button>
          </>
        ) : (
          <button onClick={(e) => handleLogin(e)}>Log in</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
