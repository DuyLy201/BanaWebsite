import React, { useEffect } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { IconContext } from "react-icons";
import AuthService from "../AuthService";
import { AuthContext } from "../App";

function Navbar() {
  const { state, dispatch } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(state.username);

  // useEffect(() => {
  //   setCurrentUser(state.username)
  // }, [state.username])

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder="Tra cứu đơn ngữ bất kì"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="profile">
        {state.username ? (
          <>
            <Link className="to-profile" to={"/profile"} style={{ textDecoration: "none" }}>
              <span className="nav-username">{state.username}</span>
              <IconContext.Provider value={{ size: "42px" }}>
                <CgProfile />
              </IconContext.Provider>
            </Link>
            <button onClick={(e) => handleLogout(e)}>Đăng xuất</button>
          </>
        ) : (
          <button onClick={(e) => handleLogin(e)}>Đăng nhập</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
