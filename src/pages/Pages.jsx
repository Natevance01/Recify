import Home from './Home.jsx'
import Catagory from '../components/Catagory.jsx'
import {Routes, Route } from 'react-router-dom'
import Cuisine  from './Cuisine.jsx'
import Searched from './Searched.jsx'

const Pages = () => {
  return (
    <>      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:type' element={<Cuisine />}/>
        <Route path="/searched/:search" element={<Searched/>}/>
      </Routes>
    </>
  )
} 




export default Pages
