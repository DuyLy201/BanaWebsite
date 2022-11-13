import React from "react";
import "./Card.css";
import { AiFillSound } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { IconContext } from "react-icons";

function Card({ word, BinhDinh, GiaLai, KonTum }) {
  return (
    <div className="card">
      <div className="flex-vertical content">
        <h3>{word}</h3>
        <p>{word}</p>
      </div>
      <div className="flex-horizontal">
        <div className="sound">
            <button disabled={BinhDinh === "-"}>
              <AiFillSound />
              <span>BinhDinh</span>
            </button>
            <button disabled={GiaLai === "-"}>
              <AiFillSound />
              <span>Gia Lai</span>
            </button>
            <button disabled={KonTum === "-"}>
              <AiFillSound />
              <span>KonTum</span>
            </button>
        </div>
        <IconContext.Provider value={{size: "45px"}}>
        <div className="bookmark"><FaRegBookmark/></div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Card;
