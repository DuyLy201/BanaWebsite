import React from 'react'
import WordList from "../Components/WordList";
import Intro from "../Components/Intro";
import Daily from "../Components/Daily";

function Bilingual() {
  return (
    <>
      <Intro />
      <div className="main">
        <h1>Song ngữ của ngày</h1>
        <Daily/>
        <h1>Danh sách song ngữ</h1>
        <WordList api={"http://localhost:5000/api/dict"}/>
      </div>
    </>
  );
}

export default Bilingual