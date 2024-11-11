import "./Components/WordList";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { createContext, useEffect, useReducer, useState } from "react";
import Profile from "./Profile";
import Bilingual from "./Pages/Bilingual";
import Translation from "./Pages/Translation";

export const AuthContext = createContext();

const initialState =
  localStorage.getItem("user") != null
    ? {
        isAuthenticated: true,
        username: JSON.parse(localStorage.getItem("user")).username,
        token: JSON.parse(localStorage.getItem("user")).access_token,
      }
    : {
        isAuthenticated: false,
        username: null,
        token: null,
      };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem(
        "user",
        JSON.stringify({
          access_token: action.payload.token,
          username: action.payload.user,
        })
      );
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        token: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <BrowserRouter>
        <div className="page">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bilingual" element={<Bilingual />} />
            <Route path="/translation" element={<Translation />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
