import React, { useEffect, useState } from 'react';
import Intro from "../Components/Intro";
import "./Translation.css";
import axios from 'axios';
import myImage from "../Assets/Images/Bilingual.jpg";

function Translation() {
  const [searchValue, setSearchValue] = useState('');
  const [language, setLanguage] = useState('BinhDinh');
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setSearchValue("");
  }, [language]);

  const handleSearch = (e) => {
    setSearchValue(e.currentTarget.value);
  
    axios
    .post(`faws.gvlab.org/fablab/ura/llama/bahnar/api/translate/vi_ba`,{region: language, text: searchValue}) // update api translation here
    .then((response) => {
      console.log(response.data);
      setData(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
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
          <div className="translation-right">
            Hiển thị kết quả ở đây
            {/* {showResults && data.length > 0 && searchValue.length > 0 && <div style={{position: 'absolute', top: '50px', left: 0, right: 0, backgroundColor: 'white', zIndex: '100', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', height: 500, overflowY: "scroll"}}>
              {data.map((item, index) => {
                return (
                  <div key={item.id} style={{padding: '10px', borderBottom: '1px solid #e0e0e0', cursor: 'pointer'}} onClick={() => handleOnClickSearchValue(item)}>  
                    {item.tiengViet}
                  </div>
                )
              })}</div>} */}
          </div>
        </div>
          <button  className='button-container'>
            Dịch
          </button>
    </>
  );
}

export default Translation;