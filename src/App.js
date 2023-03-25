import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import React from 'react';
import CampsitedDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header.js';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import Footer from './components/Footer';
import './App.css';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/directory' element={<CampsitedDirectoryPage />} />
        <Route path='/directory/:campsiteId' element={<CampsiteDetailPage />} />
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
