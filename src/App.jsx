import { useState } from 'react'
import './App.css'
import Pages from './pages/Pages.jsx'
import Catagory from './components/Catagory.jsx'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Search />
        <Catagory/>
        <Pages />
      </BrowserRouter>
    </>
  )
}

export default App
