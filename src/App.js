import React from 'react';
import CampsitedDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header.js';
import Footer from './components/Footer';
import './App.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CampsitedDirectoryPage/>
      <Footer/>
    </div>
  );
}

export default App;
