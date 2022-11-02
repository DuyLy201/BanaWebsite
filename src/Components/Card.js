import React from "react";
import "./Card.css";
import { AiFillSound } from "react-icons/ai";

function Card({ word, BinhDinh, GiaLai, KonTum }) {
  return (
    <div className="card">
      <div className="flex-vertical content">
        <h3>{word}</h3>
        <p>{word}</p>
      </div>
      <div className="flex-horizontal">
        <div className="sound">
          {BinhDinh === "Y" ? (
            <button>
              <AiFillSound />
              <span>Binh Dinh</span>
            </button>
          ) : null}
          {GiaLai === "Y" ? (
            <button>
              <AiFillSound />
              <span>Gia Lai</span>
            </button>
          ) : null}
          {KonTum === "Y" ? (
            <button>
              <AiFillSound />
              <span>KonTum</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
