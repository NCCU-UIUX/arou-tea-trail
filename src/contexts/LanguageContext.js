import React, { createContext, useState, useContext, useEffect } from 'react';

// 創建語言上下文
export const LanguageContext = createContext();

// 語言提供者組件
export const LanguageProvider = ({ children }) => {
  // 從本地存儲中獲取語言設置，默認為中文
  const [language, setLanguage] = useState(() => {
    // 強制設置初始語言為中文
    localStorage.setItem('language', 'zh');
    return 'zh';
  });
  
  // 當語言變更時，保存到本地存儲
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // 切換語言的函數
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'zh' ? 'en' : 'zh');
  };
  
  // 提供語言上下文值
  const contextValue = {
    language,
    setLanguage,
    toggleLanguage,
    isZh: language === 'zh',
    isEn: language === 'en'
  };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定義 Hook，方便在組件中使用語言上下文
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
