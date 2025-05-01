import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ThemeExplore.css';
import spotsData from '../data/spots';
import { useLanguage } from '../contexts/LanguageContext';

const ThemeExplore = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // 自定義翻譯函數
  const t = (key, defaultText) => {
    const translations = {
      'themes.tea': {
        zh: '茶文化體驗',
        en: 'Tea Culture Experience'
      },
      'themes.family': {
        zh: '親子輕鬆路線',
        en: 'Family-Friendly Routes'
      },
      'themes.hiking': {
        zh: '健行挑戰之路',
        en: 'Hiking Challenge Routes'
      },
      'themes.story': {
        zh: '故事深度探索',
        en: 'Deep Story Exploration'
      },
      'themes.teaDescription': {
        zh: '探索阿柔茶的製作工藝與文化底蘊，親手體驗採茶、製茶的樂趣。',
        en: 'Explore the craftsmanship and cultural heritage of Arou tea, and experience the joy of picking and making tea.'
      },
      'themes.familyDescription': {
        zh: '適合全家大小的輕鬆路線，沿途有趣味互動與休憩空間。',
        en: 'A relaxing route suitable for the whole family, with interesting interactions and rest areas along the way.'
      },
      'themes.hikingDescription': {
        zh: '挑戰您的體能與毅力，探索阿柔山區的自然風光與生態環境。',
        en: 'Challenge your physical strength and perseverance, and explore the natural scenery and ecological environment of Arou mountain area.'
      },
      'themes.storyDescription': {
        zh: '深入了解阿柔茶的歷史故事與人文風情，聆聽茶農的生活點滴。',
        en: 'Learn about the history and cultural customs of Arou tea, and listen to the life stories of tea farmers.'
      },
      'themes.details': {
        zh: '詳細資訊',
        en: 'Details'
      },
      'themes.viewOnMap': {
        zh: '在地圖上查看',
        en: 'View on Map'
      },
      'map.checkInMission': {
        zh: '打卡任務',
        en: 'Check-in Mission'
      },
      'map.interactiveQuiz': {
        zh: '互動題目',
        en: 'Interactive Quiz'
      }
    };
    
    return translations[key]?.[language] || defaultText || key;
  };
  const [activeTheme, setActiveTheme] = useState('tea');
  const [expandedSpot, setExpandedSpot] = useState(null);
  
  // Get theme from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const theme = params.get('theme');
    if (theme) {
      setActiveTheme(theme);
    }
  }, [location]);
  
  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
    setExpandedSpot(null);
  };
  
  const toggleSpotExpand = (spotId) => {
    if (expandedSpot === spotId) {
      setExpandedSpot(null);
    } else {
      setExpandedSpot(spotId);
    }
  };
  
  const filteredSpots = spotsData.filter(spot => spot.category === activeTheme);
  
  const getThemeTitle = () => {
    switch (activeTheme) {
      case 'tea':
        return t('themes.tea', '茶文化體驗');
      case 'family':
        return t('themes.family', '親子輕鬆路線');
      case 'hiking':
        return t('themes.hiking', '健行挑戰之路');
      case 'story':
        return t('themes.story', '故事深度探索');
      default:
        return '';
    }
  };
  
  const getThemeDescription = () => {
    switch (activeTheme) {
      case 'tea':
        return t('themes.teaDescription', '探索阿柔茶的製作工藝與文化底蘊，親手體驗採茶、製茶的樂趣。');
      case 'family':
        return t('themes.familyDescription', '適合全家大小的輕鬆路線，沿途有趣味互動與休憩空間。');
      case 'hiking':
        return t('themes.hikingDescription', '挑戰您的體能與毅力，探索阿柔山區的自然風光與生態環境。');
      case 'story':
        return t('themes.storyDescription', '深入了解阿柔茶的歷史故事與人文風情，聆聽茶農的生活點滴。');
      default:
        return '';
    }
  };
  
  return (
    <div className="theme-explore">
      <div className="theme-tabs">
        <button 
          className={`theme-tab ${activeTheme === 'tea' ? 'active' : ''}`}
          onClick={() => handleThemeChange('tea')}
        >
          {t('themes.tea')}
        </button>
        <button 
          className={`theme-tab ${activeTheme === 'family' ? 'active' : ''}`}
          onClick={() => handleThemeChange('family')}
        >
          {t('themes.family')}
        </button>
        <button 
          className={`theme-tab ${activeTheme === 'hiking' ? 'active' : ''}`}
          onClick={() => handleThemeChange('hiking')}
        >
          {t('themes.hiking')}
        </button>
        <button 
          className={`theme-tab ${activeTheme === 'story' ? 'active' : ''}`}
          onClick={() => handleThemeChange('story')}
        >
          {t('themes.story')}
        </button>
      </div>
      
      <div className="theme-content">
        <div className="theme-header">
          <h2>{getThemeTitle()}</h2>
          <p>{getThemeDescription()}</p>
        </div>
        
        <div className="spots-list">
          {filteredSpots.map(spot => (
            <div 
              key={spot.id} 
              className={`spot-item ${expandedSpot === spot.id ? 'expanded' : ''}`}
            >
              <div 
                className="spot-header"
                onClick={() => toggleSpotExpand(spot.id)}
              >
                <h3>{spot.name && (spot.name[language] || spot.name.zh || '')}</h3>
                <span className="expand-icon">
                  {expandedSpot === spot.id ? '−' : '+'}
                </span>
              </div>
              
              {expandedSpot === spot.id && (
                <div className="spot-details">
                  <div className="spot-image" style={{backgroundColor: '#e6f2e6'}}></div>
                  <p className="spot-description">{(spot.fullDescription && (spot.fullDescription[language] || spot.fullDescription.zh || '')) || (spot.description && (spot.description[language] || spot.description.zh || ''))}</p>
                  
                  <div className="spot-info-container">
                    <div className="spot-info">
                      <h4>{t('map.checkInMission', '打卡任務')}</h4>
                      <p>{spot.mission && (spot.mission[language] || spot.mission.zh || '')}</p>
                    </div>
                    
                    <div className="spot-info">
                      <h4>{t('map.interactiveQuiz', '互動題目')}</h4>
                      <p>{spot.quiz && spot.quiz.question && (spot.quiz.question[language] || spot.quiz.question.zh || '')}</p>
                      <ul className="quiz-options">
                        {spot.quiz && spot.quiz.options && spot.quiz.options.map((option, index) => {
                          // Safely extract the option text based on current language
                          const optionText = option && (option[language] || option.zh || '');
                          
                          return (
                            <li key={index}>
                              {String.fromCharCode(65 + index)}. {optionText}
                              {index === spot.quiz.correctAnswer && (
                                <span className="correct-answer"> ✓</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="spot-actions">
                    <Link to={`/spot/${spot.id}`} className="btn btn-primary">
                      {t('themes.details', '詳細資訊')}
                    </Link>
                    <Link to={`/map?spotId=${spot.id}`} className="btn btn-secondary">
                      {t('themes.viewOnMap', '在地圖上查看')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeExplore;
