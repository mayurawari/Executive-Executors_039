import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index';
import Search from './Search';
import Home from './Home';
import Navbar from '../components/navbar';



const Sidebar = () => {
  return (
    <div>
    <Router>
      <div style={{ display: 'flex', height: '100vh', width:'100%' }}>
        <div style={{ flex: '0 0 20%', backgroundColor: '#f8f9fa', boxShadow: '2px 0 5px rgba(0,0,0,0.1)'}}>
          <Navbar />
        </div>
        <div style={{ flex: '1', padding: '20px', borderLeft: '1px solid #ddd', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/index" element={<Index />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>
  );
}

export default Sidebar;