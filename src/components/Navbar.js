import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
// 導入自定義語言 Hook
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const location = useLocation();
  // 使用自定義語言 Hook
  const { language, setLanguage, toggleLanguage } = useLanguage();
  
  // 翻譯函數
  const t = (key, defaultText) => {
    const translations = {
      'navbar.logo': {
        zh: '阿柔茶文化步道',
        en: 'Arou Tea Trail'
      },
      'navbar.map': {
        zh: '地圖',
        en: 'Map'
      },
      'navbar.explore': {
        zh: '景點分類',
        en: 'Explore'
      },
      'navbar.missions': {
        zh: '我的任務',
        en: 'My Missions'
      },
      'navbar.about': {
        zh: '關於',
        en: 'About'
      },
      'language.en': {
        zh: 'English',
        en: 'English'
      },
      'language.zh': {
        zh: '中文',
        en: '中文'
      }
    };
    
    return translations[key]?.[language] || defaultText || key;
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          {t('navbar.logo')}
        </Link>
        <div className="nav-links">
          <Link to="/map" className={location.pathname === '/map' ? 'active' : ''}>
            {t('navbar.map')}
          </Link>
          <Link to="/explore" className={location.pathname === '/explore' ? 'active' : ''}>
            {t('navbar.explore')}
          </Link>
          <Link to="/missions" className={location.pathname === '/missions' ? 'active' : ''}>
            {t('navbar.missions')}
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            {t('navbar.about')}
          </Link>
          <div className="language-switcher">
            <button 
              onClick={() => setLanguage('en')} 
              className={language === 'en' ? 'active-lang' : ''}
            >
              {t('language.en')}
            </button>
            <span className="lang-divider">|</span>
            <button 
              onClick={() => setLanguage('zh')} 
              className={language === 'zh' ? 'active-lang' : ''}
            >
              {t('language.zh')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
