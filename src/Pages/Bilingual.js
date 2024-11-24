import React, { useState } from 'react';
// import WordList from "../Components/WordList";
import Intro from "../Components/Intro";
// import Daily from "../Components/Daily";
import './Bilingual.css';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import myImage from "../Assets/Images/Bilingual.jpg";

function Bilingual() {
  const [searchValue, setSearchValue] = useState('');
  const [language, setLanguage] = useState('BinhDinh');
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };


  return (
    <>
      <Intro />
      <div style={{ width: '100vw' }} >
      <img src={myImage}  alt="Dân tộc Bahna"/>
      </div>
      <div className='search_text'>
        <h1 style={{display:'block', marginBottom:'30px', marginTop:'20px'}}>Kho ngữ liệu song ngữ tiếng Ba-na</h1>
        <h3 style={{display:'block', marginBottom:'50px',fontSize:30,fontWeight:'bold'}}>Tra cứu tiếng Ba-na và nghe phát âm từ ba phương ngữ Bình Định,
        Kon Tum, Gia Lai</h3>
      </div>
      <div className="container">
      <div className='search'>
        <form style={{display:'block',marginBottom:'50px'}}>
            <IconContext.Provider value={{ size: "20px" }}>
              <AiOutlineSearch className="search_icon" />
            </IconContext.Provider>
            <input
              type="text"
              placeholder="Tra cứu đơn ngữ bất kì"
              value={searchValue}
              onChange={handleSearch}
            />
        </form>
        <div className='search_buttons'>
          <button onClick={() => {
            setLanguage('BinhDinh');

          }} className="search_button" style={{ background: language === "BinhDinh" ? "black" : "white",
            color: language === "BinhDinh" ? "white" : "black"
           }} >Bình Định</button>
          <button onClick={() => {
            setLanguage('GiaLai');
          }} className="search_button" style={{ background: language === "GiaLai" ? "black" : "white",
            color: language === "GiaLai" ? "white" : "black"
           }} >Gia Lai</button>
          <button onClick={() => {
            setLanguage('KonTum');
          }} className="search_button" style={{ background: language === "KonTum" ? "black" : "white",
            color: language === "KonTum" ? "white" : "black"
           }} >KonTum</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Bilingual;