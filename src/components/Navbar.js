import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          阿柔茶文化步道
        </Link>
        <div className="nav-links">
          <Link to="/map" className={location.pathname === '/map' ? 'active' : ''}>
            互動導覽地圖
          </Link>
          <Link to="/explore" className={location.pathname === '/explore' ? 'active' : ''}>
            景點分類導覽
          </Link>
          <Link to="/missions" className={location.pathname === '/missions' ? 'active' : ''}>
            我的打卡紀錄
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            關於阿柔
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
