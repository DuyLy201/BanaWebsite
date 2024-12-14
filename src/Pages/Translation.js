import React, { useEffect, useState } from 'react';
import Intro from "../Components/Intro";
import "./Translation.css";
import axios from 'axios';
import myImage from "../Assets/Images/Bilingual.jpg";

function Translation() {
  const languages = ['BinhDinh', 'GiaLai', 'KonTum'];
  const genders = ['male', 'female'];
  const [searchValue, setSearchValue] = useState('');
  const [language, setLanguage] = useState(languages[0]);
  const [gender, setGender] = useState(genders[0]);
  const [data, setData] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    setSearchValue("");
  }, [language]);

  const handleSearch = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleButtonClick = () => {
    axios
      .post(`https://www.ura.hcmut.edu.vn/bahnar/nmt/api/translateBahnar`, { region: language, text: searchValue }) // update api translation here
      .then((response) => {
        // console.log("duylh",response.data.payload);
        setData(response.data.payload.tgt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVoiceButtonClick = () => {
    axios
      .post(`https://www.ura.hcmut.edu.vn/bahnar/nmt/api/translateBahnar/voice`, { gender: gender, text: searchValue }, { responseType: 'blob' }) // update api translation here
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        setAudioSrc(url);
        const audio = new Audio(url);
        audio.play().catch((error) => {
          console.log("Error playing audio:", error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const switchLanguage = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <>
      <Intro />
      <div style={{ width: '100vw' }}>
        <img src={myImage} alt="Dân tộc Bahna" />
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
        <div className="translation-right">
          {data ?? ""}
        </div>
      </div>
      <div style={{display:'flex', gap:'30px'}}>
        <button style={{flex:1}} className='button-container' onClick={handleButtonClick}>
          Dịch
        </button>
        <button style={{flex:1}} className='button-container' onClick={handleVoiceButtonClick}>
          Dịch bằng âm thanh
        </button>
      </div>
      {audioSrc && (
        <audio controls autoPlay>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </>
  );
}

export default Translation;