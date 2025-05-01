import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Map.css';
import spotsData from '../data/spots';

const Map = () => {
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
          全部
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'tea' ? 'active' : ''}`}
          onClick={() => handleFilterClick('tea')}
        >
          茶園
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'family' ? 'active' : ''}`}
          onClick={() => handleFilterClick('family')}
        >
          親子
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'hiking' ? 'active' : ''}`}
          onClick={() => handleFilterClick('hiking')}
        >
          健行
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'story' ? 'active' : ''}`}
          onClick={() => handleFilterClick('story')}
        >
          故事探索
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
            title="阿柔茶文化步道地圖"
          ></iframe>
        </div>
        
        <div className="spots-list">
          <h3>景點列表</h3>
          <p>點擊下方景點查看詳細資訊</p>
          <div className="spots-grid">
            {filteredSpots.map(spot => (
              <div 
                key={spot.id} 
                className={`spot-item ${selectedSpot && selectedSpot.id === spot.id ? 'active' : ''}`}
                onClick={() => handleSpotSelect(spot)}
              >
                <div className={`spot-icon ${spot.category}`}></div>
                <div className="spot-info">
                  <h4>{spot.name}</h4>
                  <span className="spot-category">
                    {spot.category === 'tea' && '茶文化體驗'}
                    {spot.category === 'family' && '親子路線'}
                    {spot.category === 'hiking' && '健行挑戰'}
                    {spot.category === 'story' && '故事探索'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {selectedSpot && (
          <div className="spot-card">
            <h3>{selectedSpot.name}</h3>
            <p>{selectedSpot.description}</p>
            
            <button 
              className={`toggle ${showMission ? 'active' : ''}`}
              onClick={() => setShowMission(!showMission)}
            >
              打卡任務
            </button>
            
            {showMission && (
              <div className="mission active">
                {selectedSpot.mission}
                <button className="btn btn-primary mission-btn">
                  完成任務
                </button>
              </div>
            )}
            
            <button 
              className={`toggle ${showQuiz ? 'active' : ''}`}
              onClick={() => setShowQuiz(!showQuiz)}
            >
              互動題目
            </button>
            
            {showQuiz && (
              <div className="quiz active">
                <p>{selectedSpot.quiz.question}</p>
                <ul>
                  {selectedSpot.quiz.options.map((option, index) => (
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
                      {String.fromCharCode(65 + index)}. {option}
                    </li>
                  ))}
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
