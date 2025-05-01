import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/SpotDetail.css';
import spotsData from '../data/spots';

const SpotDetail = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [missionCompleted, setMissionCompleted] = useState(false);
  
  useEffect(() => {
    // Find the spot by ID
    const spotId = parseInt(id);
    const foundSpot = spotsData.find(s => s.id === spotId);
    
    if (foundSpot) {
      setSpot(foundSpot);
      
      // Check if mission is already completed
      const completedMissions = JSON.parse(localStorage.getItem('completedMissions') || '[]');
      if (completedMissions.includes(spotId)) {
        setMissionCompleted(true);
      }
    }
  }, [id]);
  
  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };
  
  const handleCompleteMission = () => {
    const spotId = parseInt(id);
    
    // Get current completed missions from localStorage
    const completedMissions = JSON.parse(localStorage.getItem('completedMissions') || '[]');
    
    // Add this spot if not already completed
    if (!completedMissions.includes(spotId)) {
      const updatedMissions = [...completedMissions, spotId];
      localStorage.setItem('completedMissions', JSON.stringify(updatedMissions));
      setMissionCompleted(true);
    }
  };
  
  if (!spot) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className="spot-detail">
      <div className="spot-hero">
        <div className="spot-image" style={{backgroundColor: '#e6f2e6'}}></div>
        <div className="spot-title">
          <h2>{spot.name}</h2>
          <div className="spot-category">{getCategoryName(spot.category)}</div>
        </div>
      </div>
      
      <div className="spot-content">
        <div className="spot-description">
          <h3>景點介紹</h3>
          <p>{spot.description}</p>
          <p>
            阿柔茶文化步道上的{spot.name}是遊客不可錯過的重要景點。
            這裡不僅展現了阿柔地區獨特的自然風光，也蘊含豐富的文化底蘊。
            每年吸引眾多遊客前來參觀、學習和體驗。
          </p>
        </div>
        
        <div className="spot-sections">
          <div className="spot-section mission-section">
            <h3>打卡任務</h3>
            <p>{spot.mission}</p>
            {missionCompleted ? (
              <div className="mission-complete">
                <div className="complete-icon">✓</div>
                <p>任務已完成！</p>
              </div>
            ) : (
              <button 
                className="btn btn-primary"
                onClick={handleCompleteMission}
              >
                上傳照片完成任務
              </button>
            )}
          </div>
          
          <div className="spot-section quiz-section">
            <h3>互動題目</h3>
            <p className="quiz-question">{spot.quiz.question}</p>
            <ul className="quiz-options">
              {spot.quiz.options.map((option, index) => (
                <li 
                  key={index}
                  className={
                    selectedAnswer === index
                      ? index === spot.quiz.correctAnswer
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
            {selectedAnswer !== null && (
              <div className="quiz-result">
                {selectedAnswer === spot.quiz.correctAnswer ? (
                  <p className="correct-message">答對了！</p>
                ) : (
                  <p className="incorrect-message">
                    答錯了！正確答案是：{String.fromCharCode(65 + spot.quiz.correctAnswer)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="nearby-spots">
          <h3>附近景點</h3>
          <div className="nearby-grid">
            {getRandomNearbySpots(spot.id).map(nearbySpot => (
              <Link 
                key={nearbySpot.id} 
                to={`/spot/${nearbySpot.id}`}
                className="nearby-spot"
              >
                <div className="nearby-image" style={{backgroundColor: '#e6f2e6'}}></div>
                <h4>{nearbySpot.name}</h4>
                <p>{getCategoryName(nearbySpot.category)}</p>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="spot-actions">
          <Link to="/map" className="btn btn-secondary">
            返回地圖
          </Link>
          <Link to="/missions" className="btn btn-primary">
            查看我的任務
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper function to get category name
function getCategoryName(category) {
  switch (category) {
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
}

// Helper function to get random nearby spots
function getRandomNearbySpots(currentId, count = 3) {
  const otherSpots = spotsData.filter(spot => spot.id !== currentId);
  const shuffled = [...otherSpots].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default SpotDetail;
