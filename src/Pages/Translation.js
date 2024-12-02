import React, { useEffect, useState } from 'react';
import Intro from "../Components/Intro";
import "./Translation.css";
import axios from 'axios';
import myImage from "../Assets/Images/Bilingual.jpg";

function Translation() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <>
      <Intro />
      <div style={{ width: '100vw' }} >
      <img src={myImage}  alt="Dân tộc Bahna"/>
      </div>
        <div className='title-container'>
        <p style={{marginRight:'20px'}}>Tiếng Việt</p>
          <svg width="13" height="20" viewBox="0 0 13 20" fill="#1C45F9" xmlns="http://www.w3.org/2000/svg" className="ml-[-8px] h-4 w-4">
            <path d="M0.879883 2.12L8.75988 10L0.879883 17.88L2.99988 20L12.9999 10L2.99988 0L0.879883 2.12Z" fill="current" fill-opacity="0.87"></path>
          </svg>
          <svg width="13" height="20" viewBox="0 0 13 20" fill="#1C45F9" xmlns="http://www.w3.org/2000/svg" className="ml-[-8px] h-4 w-4">
            <path d="M0.879883 2.12L8.75988 10L0.879883 17.88L2.99988 20L12.9999 10L2.99988 0L0.879883 2.12Z" fill="current" fill-opacity="0.87"></path>
          </svg>
        <p style={{marginLeft:'20px'}}>Bahna</p>
        </div>
        <div className="translation-container">
          <textarea
            className="translation-left"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Nhập văn bản cần dịch"
            rows="10"
            style={{width: '100%', border: 'none'}}
          />
          <div className="translation-right">Row 1, Col 2</div>
        </div>
          <button  className='button-container'>
            Dịch
          </button>
    </>
  );
}

export default Translation;