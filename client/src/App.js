import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layouts/Header'
import PostMain from './pages/post/PostMain'
import PostList from './pages/post/PostList'
import PostWrite from './pages/post/PostWrite'
import PostView from './pages/post/PostView'

import './App.css'
import './styles/layouts/Header.css'
import './styles/post/PostMain.css'
import './styles/post/PostView.css'

function App() {
  const sendRequest = async () => {
    const response = await axios.get('http://localhost:8080')
    console.log(response)
    console.log(response.data)
  }

  useEffect(() => {
    sendRequest()
  })

  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/PostMain" element={<PostMain />} />
          <Route path="/PostList" element={<PostList />} />
          <Route path="/PostWrite" element={<PostWrite />} />
          <Route path="/PostView/:no" element={<PostView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
