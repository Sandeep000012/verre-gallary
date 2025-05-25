import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Log_In from './Component/Log_In';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Shop from './Component/Shop';
import Cart from './Component/Cart';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/About' element = {<About />} />
      <Route path='/Contact' element = {<Contact />} />
      <Route path='/Shop' element = {<Shop />} />
      <Route path='/Cart' element = {<Cart />} />
      <Route path='/Log_In' element = {<Log_In />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
