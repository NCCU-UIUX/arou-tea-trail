import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// 導入上下文提供者
import { LanguageProvider } from './contexts/LanguageContext';
import { MissionProvider } from './contexts/MissionContext';

// Pages
import Home from './pages/Home';
import Map from './pages/Map';
import ThemeExplore from './pages/ThemeExplore';
import MyMissions from './pages/MyMissions';
import About from './pages/About';
import SpotDetail from './pages/SpotDetail';

// Components
import Navbar from './components/Navbar';

// 加载指示器组件
const LoadingIndicator = () => (
  <div className="loading-indicator">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <MissionProvider>
        <Suspense fallback={<LoadingIndicator />}>
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
        </Suspense>
      </MissionProvider>
    </LanguageProvider>
  );
}

export default App;
