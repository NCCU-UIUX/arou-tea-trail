import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ThemeExplore.css';
import spotsData from '../data/spots';

const ThemeExplore = () => {
  const location = useLocation();
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
        return '茶文化體驗';
      case 'family':
        return '親子輕鬆路線';
      case 'hiking':
        return '健行挑戰之路';
      case 'story':
        return '故事深度探索';
      default:
        return '';
    }
  };
  
  const getThemeDescription = () => {
    switch (activeTheme) {
      case 'tea':
        return '探索百年茶園，品味阿柔茶文化的獨特魅力，體驗傳統製茶工藝。';
      case 'family':
        return '適合全家同行的輕鬆步道，自然教育的最佳選擇，孩子們的戶外樂園。';
      case 'hiking':
        return '挑戰自我，感受山林之美與身心靈的洗滌，各種難度的健行路線。';
      case 'story':
        return '深入了解阿柔的歷史文化與在地故事，探訪古蹟與信仰中心。';
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
          茶文化體驗
        </button>
        <button 
          className={`theme-tab ${activeTheme === 'family' ? 'active' : ''}`}
          onClick={() => handleThemeChange('family')}
        >
          親子輕鬆路線
        </button>
        <button 
          className={`theme-tab ${activeTheme === 'hiking' ? 'active' : ''}`}
          onClick={() => handleThemeChange('hiking')}
        >
          健行挑戰之路
        </button>
        <button 
          className={`theme-tab ${activeTheme === 'story' ? 'active' : ''}`}
          onClick={() => handleThemeChange('story')}
        >
          故事深度探索
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
                <h3>{spot.name}</h3>
                <span className="expand-icon">
                  {expandedSpot === spot.id ? '−' : '+'}
                </span>
              </div>
              
              {expandedSpot === spot.id && (
                <div className="spot-details">
                  <div className="spot-image" style={{backgroundColor: '#e6f2e6'}}></div>
                  <p className="spot-description">{spot.description}</p>
                  
                  <div className="spot-info-container">
                    <div className="spot-info">
                      <h4>打卡任務</h4>
                      <p>{spot.mission}</p>
                    </div>
                    
                    <div className="spot-info">
                      <h4>互動題目</h4>
                      <p>{spot.quiz.question}</p>
                      <ul className="quiz-options">
                        {spot.quiz.options.map((option, index) => (
                          <li key={index}>
                            {String.fromCharCode(65 + index)}. {option}
                            {index === spot.quiz.correctAnswer && (
                              <span className="correct-answer"> ✓</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="spot-actions">
                    <Link to={`/spot/${spot.id}`} className="btn btn-primary">
                      詳細資訊
                    </Link>
                    <Link to={`/map?spot=${spot.id}`} className="btn btn-secondary">
                      在地圖上查看
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
