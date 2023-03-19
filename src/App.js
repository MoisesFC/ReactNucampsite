import React from 'react';
import CampsitesList from './features/campsites/CampsitesList.js';
import Header from './components/Header.js';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CampsitesList/>
      <Footer/>
    </div>
  );
}

export default App;
