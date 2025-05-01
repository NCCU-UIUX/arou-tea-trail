import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Map.css';
import spotsData from '../data/spots';
import { useLanguage } from '../contexts/LanguageContext';

const Map = () => {
  const { language } = useLanguage();
  
  // 自定義翻譯函數
  const t = (key, defaultText) => {
    const translations = {
      'map.filterAll': {
        zh: '全部',
        en: 'All'
      },
      'map.filterTea': {
        zh: '茶園',
        en: 'Tea Gardens'
      },
      'map.filterFamily': {
        zh: '親子',
        en: 'Family'
      },
      'map.filterHiking': {
        zh: '健行',
        en: 'Hiking'
      },
      'map.filterStory': {
        zh: '故事探索',
        en: 'Story Exploration'
      },
      'map.mapTitle': {
        zh: '阿柔茶文化步道地圖',
        en: 'Arou Tea Culture Trail Map'
      },
      'map.spotsList': {
        zh: '景點列表',
        en: 'Spots List'
      },
      'map.clickToView': {
        zh: '點擊下方景點查看詳細資訊',
        en: 'Click on spots below to view details'
      },
      'map.categoryTea': {
        zh: '茶文化體驗',
        en: 'Tea Culture Experience'
      },
      'map.categoryFamily': {
        zh: '親子路線',
        en: 'Family Route'
      },
      'map.categoryHiking': {
        zh: '健行挑戰',
        en: 'Hiking Challenge'
      },
      'map.categoryStory': {
        zh: '故事探索',
        en: 'Story Exploration'
      },
      'map.checkInMission': {
        zh: '打卡任務',
        en: 'Check-in Mission'
      },
      'map.completeMission': {
        zh: '完成任務',
        en: 'Complete Mission'
      },
      'map.interactiveQuiz': {
        zh: '互動題目',
        en: 'Interactive Quiz'
      }
    };
    
    return translations[key]?.[language] || defaultText || key;
  };
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMission, setShowMission] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  // 使用 useLocation 獲取 URL 參數
  const location = useLocation();
  
  // 從 URL 參數中讀取景點類別和 ID
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const spotId = params.get('spotId');
    
    // 如果有類別參數，設置對應的篩選器
    if (category) {
      setActiveFilter(category);
    }
    
    // 如果有景點 ID 參數，找到並選擇對應的景點
    if (spotId) {
      const spot = spotsData.find(s => s.id === parseInt(spotId));
      if (spot) {
        setSelectedSpot(spot);
      }
    }
  }, [location.search]);
  
  // Google Maps 嵌入式地圖的 URL
  const googleMapsUrl = "https://www.google.com/maps/d/embed?mid=12Sm7DMQB4uIFyuD7wug7vRSdtpOALfU&ll=24.983995802133418%2C121.60638999999999&z=14";
  
  // 直接顯示特定景點的資訊，不再依賴地圖點擊
  const handleSpotSelect = (spot) => {
    setSelectedSpot(spot);
    setShowMission(false);
    setShowQuiz(false);
    setSelectedAnswer(null);
  };
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // 只有在用戶手動點擊篩選按鈕時才清空選中的景點
    // 這樣從其他頁面跳轉過來時，選中的景點不會被清空
    if (!location.search) {
      setSelectedSpot(null);
    }
  };
  
  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };
  
  const filteredSpots = activeFilter === 'all' 
    ? spotsData 
    : spotsData.filter(spot => spot.category === activeFilter);
  
  return (
    <div className="map-page">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          {t('map.filterAll', '全部')}
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'tea' ? 'active' : ''}`}
          onClick={() => handleFilterClick('tea')}
        >
          {t('map.filterTea', '茶園')}
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'family' ? 'active' : ''}`}
          onClick={() => handleFilterClick('family')}
        >
          {t('map.filterFamily', '親子')}
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'hiking' ? 'active' : ''}`}
          onClick={() => handleFilterClick('hiking')}
        >
          {t('map.filterHiking', '健行')}
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'story' ? 'active' : ''}`}
          onClick={() => handleFilterClick('story')}
        >
          {t('map.filterStory', '故事探索')}
        </button>
      </div>
      
      <div className="map-section">
        <div className="map-container">
          <iframe 
            src={googleMapsUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={t('map.mapTitle', '阿柔茶文化步道地圖')}
          ></iframe>
        </div>
        
        <div className="spots-list">
          <h3>{t('map.spotsList', '景點列表')}</h3>
          <p>{t('map.clickToView', '點擊下方景點查看詳細資訊')}</p>
          <div className="spots-grid">
            {filteredSpots.map(spot => (
              <div 
                key={spot.id} 
                className={`spot-item ${selectedSpot && selectedSpot.id === spot.id ? 'active' : ''}`}
                onClick={() => handleSpotSelect(spot)}
              >
                <div className={`spot-icon ${spot.category}`}></div>
                <div className="spot-info">
                  <h4>{spot.name && (spot.name[language] || spot.name.zh || '')}</h4>
                  <span className="spot-category">
                    {spot.category === 'tea' && t('map.categoryTea', '茶文化體驗')}
                    {spot.category === 'family' && t('map.categoryFamily', '親子路線')}
                    {spot.category === 'hiking' && t('map.categoryHiking', '健行挑戰')}
                    {spot.category === 'story' && t('map.categoryStory', '故事探索')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
                {selectedSpot && (
          <div className="spot-card">
            <h3>{selectedSpot.name && (selectedSpot.name[language] || selectedSpot.name.zh || '')}</h3>
            <p>{selectedSpot.description && (selectedSpot.description[language] || selectedSpot.description.zh || '')}</p>
            
            <button 
              className={`toggle ${showMission ? 'active' : ''}`}
              onClick={() => setShowMission(!showMission)}
            >
              {t('map.checkInMission', '打卡任務')}
            </button>
            
            {showMission && (
              <div className="mission active">
                {selectedSpot.mission && (selectedSpot.mission[language] || selectedSpot.mission.zh || '')}
                <button className="btn btn-primary mission-btn">
                  {t('map.completeMission', '完成任務')}
                </button>
              </div>
            )}
            
            <button 
              className={`toggle ${showQuiz ? 'active' : ''}`}
              onClick={() => setShowQuiz(!showQuiz)}
            >
              {t('map.interactiveQuiz', '互動題目')}
            </button>
            
            {showQuiz && selectedSpot.quiz && (
              <div className="quiz active">
                <p>{selectedSpot.quiz.question && (selectedSpot.quiz.question[language] || selectedSpot.quiz.question.zh || '')}</p>
                <ul>
                  {selectedSpot.quiz.options && selectedSpot.quiz.options.map((option, index) => {
                    // Safely extract option text
                    const optionText = option && (option[language] || option.zh || '');
                    
                    return (
                      <li 
                        key={index}
                        className={
                          selectedAnswer === index
                            ? index === selectedSpot.quiz.correctAnswer
                              ? 'correct'
                              : 'incorrect'
                            : ''
                        }
                        onClick={() => handleAnswerClick(index)}
                      >
                        {String.fromCharCode(65 + index)}. {optionText}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
