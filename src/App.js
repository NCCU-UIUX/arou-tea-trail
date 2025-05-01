import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Pages
import Home from './pages/Home';
import Map from './pages/Map';
import ThemeExplore from './pages/ThemeExplore';
import MyMissions from './pages/MyMissions';
import About from './pages/About';
import SpotDetail from './pages/SpotDetail';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/explore" element={<ThemeExplore />} />
            <Route path="/missions" element={<MyMissions />} />
            <Route path="/about" element={<About />} />
            <Route path="/spot/:id" element={<SpotDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
