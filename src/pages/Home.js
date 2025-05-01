import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// 導入圖片資源
import heroBg from '../images/hero-bg.jpg';
import teaIcon from '../images/tea-icon.svg';
import familyIcon from '../images/family-icon.svg';
import hikingIcon from '../images/hiking-icon.svg';
import storyIcon from '../images/story-icon.svg';

const Home = () => {
  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1>阿柔茶文化步道</h1>
          <p className="tagline">探索茶香山林，體驗自然與文化的完美融合</p>
          <Link to="/map" className="btn btn-primary cta-button">開始探索！</Link>
        </div>
      </div>
      
      <div className="theme-categories">
        <h2>探索主題</h2>
        <div className="categories-container">
          <Link to="/explore?theme=tea" className="category-card">
            <div className="category-icon tea-icon">
            <img src={teaIcon} alt="茶文化體驗" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>茶文化體驗</h3>
            <p>探索百年茶園，品味阿柔茶文化的獨特魅力</p>
          </Link>
          
          <Link to="/explore?theme=family" className="category-card">
            <div className="category-icon family-icon">
            <img src={familyIcon} alt="親子輕鬆路線" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>親子輕鬆路線</h3>
            <p>適合全家同行的輕鬆步道，自然教育的最佳選擇</p>
          </Link>
          
          <Link to="/explore?theme=hiking" className="category-card">
            <div className="category-icon hiking-icon">
            <img src={hikingIcon} alt="健行挑戰之路" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>健行挑戰之路</h3>
            <p>挑戰自我，感受山林之美與身心靈的洗滌</p>
          </Link>
          
          <Link to="/explore?theme=story" className="category-card">
            <div className="category-icon story-icon">
            <img src={storyIcon} alt="故事深度探索" style={{ width: '100%', height: '100%' }} />
          </div>
            <h3>故事深度探索</h3>
            <p>深入了解阿柔的歷史文化與在地故事</p>
          </Link>
        </div>
      </div>
      
      <div className="featured-spots">
        <h2>熱門景點</h2>
        <div className="spots-container">
          <div className="spot-preview">
            <div className="spot-image" id="spot1"></div>
            <h3>金城茶園</h3>
            <p>藝術家的手作茶園，堅持無毒、茶如生活工藝。</p>
            <Link to="/spot/1" className="btn btn-secondary">了解更多</Link>
          </div>
          
          <div className="spot-preview">
            <div className="spot-image" id="spot2"></div>
            <h3>山頂觀景台</h3>
            <p>360度視野，遠眺城市與山脈的絕佳位置。</p>
            <Link to="/spot/2" className="btn btn-secondary">了解更多</Link>
          </div>
          
          <div className="spot-preview">
            <div className="spot-image" id="spot3"></div>
            <h3>古道石階</h3>
            <p>百年歷史的石階古道，見證阿柔茶運輸的繁榮歲月。</p>
            <Link to="/spot/3" className="btn btn-secondary">了解更多</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
