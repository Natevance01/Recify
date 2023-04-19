import { useState } from 'react'
import './App.css'
import Pages from './pages/Pages.jsx'
import Catagory from './components/Catagory.jsx'
import { BrowserRouter, Link } from 'react-router-dom'
import Search from './components/Search.jsx'
import styled from 'styled-components'
import { GiKnifeFork } from "react-icons/gi"

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={'/'}>Recify</Logo>
        </Nav>
        <Search />
        <Catagory/>
        <Pages />
      </BrowserRouter>
    </>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;  
  font-weight: 400;
  font-family: 'Lobster Tw0', cursive;
  
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
}
`

export default App
