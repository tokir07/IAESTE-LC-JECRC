import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import Home from '../components/Home';
import About from '../components/About'; 

export default function App() {
  return (
    <>


      {/* <nav style={{ padding: 12 }}>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
      </nav> 
        //Router testing  */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
