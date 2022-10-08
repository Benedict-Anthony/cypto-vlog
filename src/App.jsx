import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Filter from './pages/Filter';
import Detail from './pages/Detail';

function App() {
  const handleSearch = () => {
    console.log(1234)
  }
  return (
    < BrowserRouter>
      <Navbar handleSearch={handleSearch} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:type"} element={<Filter />} />
        <Route path={"detail/:slug"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
