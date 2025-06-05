import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Log_In from './Pages/Log_In';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/About' element = {<About />} />
      <Route path='/Contact' element = {<Contact />} />
      <Route path='/Shop' element = {<Shop />} />
      <Route path='/Log_In' element = {<Log_In />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
