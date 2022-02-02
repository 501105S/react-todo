import React from 'react'
import { Link, Route } from 'react-router-dom'
import PostMain from '../../pages/post/PostMain'
import PostWrite from '../../pages/post/PostWrite'

function Header() {
  return (
    <div className="header-wrapper">
      <nav className="header-nav">
        <Link to="/">
          <h1 className="logo">로고</h1>
        </Link>

        <ul className="main-list">
          <Link to="/PostWrite">
            <li className="main-item">TODO</li>
          </Link>
          <Link to="/PostList">
            <li className="main-item">게시판</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
