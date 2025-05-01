import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/About.css';

// 導入圖片資源
import historyImage from '../images/history.jpg';
import natureImage from '../images/nature.jpg';
import communityImage from '../images/community.jpg';

const About = () => {
  const navigate = useNavigate();
  
  // 導航到地圖頁面並顯示對應景點
  const navigateToMapWithSpot = (spotCategory, spotId) => {
    navigate(`/map?category=${spotCategory}${spotId ? `&spotId=${spotId}` : ''}`);
  };
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>關於阿柔茶文化步道</h2>
        <div className="divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-section" onClick={() => navigateToMapWithSpot('story', 3)}>
          <div className="about-image" id="history-image" style={{ backgroundImage: `url(${historyImage})` }}></div>
          <div className="about-text">
            <h3>歷史與文化</h3>
            <p>
              阿柔茶文化步道位於台灣北部山區，擁有超過百年的茶葉種植歷史。
              早期先民在此開墾，利用得天獨厚的氣候與土壤條件，種植出品質優良的茶葉。
              隨著時代變遷，當地居民致力於保存傳統製茶工藝，同時融入現代創新元素，
              讓阿柔茶文化持續傳承並發揚光大。
            </p>
            <p>
              步道沿線保留了許多歷史遺跡，包括古老的石階、傳統茶廠以及先民生活痕跡，
              是了解台灣茶文化發展的重要場域。
            </p>
            <div className="click-hint">點擊查看古道石階地圖位置</div>
          </div>
        </div>
        
        <div className="about-section reverse" onClick={() => navigateToMapWithSpot('hiking', 7)}>
          <div className="about-image" id="nature-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
          <div className="about-text">
            <h3>自然生態</h3>
            <p>
              阿柔步道環境多樣，從低海拔的茶園到高處的原始森林，孕育了豐富的生態系統。
              這裡是多種鳥類、昆蟲和植物的棲息地，四季呈現不同風貌。
            </p>
            <div className="click-hint">點擊查看森林探險區地圖位置</div>
            <p>
              春季可見茶花盛開，夏季綠意盎然，秋季楓葉轉紅，冬季則有雲海奇景。
              沿途設有多處生態解說牌，讓遊客在健行的同時，也能增進對自然的認識與尊重。
            </p>
          </div>
        </div>
        
        <div className="about-section" onClick={() => navigateToMapWithSpot('tea', 6)}>
          <div className="about-image" id="experience-image" style={{ backgroundImage: `url(${communityImage})` }}></div>
          <div className="about-text">
            <h3>體驗活動</h3>
            <p>
              阿柔茶文化步道提供多元的體驗活動，從茶葉採摘、製茶工藝到茶席品茗，
              讓遊客深入了解茶葉從種植到飲用的完整過程。此外，步道也定期舉辦
              文化講座、藝術展覽和季節性活動，豐富遊客的旅遊體驗。
            </p>
            <div className="click-hint">點擊查看茶葉製作坊地圖位置</div>
          </div>
        </div>
        
        <div className="about-section">
          <div className="about-image" id="community-image" style={{ backgroundImage: `url(${communityImage})` }}></div>
          <div className="about-text">
            <h3>社區營造</h3>
            <p>
              阿柔茶文化步道的維護與發展，離不開當地社區居民的共同努力。
              近年來，在政府與民間組織的協助下，居民積極參與步道整建、
              導覽解說培訓以及文化活動舉辦，讓這條百年步道煥發新生。
            </p>
            <p>
              透過社區營造，不僅提升了當地居民的生活品質，也為遊客創造了
              更豐富、更有深度的旅遊體驗。每一位來到阿柔的遊客，都能感受到
              居民的熱情與對這片土地的驕傲。
            </p>
          </div>
        </div>
      </div>
      
      <div className="visit-info">
        <h3>參訪資訊</h3>
        <div className="info-grid">
          <div className="info-item">
            <h4>開放時間</h4>
            <p>全年開放，建議日出至日落期間前往</p>
          </div>
          
          <div className="info-item">
            <h4>交通方式</h4>
            <p>大眾運輸：搭乘公車至阿柔站下車，步行10分鐘可達</p>
            <p>自行開車：導航至「阿柔茶文化步道遊客中心」，有免費停車場</p>
          </div>
          
          <div className="info-item">
            <h4>注意事項</h4>
            <p>請自備飲水及防曬用品</p>
            <p>請勿餵食野生動物</p>
            <p>請將垃圾帶離步道</p>
          </div>
          
          <div className="info-item">
            <h4>聯絡我們</h4>
            <p>電話：02-XXXX-XXXX</p>
            <p>Email：info@arouteatrail.tw</p>
          </div>
        </div>
      </div>
      
      <div className="cta-container">
        <h3>準備好探索阿柔茶文化步道了嗎？</h3>
        <Link to="/map" className="btn btn-primary">開始導覽之旅</Link>
      </div>
    </div>
  );
};

export default About;
