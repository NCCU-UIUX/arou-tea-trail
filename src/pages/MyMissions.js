import React, { useState } from 'react';
import '../styles/MyMissions.css';
import { useLanguage } from '../contexts/LanguageContext';
import { useMission } from '../contexts/MissionContext';

const MyMissions = () => {
  const [activeTab, setActiveTab] = useState('missions');
  const { language } = useLanguage();
  const { 
    completedMissions, 
    completeRandomMission, 
    getMissionProgress, 
    getBadgeStatus,
    getAllMissionsWithStatus,
    resetAllMissions
  } = useMission();
  
  // 自定義翻譯函數
  const t = (key, defaultText) => {
    const translations = {
      'missions.title': {
        zh: '我的打卡紀錄',
        en: 'My Check-in Records'
      },
      'missions.subtitle': {
        zh: '完成任務，收集徽章，探索阿柔茶文化步道的每一個角落！',
        en: 'Complete missions, collect badges, and explore every corner of Arou Tea Trail!'
      },
      'missions.progress': {
        zh: '已完成',
        en: 'Completed'
      },
      'missions.spots': {
        zh: '個景點',
        en: 'spots'
      },
      'missions.checkInTasks': {
        zh: '打卡任務',
        en: 'Check-in Tasks'
      },
      'missions.myBadges': {
        zh: '我的徽章',
        en: 'My Badges'
      },
      'missions.uploadPhoto': {
        zh: '上傳照片完成任務',
        en: 'Upload photo to complete mission'
      },
      'missions.simulateCompletion': {
        zh: '模擬完成隨機任務（示範用）',
        en: 'Simulate completing a random mission (for demo)'
      },
      'badges.explorer': {
        zh: '探險家',
        en: 'Explorer'
      },
      'badges.complete25': {
        zh: '完成 25% 的打卡任務',
        en: 'Complete 25% of check-in tasks'
      },
      'badges.teaMaster': {
        zh: '茶藝師',
        en: 'Tea Master'
      },
      'badges.complete50': {
        zh: '完成 50% 的打卡任務',
        en: 'Complete 50% of check-in tasks'
      },
      'badges.hikingExpert': {
        zh: '健行達人',
        en: 'Hiking Expert'
      },
      'badges.complete75': {
        zh: '完成 75% 的打卡任務',
        en: 'Complete 75% of check-in tasks'
      },
      'badges.arouMaster': {
        zh: '阿柔大師',
        en: 'Arou Master'
      },
      'badges.complete100': {
        zh: '完成 100% 的打卡任務',
        en: 'Complete 100% of check-in tasks'
      },
      'rewards.title': {
        zh: '獎勵兌換',
        en: 'Rewards Exchange'
      },
      'rewards.description': {
        zh: '完成所有任務，可至阿柔遊客中心兌換精美紀念品！',
        en: 'Complete all missions to exchange for exquisite souvenirs at Arou Visitor Center!'
      },
      'rewards.locked': {
        zh: '尚未解鎖',
        en: 'Not unlocked yet'
      },
      'rewards.redeem': {
        zh: '兌換獎勵',
        en: 'Redeem rewards'
      }
    };
    
    return translations[key]?.[language] || defaultText || key;
  };
  
  // No need to load from localStorage - handled by MissionContext
  
  // completeRandomMission is now provided by MissionContext
  
  // Get progress from MissionContext
  const progress = getMissionProgress();
  
  // Get badge status
  const badgeStatus = getBadgeStatus();
  
  // No need to get completed spots data separately as we're using getAllMissionsWithStatus directly
  
  return (
    <div className="my-missions">
      <div className="missions-header">
        <h2>{t('missions.title', '我的打卡紀錄')}</h2>
        <p>{t('missions.subtitle', '完成任務，收集徽章，探索阿柔茶文化步道的每一個角落！')}</p>
      </div>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">
          {t('missions.progress', '已完成')} {completedMissions.length} / {getAllMissionsWithStatus().length} {t('missions.spots', '個景點')} ({progress}%)
        </div>
      </div>
      
      <div className="missions-tabs">
        <button 
          className={`tab-btn ${activeTab === 'missions' ? 'active' : ''}`}
          onClick={() => setActiveTab('missions')}
        >
          {t('missions.checkInTasks', '打卡任務')}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'badges' ? 'active' : ''}`}
          onClick={() => setActiveTab('badges')}
        >
          {t('missions.myBadges', '我的徽章')}
        </button>
      </div>
      
      {activeTab === 'missions' && (
        <div className="missions-list">
          {getAllMissionsWithStatus().map(spot => {
            return (
              <div 
                key={spot.id} 
                className={`mission-item ${spot.completed ? 'completed' : ''}`}
              >
                <div className="mission-status">
                  {spot.completed ? (
                    <div className="status-icon completed-icon">✓</div>
                  ) : (
                    <div className="status-icon incomplete-icon"></div>
                  )}
                </div>
                <div className="mission-content">
                  <h3>{spot.name && (spot.name[language] || spot.name.zh || '')}</h3>
                  <p>{spot.mission && (spot.mission[language] || spot.mission.zh || '')}</p>
                  {!spot.completed && (
                    <button className="btn btn-primary complete-btn">
                      {t('missions.uploadPhoto', '上傳照片完成任務')}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Demo buttons - for testing only */}
          <div className="demo-buttons">
            <button 
              className="demo-btn"
              onClick={completeRandomMission}
            >
              {t('missions.simulateCompletion', '模擬完成隨機任務（示範用）')}
            </button>
            <button 
              className="demo-btn reset-btn"
              onClick={resetAllMissions}
            >
              {t('missions.resetAll', '重置所有任務（示範用）')}
            </button>
          </div>
        </div>
      )}
      
      {activeTab === 'badges' && (
        <div className="badges-container">
          <div className="badges-grid">
            <div className={`badge ${badgeStatus.explorer ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon explorer-icon"></div>
              <h3>{t('badges.explorer', '探險家')}</h3>
              <p>{t('badges.complete25', '完成 25% 的打卡任務')}</p>
            </div>
            
            <div className={`badge ${badgeStatus.teaMaster ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon tea-master-icon"></div>
              <h3>{t('badges.teaMaster', '茶藝師')}</h3>
              <p>{t('badges.complete50', '完成 50% 的打卡任務')}</p>
            </div>
            
            <div className={`badge ${badgeStatus.hikingExpert ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon hiker-icon"></div>
              <h3>{t('badges.hikingExpert', '健行達人')}</h3>
              <p>{t('badges.complete75', '完成 75% 的打卡任務')}</p>
            </div>
            
            <div className={`badge ${badgeStatus.arouMaster ? 'unlocked' : 'locked'}`}>
              <div className="badge-icon arou-master-icon"></div>
              <h3>{t('badges.arouMaster', '阿柔大師')}</h3>
              <p>{t('badges.complete100', '完成 100% 的打卡任務')}</p>
            </div>
          </div>
          
          <div className="rewards-section">
            <h3>{t('rewards.title', '獎勵兌換')}</h3>
            <p>{t('rewards.description', '完成所有任務，可至阿柔遊客中心兌換精美紀念品！')}</p>
            <button 
              className={`btn btn-primary ${progress < 100 ? 'disabled' : ''}`}
              disabled={progress < 100}
            >
              {progress < 100 ? t('rewards.locked', '尚未解鎖') : t('rewards.redeem', '兌換獎勵')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMissions;
