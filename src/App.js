


import React from 'react';
import './app.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Maharashtra from './components/Maharashtra/Maharashtra'
import Andhrapradesh from './components/Andhra/Andhra'
import Karnataka from './components/Karnataka/Karnataka'
import Madhyapradesh from './components/Madhya/Madhya'
import Rajasthan from './components/Rajasthan/Rajasthan'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Main /><Footer /></>} />
        <Route path="/main" element={<Main />} />
        <Route path="/maharashtra" element={<Maharashtra />} />
        <Route path="/rajsthan" element={<Rajasthan />} />
        <Route path="/andhra" element={<Andhrapradesh />} />
        <Route path="/karnataka" element={<Karnataka />} />
        <Route path="/madhya" element={<Madhyapradesh />} />
         <Route path="/contact"  element={<Footer/>}/> 
      </Routes>
    </Router>
  );
};

export default App;




