import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/SpotDetail.css';
import spotsData from '../data/spots';
import { useMission } from '../contexts/MissionContext';

const SpotDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [spot, setSpot] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { isMissionCompleted, completeMission, saveMissionPhoto } = useMission();
  const [missionCompleted, setMissionCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  
  useEffect(() => {
    // Find the spot by ID
    setIsLoading(true);
    const spotId = parseInt(id);
    const foundSpot = spotsData.find(s => s.id === spotId);
    
    if (foundSpot) {
      setSpot(foundSpot);
      
      // Check if mission is already completed
      if (isMissionCompleted(spotId)) {
        setMissionCompleted(true);
      }
      
      // Simulate loading time for better UX
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      // Handle case when spot is not found
      setIsLoading(false);
      // Redirect to map page after a short delay if spot not found
      const timer = setTimeout(() => {
        navigate('/map');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [id, navigate]);
  
  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };
  
  const handleCompleteMission = () => {
    // Show upload modal first
    setShowUploadModal(true);
  };
  
  const confirmMissionComplete = () => {
    const spotId = parseInt(id);
    
    // In a real app, we would handle the photo upload here
    // For now, we'll simulate it with a placeholder photo data
    const mockPhotoData = {
      timestamp: new Date().toISOString(),
      photoUrl: 'https://placeholder.com/150',
      // In a real implementation, this would be the actual photo data
    };
    
    // Save the mission photo and mark as completed
    saveMissionPhoto(spotId, mockPhotoData);
    setMissionCompleted(true);
    
    // Close the modal
    setShowUploadModal(false);
  };
  
  const cancelUpload = () => {
    setShowUploadModal(false);
  };
  
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{t('common.loading', '載入中...')}</p>
      </div>
    );
  }
  
  if (!spot) {
    return (
      <div className="error-container">
        <p>{t('error.spotNotFound', '找不到此景點')}</p>
        <Link to="/map" className="btn btn-primary">
          {t('common.backToMap', '返回地圖')}
        </Link>
      </div>
    );
  }
  
  // Helper function to get category name moved to the top level of the component for clarity
  const getCategoryNameString = (category) => {
    const language = i18n.language;
    switch (category) {
      case 'tea':
        return language === 'en' ? 'Tea Culture Experience' : '茶文化體驗';
      case 'family':
        return language === 'en' ? 'Family-Friendly Routes' : '親子輕鬆路線';
      case 'hiking':
        return language === 'en' ? 'Hiking Challenge Routes' : '健行挑戰之路';
      case 'story':
        return language === 'en' ? 'Deep Story Exploration' : '故事深度探索';
      default:
        return '';
    }
  };

  // Helper function to get random nearby spots moved to the top level of the component
  const getRandomNearbySpots = (currentId, count = 3) => {
    const otherSpots = spotsData.filter(spot => spot.id !== currentId);
    const shuffled = [...otherSpots].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  return (
    <div className="spot-detail">
      <div className="spot-header">
        <button 
          className="back-button" 
          onClick={() => navigate(-1)}
          aria-label={t('common.back', '返回')}
        >
          <span aria-hidden="true">←</span> {t('common.back', '返回')}
        </button>
      </div>
      
      <div className="spot-hero">
        <div 
          className="spot-image" 
          style={{
            backgroundColor: '#e6f2e6',
            // Removed image path that might be causing errors
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="spot-title">
          <h2>{spot.name[i18n.language] || spot.name.zh}</h2>
          <div className="spot-category">{getCategoryNameString(spot.category)}</div>
        </div>
      </div>
      
      <div className="spot-content">
        <div className="spot-description">
          <h3>{t('spot.details', '景點介紹')}</h3>
          <p>{(spot.fullDescription && (spot.fullDescription[i18n.language] || spot.fullDescription.zh)) || (spot.description && (spot.description[i18n.language] || spot.description.zh))}</p>
          <p>
            {i18n.language === 'en' ? 
              `${spot.name[i18n.language] || spot.name.zh} is an important spot on the Arou Tea Trail that visitors should not miss. 
              It not only showcases the unique natural scenery of the Arou area but also contains a rich cultural heritage. 
              It attracts many visitors every year to visit, learn, and experience.` :
              `阿柔茶文化步道上的${spot.name[i18n.language] || spot.name.zh}是遊客不可錯過的重要景點。
              這裡不僅展現了阿柔地區獨特的自然風光，也蘊含豐富的文化底蘊。
              每年吸引眾多遊客前來參觀、學習和體驗。`
            }
          </p>
        </div>
        
        <div className="spot-sections">
          <div className="spot-section mission-section">
            <h3>{t('spot.checkIn', '打卡任務')}</h3>
            <p>{spot.mission[i18n.language] || spot.mission.zh}</p>
            {missionCompleted ? (
              <div className="mission-complete">
                <div className="complete-icon">✓</div>
                <p>{t('spot.missionCompleted', '任務已完成！')}</p>
              </div>
            ) : (
              <button 
                className="btn btn-primary"
                onClick={handleCompleteMission}
              >
                {t('spot.uploadPhoto', '上傳照片完成任務')}
              </button>
            )}
            
            {showUploadModal && (
              <div className="upload-modal">
                <div className="upload-modal-content">
                  <h4>{t('spot.uploadTitle', '上傳照片')}</h4>
                  <div className="upload-area">
                    <div className="upload-icon">+</div>
                    <p>{t('spot.uploadInstructions', '點擊選擇照片或拖放至此')}</p>
                    <input type="file" accept="image/*" className="file-input" />
                  </div>
                  <div className="upload-actions">
                    <button 
                      className="btn btn-secondary"
                      onClick={cancelUpload}
                    >
                      {t('common.cancel', '取消')}
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={confirmMissionComplete}
                    >
                      {t('common.confirm', '確認')}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="spot-section quiz-section">
            <h3>{t('map.interactiveQuiz', '互動題目')}</h3>
            <p className="quiz-question">{spot.quiz.question[i18n.language] || spot.quiz.question.zh}</p>
            <ul className="quiz-options">
              {spot.quiz.options.map((option, index) => {
                // Safely extract the option text based on language
                const optionText = option && (option[i18n.language] || option.zh || '');
                
                return (
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
                    {String.fromCharCode(65 + index)}. {optionText}
                  </li>
                );
              })}
            </ul>
            {selectedAnswer !== null && (
              <div className="quiz-result">
                {selectedAnswer === spot.quiz.correctAnswer ? (
                  <p className="correct-message">{t('quiz.correct', '答對了！')}</p>
                ) : (
                  <p className="incorrect-message">
                    {t('quiz.incorrect', '答錯了！正確答案是：')} {String.fromCharCode(65 + spot.quiz.correctAnswer)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="nearby-spots">
          <h3>{t('spot.relatedSpots', '附近景點')}</h3>
          <div className="nearby-grid">
            {getRandomNearbySpots(spot.id).map(nearbySpot => (
              <Link 
                key={nearbySpot.id} 
                to={`/spot/${nearbySpot.id}`}
                className="nearby-spot"
              >
                <div 
                  className="nearby-image" 
                  style={{
                    backgroundColor: '#e6f2e6',
                    // Removed image path that might be causing errors
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <h4>{nearbySpot.name[i18n.language] || nearbySpot.name.zh}</h4>
                <p>{getCategoryNameString(nearbySpot.category)}</p>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="spot-actions">
          <Link to="/map" className="btn btn-secondary">
            {t('common.backToMap', '返回地圖')}
          </Link>
          <Link to="/missions" className="btn btn-primary">
            {t('common.viewMissions', '查看我的任務')}
          </Link>
        </div>
      </div>
    </div>
  );
};

// External helper functions moved inside the component to avoid scope issues

export default SpotDetail;
