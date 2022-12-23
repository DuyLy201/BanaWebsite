import React, { useState, useEffect, useContext } from "react";
import "./Card.css";
import { AiFillSound } from "react-icons/ai";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from "axios";
import AuthService from "../AuthService";
import { AuthContext } from "../App";

function Card({ word, pos, BinhDinh, GiaLai, KonTum, id }) {
  const { state } = useContext(AuthContext)
  const [isBookmarked, setIsBookmarked] = useState();

  useEffect(() => {
    if (state.username) {
      const token = state.token;
      axios.post(
        "http://localhost:5000/api/check_bookmark",
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((result) => {
        setIsBookmarked(result.data.msg)
      })
    }
  }, [state.username]);

  const handleBookmark = (e) => {
    e.preventDefault()
    if (state.username) {
      const token = state.token;
      axios
        .post(
          "http://localhost:5000/api/update_bookmark",
          {
            id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          bookmarked();
        })
    }
  };

  const bookmarked = async () => {
    if (state.username) {
      const token = state.token;
      const result = await axios.post(
        "http://localhost:5000/api/check_bookmark",
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsBookmarked(result.data.msg);
    }
  };

  const playSound = (e) => {
    axios
      .post("https://www.ura.hcmut.edu.vn/tts/speak", {
        text: word,
        gender: "male",
      })
      .then((res) => {
        let audio;
        audio = new Audio(`data:audio/wav;base64,${res.data.speech}`);
        audio.play();
      });
  };

  return (
    <div className="card">
      <div className="flex-vertical content">
        <h3>{word}</h3>
        <p>{pos}</p>
      </div>
      <div className="flex-horizontal">
        <div className="sound">
          <button disabled={BinhDinh === "-"} onClick={(e) => playSound(e)}>
            <AiFillSound />
            <span>Bình Định</span>
          </button>
          <button disabled={GiaLai === "-"} onClick={(e) => playSound(e)}>
            <AiFillSound />
            <span>Gia Lai</span>
          </button>
          <button disabled={KonTum === "-"} onClick={(e) => playSound(e)}>
            <AiFillSound />
            <span>Kon Tum</span>
          </button>
        </div>
        {state.username ? (
          <IconContext.Provider value={{ size: "45px" }}>
            <div className="bookmark" onClick={(e) => handleBookmark(e)}>
              {isBookmarked == "true" ? <FaBookmark /> : <FaRegBookmark />}
            </div>
          </IconContext.Provider>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
