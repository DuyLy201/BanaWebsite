import React from 'react'
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    if(searchValue !== "") {
      navigate("/search", {state: {searchValue: searchValue}});
    }
  }
  return (
    <nav className="nav">
      <Link to={"/"} style={{ textDecoration: 'none' }}>
      <div className='logo'>Bahnaric</div>
      </Link>
        <form className="search" onSubmit={handleSubmit}>
          <AiOutlineSearch className='search_icon'/>
          <input type="text" placeholder='Search for any words or phrases' onChange={e => setSearchValue(e.target.value)}></input>
        </form>
        <button>Log in</button>
    </nav>
  )
}

export default Navbar