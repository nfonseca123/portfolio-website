// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

//Components
import NavBar from './components/nav/NavBar';  // Your NavBar component
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home';
import Work from './pages/Work';  
import Skills from './pages/Skills';  
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';

//Home page
import './App.css';

function App() {
  return (
    <Router>  {/* Wrap the app in BrowserRouter to enable routing */}
      <div className="App">
        <NavBar />  {/* Navigation bar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/DeveloperSetup" element={<DeveloperSetup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
