import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import About from './Components/About';
import Circular from './Components/Circular';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/circular" element={<Circular/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
