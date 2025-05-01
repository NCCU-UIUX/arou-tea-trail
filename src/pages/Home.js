import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
// 導入自定義語言 Hook
import { useLanguage } from '../contexts/LanguageContext';

// 導入圖片資源
import heroBg from '../images/hero-bg.jpg';
import teaIcon from '../images/tea-icon.svg';
import familyIcon from '../images/family-icon.svg';
import hikingIcon from '../images/hiking-icon.svg';
import storyIcon from '../images/story-icon.svg';

const Home = () => {
  // 使用自定義語言 Hook
  const { language } = useLanguage();
  
  // 簡單的翻譯函數
  const t = (key, defaultText) => {
    const translations = {
      'home.title': {
        zh: '探索阿柔茶文化步道',
        en: 'Explore Arou Tea Trail'
      },
      'home.subtitle': {
        zh: '深坑最美的茶文化體驗',
        en: 'The Most Beautiful Tea Culture Experience in Shenkeng'
      },
      'home.explore': {
        zh: '開始探索',
        en: 'Start Exploring'
      },
      'themes.title': {
        zh: '主題活動',
        en: 'Theme Activities'
      },
      'themes.tea': {
        zh: '茶文化體驗',
        en: 'Tea Culture Experience'
      },
      'themes.teaDescription': {
        zh: '體驗阿柔茶的製作過程',
        en: 'Experience the process of making Arou tea'
      },
      'themes.family': {
        zh: '親子輕鬆路線',
        en: 'Family Friendly Route'
      },
      'themes.familyDescription': {
        zh: '適合全家大小的輕鬆路線',
        en: 'A relaxing route suitable for the whole family'
      },
      'themes.hiking': {
        zh: '健行挑戰之路',
        en: 'Hiking Challenge Route'
      },
      'themes.hikingDescription': {
        zh: '挑戰您的體能和毅力',
        en: 'Challenge your physical strength and perseverance'
      },
      'themes.story': {
        zh: '故事深度探索',
        en: 'Story In-Depth Exploration'
      },
      'themes.storyDescription': {
        zh: '深入探索阿柔茶的故事',
        en: 'In-depth exploration of the story of Arou tea'
      },
      'home.featuredSpots': {
        zh: '熱門景點',
        en: 'Featured Spots'
      },
      'home.learnMore': {
        zh: '了解更多',
        en: 'Learn More'
      }
    };
    
    return translations[key]?.[language] || defaultText || key;
  };
  
  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1>{t('home.title')}</h1>
          <p className="tagline">{t('home.subtitle')}</p>
          <Link to="/map" className="btn btn-primary cta-button">{t('home.explore')}</Link>
        </div>
      </div>
      
      <div className="theme-categories">
        <h2>{t('themes.title')}</h2>
        <div className="categories-container">
          <Link to="/explore?theme=tea" className="category-card">
            <div className="category-icon tea-icon">
            <img src={teaIcon} alt="茶文化體驗" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>{t('themes.tea')}</h3>
            <p>{t('themes.teaDescription')}</p>
          </Link>
          
          <Link to="/explore?theme=family" className="category-card">
            <div className="category-icon family-icon">
            <img src={familyIcon} alt="親子輕鬆路線" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>{t('themes.family')}</h3>
            <p>{t('themes.familyDescription')}</p>
          </Link>
          
          <Link to="/explore?theme=hiking" className="category-card">
            <div className="category-icon hiking-icon">
            <img src={hikingIcon} alt="健行挑戰之路" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>{t('themes.hiking')}</h3>
            <p>{t('themes.hikingDescription')}</p>
          </Link>
          
          <Link to="/explore?theme=story" className="category-card">
            <div className="category-icon story-icon">
            <img src={storyIcon} alt="故事深度探索" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>{t('themes.story')}</h3>
            <p>{t('themes.storyDescription')}</p>
          </Link>
        </div>
      </div>
      
      <div className="featured-spots">
        <h2>{t('home.featuredSpots', '熱門景點')}</h2>
        <div className="spots-container">
          {/* 定義每個景點的多語言內容 */}
          {[
            {
              id: 1,
              image: "spot1",
              name: { zh: "金城茶園", en: "Jincheng Tea Garden" },
              description: { 
                zh: "藝術家的手作茶園，堅持無毒、茶如生活工藝。", 
                en: "Artist's handcrafted tea garden, committed to non-toxic farming and tea as a living craft." 
              }
            },
            {
              id: 2,
              image: "spot2",
              name: { zh: "山頂觀景台", en: "Mountain Viewpoint" },
              description: { 
                zh: "360度視野，遠眺城市與山脈的絕佳位置。", 
                en: "360-degree view, excellent spot to overlook the city and mountains." 
              }
            },
            {
              id: 3,
              image: "spot3",
              name: { zh: "古道石階", en: "Ancient Stone Steps" },
              description: { 
                zh: "百年歷史的石階古道，見證阿柔茶運輸的繁榮歲月。", 
                en: "Century-old stone path, witnessing the prosperous years of Arou tea transportation." 
              }
            }
          ].map(spot => (
            <div className="spot-preview" key={spot.id}>
              <div className="spot-image" id={spot.image}></div>
              <h3>{spot.name[language] || spot.name.zh}</h3>
              <p>{spot.description[language] || spot.description.zh}</p>
              <Link to={`/spot/${spot.id}`} className="btn btn-secondary">{t('home.learnMore', '了解更多')}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
