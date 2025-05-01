import React, { createContext, useState, useEffect, useContext } from 'react';
import spotsData from '../data/spots';
import { useLanguage } from './LanguageContext';

const MissionContext = createContext();

export const useMission = () => useContext(MissionContext);

export const MissionProvider = ({ children }) => {
  const [completedMissions, setCompletedMissions] = useState([]);
  const [missionPhotos, setMissionPhotos] = useState({});
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  // Load completed missions from localStorage on component mount
  useEffect(() => {
    const loadMissionData = () => {
      try {
        const savedMissions = localStorage.getItem('completedMissions');
        const savedPhotos = localStorage.getItem('missionPhotos');
        
        if (savedMissions) {
          setCompletedMissions(JSON.parse(savedMissions));
        }
        
        if (savedPhotos) {
          setMissionPhotos(JSON.parse(savedPhotos));
        }
      } catch (error) {
        console.error('Error loading mission data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadMissionData();
  }, []);

  // Save to localStorage whenever completedMissions changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('completedMissions', JSON.stringify(completedMissions));
    }
  }, [completedMissions, loading]);

  // Save to localStorage whenever missionPhotos changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('missionPhotos', JSON.stringify(missionPhotos));
    }
  }, [missionPhotos, loading]);

  // Complete a mission
  const completeMission = (spotId) => {
    if (!completedMissions.includes(spotId)) {
      const updatedMissions = [...completedMissions, spotId];
      setCompletedMissions(updatedMissions);
      return true;
    }
    return false;
  };

  // Save a photo for a mission
  const saveMissionPhoto = (spotId, photoData) => {
    setMissionPhotos(prev => ({
      ...prev,
      [spotId]: photoData
    }));
    
    // Also mark the mission as completed
    if (!completedMissions.includes(spotId)) {
      completeMission(spotId);
    }
  };

  // Check if a mission is completed
  const isMissionCompleted = (spotId) => {
    return completedMissions.includes(spotId);
  };

  // Get photo for a mission
  const getMissionPhoto = (spotId) => {
    return missionPhotos[spotId] || null;
  };

  // Reset all missions (for testing)
  const resetAllMissions = () => {
    setCompletedMissions([]);
    setMissionPhotos({});
    localStorage.removeItem('completedMissions');
    localStorage.removeItem('missionPhotos');
  };

  // For demo purposes - complete a random mission
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
      completeMission(newMissionId);
      return newMissionId;
    }
    return null;
  };

  // Calculate progress percentage
  const getMissionProgress = () => {
    return Math.round((completedMissions.length / spotsData.length) * 100);
  };

  // Get badge status
  const getBadgeStatus = () => {
    const progress = getMissionProgress();
    return {
      explorer: progress >= 25,
      teaMaster: progress >= 50,
      hikingExpert: progress >= 75,
      arouMaster: progress >= 100
    };
  };

  // Get missions by category
  const getMissionsByCategory = (category) => {
    return spotsData
      .filter(spot => spot.category === category)
      .map(spot => ({
        ...spot,
        completed: completedMissions.includes(spot.id),
        hasPhoto: !!missionPhotos[spot.id]
      }));
  };

  // Get all missions with completion status
  const getAllMissionsWithStatus = () => {
    return spotsData.map(spot => ({
      ...spot,
      completed: completedMissions.includes(spot.id),
      hasPhoto: !!missionPhotos[spot.id],
      missionText: spot.mission ? (spot.mission[language] || spot.mission.en || '') : ''
    }));
  };

  return (
    <MissionContext.Provider
      value={{
        completedMissions,
        loading,
        completeMission,
        saveMissionPhoto,
        isMissionCompleted,
        getMissionPhoto,
        resetAllMissions,
        completeRandomMission,
        getMissionProgress,
        getBadgeStatus,
        getMissionsByCategory,
        getAllMissionsWithStatus
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export default MissionContext;
