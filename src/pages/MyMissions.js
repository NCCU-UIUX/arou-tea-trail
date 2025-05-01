import React, { useState, useEffect } from 'react';
import '../styles/MyMissions.css';
import spotsData from '../data/spots';

const MyMissions = () => {
  const [completedMissions, setCompletedMissions] = useState([]);
  const [activeTab, setActiveTab] = useState('missions');
  
  // Load completed missions from localStorage on component mount
  useEffect(() => {
    const savedMissions = localStorage.getItem('completedMissions');
    if (savedMissions) {
      setCompletedMissions(JSON.parse(savedMissions));
    }
  }, []);
  
  // For demo purposes, let's add a function to complete a random mission
  const completeRandomMission = () => {
    // Get all spot IDs that haven't been completed yet
    const incompleteMissions = spotsData
      .filter(spot => !completedMissions.includes(spot.id))
      .map(spot => spot.id);
    
    if (incompleteMissions.length > 0) {
      // Select a random spot ID from incomplete missions
      const randomIndex = Math.floor(Math.random() * incompleteMissions.length);
      const newMissionId = incompleteMissions[randomIndex];
      
      // Add to completed missions
      const updatedMissions = [...completedMissions, newMissionId];
      setCompletedMissions(updatedMissions);
      
      // Save to localStorage
      localStorage.setItem('completedMissions', JSON.stringify(updatedMissions));
    }
  };
  
  // Calculate progress
  const progress = Math.round((completedMissions.length / spotsData.length) * 100);
  
  // Get completed spots data
  const completedSpots = spotsData.filter(spot => completedMissions.includes(spot.id));
  
  return (
    <div className="my-missions">
      <div className="missions-header">
        <h2>我的打卡紀錄</h2>
        <p>完成任務，收集徽章，探索阿柔茶文化步道的每一個角落！</p>
      </div>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">
          已完成 {completedMissions.length} / {spotsData.length} 個景點 ({progress}%)
        </div>
      </div>
      
      <div className="missions-tabs">
        <button 
          className={`tab-btn ${activeTab === 'missions' ? 'active' : ''}`}
          onClick={() => setActiveTab('missions')}
        >
          打卡任務
        </button>
        <button 
          className={`tab-btn ${activeTab === 'badges' ? 'active' : ''}`}
          onClick={() => setActiveTab('badges')}
        >
          我的徽章
        </button>
      </div>
      
      {activeTab === 'missions' && (
        <div className="missions-list">
          {spotsData.map(spot => {
            const isCompleted = completedMissions.includes(spot.id);
            return (
              <div 
                key={spot.id} 
                className={`mission-item ${isCompleted ? 'completed' : ''}`}
              >
                <div className="mission-status">
                  {isCompleted ? (
                    <div className="status-icon completed-icon">✓</div>
                  ) : (
                    <div className="status-icon incomplete-icon"></div>
                  )}
                </div>
                <div className="mission-content">
                  <h3>{spot.name}</h3>
                  <p>{spot.mission}</p>
                  {!isCompleted && (
                    <button className="btn btn-primary complete-btn">
                      上傳照片完成任務
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Demo button - for testing only */}
          <button 
            className="demo-btn"
            onClick={completeRandomMission}
          >
            模擬完成隨機任務（示範用）
          </button>
        </div>
      )}
      
      {activeTab === 'badges' && (
        <div className="badges-container">
          <div className="badges-grid">
            <div className={`badge ${progress >= 25 ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon explorer-icon"></div>
              <h3>探險家</h3>
              <p>完成 25% 的打卡任務</p>
            </div>
            
            <div className={`badge ${progress >= 50 ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon tea-master-icon"></div>
              <h3>茶藝師</h3>
              <p>完成 50% 的打卡任務</p>
            </div>
            
            <div className={`badge ${progress >= 75 ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon hiker-icon"></div>
              <h3>健行達人</h3>
              <p>完成 75% 的打卡任務</p>
            </div>
            
            <div className={`badge ${progress >= 100 ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon arou-master-icon"></div>
              <h3>阿柔大師</h3>
              <p>完成 100% 的打卡任務</p>
            </div>
          </div>
          
          <div className="rewards-section">
            <h3>獎勵兌換</h3>
            <p>完成所有任務，可至阿柔遊客中心兌換精美紀念品！</p>
            <button 
              className={`btn btn-primary ${progress < 100 ? 'disabled' : ''}`}
              disabled={progress < 100}
            >
              {progress < 100 ? '尚未解鎖' : '兌換獎勵'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMissions;
