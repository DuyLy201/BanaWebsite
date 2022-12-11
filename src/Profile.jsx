import React, { useContext } from 'react'
import BookmarkList from './Components/BookmarkList'
import './Profile.css'
import AuthService from './AuthService'
import { AuthContext } from './App'

function Profile() {
  const {state} = useContext(AuthContext)
  const username = AuthService.getCurrentUser().username;

  return (
    <div className='profile-page'>
        <div className="info">
          <div className="profile-info">
            <div className="profile-image"></div>
            <h1 className="profile-name">{state.username}</h1>
          </div>
          <div className="words-no">
            <div className="words-no-label"></div>
            <div className="number"></div>
          </div>
        </div>
        <div className="bookmark-words main">
          <h1>Đơn ngữ đã lưu</h1>
          <BookmarkList/>
        </div>
    </div>
  )
}

export default Profile