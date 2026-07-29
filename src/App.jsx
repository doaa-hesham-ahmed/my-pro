import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './componets/Home/Home'
import About from './componets/About/About'
import Navbar from './componets/Navbar/Navbar'
import Footer from './componets/Footer/Footer'
import Login from './componets/Login/Login'
import Registration from './componets/Register/Register'
import ContactUs from './componets/ContactUs/ContactUs';
import Error from './componets/Error/Error';

import './App.css'


function App() {

  const [searchTerm, setSearchTerm] = useState("pizza");


  return (
    <Router>

      <Navbar setSearchTerm={setSearchTerm} />


      <Routes>

        <Route 
          path="/" 
          element={<Home searchTerm={searchTerm} />} 
        />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/contact" element={<ContactUs />} />

         <Route path="*" element={<Error />} />

      </Routes>


      <Footer />

    </Router>
  )
}

export default App