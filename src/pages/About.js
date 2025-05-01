import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/About.css';
import { useLanguage } from '../contexts/LanguageContext';

// 導入圖片資源
import historyImage from '../images/history.jpg';
import natureImage from '../images/nature.jpg';
import communityImage from '../images/community.jpg';

const About = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // 自定義翻譯函數
  const t = (key, defaultText) => {
    const translations = {
      'about.pageTitle': {
        zh: '關於阿柔茶文化步道',
        en: 'About Arou Tea Culture Trail'
      },
      'about.historyTitle': {
        zh: '歷史與文化',
        en: 'History & Culture'
      },
      'about.historyPara1': {
        zh: '阿柔茶文化步道位於台灣北部山區，擁有超過百年的茶葉種植歷史。早期先民在此開墾，利用得天獨厚的氣候與土壤條件，種植出品質優良的茶葉。隨著時代變遷，當地居民致力於保存傳統製茶工藝，同時融入現代創新元素，讓阿柔茶文化持續傳承並發揚光大。',
        en: 'Arou Tea Culture Trail, located in the northern mountains of Taiwan, has a tea cultivation history of over a century. Early settlers cultivated high-quality tea by taking advantage of the favorable climate and soil conditions. As times changed, local residents committed to preserving traditional tea-making crafts while incorporating modern innovative elements, allowing Arou tea culture to continue its legacy.'
      },
      'about.historyPara2': {
        zh: '步道沿線保留了許多歷史遺跡，包括古老的石階、傳統茶廠以及先民生活痕跡，是了解台灣茶文化發展的重要場域。',
        en: 'The trail preserves many historical relics, including ancient stone steps, traditional tea factories, and traces of early settlers\'s lives, making it an important venue for understanding the development of Taiwan\'s tea culture.'
      },
      'about.clickHint': {
        zh: '點擊查看古道石階地圖位置',
        en: 'Click to view the location of ancient stone steps on the map'
      },
      'about.natureTitle': {
        zh: '自然生態',
        en: 'Natural Ecology'
      },
      'about.naturePara1': {
        zh: '阿柔步道環境多樣，從低海拔的茶園到高處的原始森林，孕育了豐富的生態系統。這裡是多種鳥類、昆蟲和植物的棲息地，四季呈現不同風貌。',
        en: 'The Arou Trail features diverse environments, from low-altitude tea gardens to high-altitude pristine forests, nurturing a rich ecosystem. It is home to various birds, insects, and plants, presenting different scenery across the four seasons.'
      },
      'about.forestClickHint': {
        zh: '點擊查看森林探險區地圖位置',
        en: 'Click to view the forest adventure area on the map'
      },
      'about.naturePara2': {
        zh: '春季可見茶花盛開，夏季綠意盎然，秋季楓葉轉紅，冬季則有雲海奇景。沿途設有多處生態解說牌，讓遊客在健行的同時，也能增進對自然的認識與尊重。',
        en: 'In spring, tea flowers bloom; in summer, greenery flourishes; in autumn, maple leaves turn red; and in winter, there are spectacular sea of clouds. Ecological interpretation signs along the way allow visitors to enhance their understanding and respect for nature while hiking.'
      },
      'about.experienceTitle': {
        zh: '體驗活動',
        en: 'Experience Activities'
      },
      'about.experiencePara': {
        zh: '阿柔茶文化步道提供多元的體驗活動，從茶葉採摘、製茶工藝到茶席品茗，讓遊客深入了解茶葉從種植到飲用的完整過程。此外，步道也定期舉辦文化講座、藝術展覽和季節性活動，豐富遊客的旅遊體驗。',
        en: 'Arou Tea Culture Trail offers diverse experience activities, from tea picking and tea-making crafts to tea tasting, allowing visitors to deeply understand the complete process from tea planting to drinking. In addition, the trail regularly holds cultural lectures, art exhibitions, and seasonal activities to enrich visitors\' travel experiences.'
      },
      'about.teaClickHint': {
        zh: '點擊查看茶葉製作坊地圖位置',
        en: 'Click to view the tea workshop location on the map'
      },
      'about.communityTitle': {
        zh: '社區營造',
        en: 'Community Building'
      },
      'about.communityPara1': {
        zh: '阿柔茶文化步道的維護與發展，離不開當地社區居民的共同努力。近年來，在政府與民間組織的協助下，居民積極參與步道整建、導覽解說培訓以及文化活動舉辦，讓這條百年步道煥發新生。',
        en: 'The maintenance and development of Arou Tea Culture Trail cannot be separated from the joint efforts of local community residents. In recent years, with the assistance of government and civil organizations, residents have actively participated in trail renovation, guide training, and cultural activities, giving new life to this century-old trail.'
      },
      'about.communityPara2': {
        zh: '透過社區營造，不僅提升了當地居民的生活品質，也為遊客創造了更豐富、更有深度的旅遊體驗。每一位來到阿柔的遊客，都能感受到居民的熱情與對這片土地的驕傲。',
        en: 'Through community building, it not only improves the quality of life of local residents but also creates a richer and more in-depth travel experience for visitors. Every visitor to Arou can feel the enthusiasm of the residents and their pride in this land.'
      },
      'about.visitInfo': {
        zh: '參訪資訊',
        en: 'Visiting Information'
      },
      'about.openingHours': {
        zh: '開放時間',
        en: 'Opening Hours'
      },
      'about.hoursDetail': {
        zh: '全年開放，建議日出至日落期間前往',
        en: 'Open all year round, recommended to visit from sunrise to sunset'
      },
      'about.transportation': {
        zh: '交通方式',
        en: 'Transportation'
      },
      'about.publicTransport': {
        zh: '大眾運輸：搭乘公車至阿柔站下車，步行10分鐘可達',
        en: 'Public Transport: Take the bus to Arou Station, 10 minutes walk to the trail'
      },
      'about.drivingInfo': {
        zh: '自行開車：導航至「阿柔茶文化步道遊客中心」，有免費停車場',
        en: 'Driving: Navigate to "Arou Tea Culture Trail Visitor Center", free parking available'
      },
      'about.notices': {
        zh: '注意事項',
        en: 'Notices'
      },
      'about.notice1': {
        zh: '請自備飲水及防曬用品',
        en: 'Please bring your own water and sun protection'
      },
      'about.notice2': {
        zh: '請勿餵食野生動物',
        en: 'Do not feed wildlife'
      },
      'about.notice3': {
        zh: '請將垃圾帶離步道',
        en: 'Please take your trash with you'
      },
      'about.contactUs': {
        zh: '聯絡我們',
        en: 'Contact Us'
      },
      'about.phone': {
        zh: '電話：02-XXXX-XXXX',
        en: 'Phone: 02-XXXX-XXXX'
      },
      'about.email': {
        zh: 'Email：info@arouteatrail.tw',
        en: 'Email: info@arouteatrail.tw'
      },
      'about.readyToExplore': {
        zh: '準備好探索阿柔茶文化步道了嗎？',
        en: 'Ready to explore Arou Tea Culture Trail?'
      },
      'about.startTour': {
        zh: '開始導覽之旅',
        en: 'Start the Tour'
      }
    };
    
    return translations[key]?.[language] || defaultText || key;
  };
  
  // 導航到地圖頁面並顯示對應景點
  const navigateToMapWithSpot = (spotCategory, spotId) => {
    navigate(`/map?category=${spotCategory}${spotId ? `&spotId=${spotId}` : ''}`);
  };
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>{t('about.pageTitle', '關於阿柔茶文化步道')}</h2>
        <div className="divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-section" onClick={() => navigateToMapWithSpot('story', 3)}>
          <div className="about-image" id="history-image" style={{ backgroundImage: `url(${historyImage})` }}></div>
          <div className="about-text">
            <h3>{t('about.historyTitle', '歷史與文化')}</h3>
            <p>
              {t('about.historyPara1', '阿柔茶文化步道位於台灣北部山區，擁有超過百年的茶葉種植歷史。早期先民在此開墾，利用得天獨厚的氣候與土壤條件，種植出品質優良的茶葉。隨著時代變遷，當地居民致力於保存傳統製茶工藝，同時融入現代創新元素，讓阿柔茶文化持續傳承並發揚光大。')}
            </p>
            <p>
              {t('about.historyPara2', '步道沿線保留了許多歷史遺跡，包括古老的石階、傳統茶廠以及先民生活痕跡，是了解台灣茶文化發展的重要場域。')}
            </p>
            <div className="click-hint">{t('about.clickHint', '點擊查看古道石階地圖位置')}</div>
          </div>
        </div>
        
        <div className="about-section reverse" onClick={() => navigateToMapWithSpot('hiking', 7)}>
          <div className="about-image" id="nature-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
          <div className="about-text">
            <h3>{t('about.natureTitle', '自然生態')}</h3>
            <p>
              {t('about.naturePara1', '阿柔步道環境多樣，從低海拔的茶園到高處的原始森林，孕育了豐富的生態系統。這裡是多種鳥類、昆蟲和植物的棲息地，四季呈現不同風貌。')}
            </p>
            <div className="click-hint">{t('about.forestClickHint', '點擊查看森林探險區地圖位置')}</div>
            <p>
              {t('about.naturePara2', '春季可見茶花盛開，夏季綠意盎然，秋季楓葉轉紅，冬季則有雲海奇景。沿途設有多處生態解說牌，讓遊客在健行的同時，也能增進對自然的認識與尊重。')}
            </p>
          </div>
        </div>
        
        <div className="about-section" onClick={() => navigateToMapWithSpot('tea', 6)}>
          <div className="about-image" id="experience-image" style={{ backgroundImage: `url(${communityImage})` }}></div>
          <div className="about-text">
            <h3>{t('about.experienceTitle', '體驗活動')}</h3>
            <p>
              {t('about.experiencePara', '阿柔茶文化步道提供多元的體驗活動，從茶葉採摘、製茶工藝到茶席品茗，讓遊客深入了解茶葉從種植到飲用的完整過程。此外，步道也定期舉辦文化講座、藝術展覽和季節性活動，豐富遊客的旅遊體驗。')}
            </p>
            <div className="click-hint">{t('about.teaClickHint', '點擊查看茶葉製作坊地圖位置')}</div>
          </div>
        </div>
        
        <div className="about-section">
          <div className="about-image" id="community-image" style={{ backgroundImage: `url(${communityImage})` }}></div>
          <div className="about-text">
            <h3>{t('about.communityTitle', '社區營造')}</h3>
            <p>
              {t('about.communityPara1', '阿柔茶文化步道的維護與發展，離不開當地社區居民的共同努力。近年來，在政府與民間組織的協助下，居民積極參與步道整建、導覽解說培訓以及文化活動舉辦，讓這條百年步道煥發新生。')}
            </p>
            <p>
              {t('about.communityPara2', '透過社區營造，不僅提升了當地居民的生活品質，也為遊客創造了更豐富、更有深度的旅遊體驗。每一位來到阿柔的遊客，都能感受到居民的熱情與對這片土地的驕傲。')}
            </p>
          </div>
        </div>
      </div>
      
      <div className="visit-info">
        <h3>{t('about.visitInfo', '參訪資訊')}</h3>
        <div className="info-grid">
          <div className="info-item">
            <h4>{t('about.openingHours', '開放時間')}</h4>
            <p>{t('about.hoursDetail', '全年開放，建議日出至日落期間前往')}</p>
          </div>
          
          <div className="info-item">
            <h4>{t('about.transportation', '交通方式')}</h4>
            <p>{t('about.publicTransport', '大眾運輸：搭乘公車至阿柔站下車，步行10分鐘可達')}</p>
            <p>{t('about.drivingInfo', '自行開車：導航至「阿柔茶文化步道遊客中心」，有免費停車場')}</p>
          </div>
          
          <div className="info-item">
            <h4>{t('about.notices', '注意事項')}</h4>
            <p>{t('about.notice1', '請自備飲水及防曬用品')}</p>
            <p>{t('about.notice2', '請勿餵食野生動物')}</p>
            <p>{t('about.notice3', '請將垃圾帶離步道')}</p>
          </div>
          
          <div className="info-item">
            <h4>{t('about.contactUs', '聯絡我們')}</h4>
            <p>{t('about.phone', '電話：02-XXXX-XXXX')}</p>
            <p>{t('about.email', 'Email：info@arouteatrail.tw')}</p>
          </div>
        </div>
      </div>
      
      <div className="cta-container">
        <h3>{t('about.readyToExplore', '準備好探索阿柔茶文化步道了嗎？')}</h3>
        <Link to="/map" className="btn btn-primary">{t('about.startTour', '開始導覽之旅')}</Link>
      </div>
    </div>
  );
};

export default About;
