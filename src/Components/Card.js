import React from "react";
import "./Card.css";
import { AiFillSound } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from "axios";

function Card({ word, pos, BinhDinh, GiaLai, KonTum }) {
  const playSound = (e) => {
    axios
      .post("https://www.ura.hcmut.edu.vn/tts/speak", {
        text: word,
        gender: "male",
      })
      .then((res) => {
        let base64sound;
        let audio;
        base64sound = res.data.speech;
        console.log(base64sound);
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
            <span>BinhDinh</span>
          </button>
          <button disabled={GiaLai === "-"} onClick={(e) => playSound(e)}>
            <AiFillSound />
            <span>Gia Lai</span>
          </button>
          <button disabled={KonTum === "-"} onClick={(e) => playSound(e)}>
            <AiFillSound />
            <span>KonTum</span>
          </button>
        </div>
        <IconContext.Provider value={{ size: "45px" }}>
          <div className="bookmark">
            <FaRegBookmark />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Card;
