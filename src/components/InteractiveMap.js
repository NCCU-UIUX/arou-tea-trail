import React, { useEffect, useRef, useState } from 'react';
import '../styles/InteractiveMap.css';

const InteractiveMap = ({ spots, onSpotClick, selectedSpotId }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    // 由於我們沒有實際的 Google Maps API 密鑰，我們將使用模擬地圖
    // 在實際應用中，您需要替換為真實的 Google Maps API 密鑰
    let isMounted = true;
    // 在 effect 中存儲對 mapRef.current 的引用，以便在清理函數中使用
    const mapRefValue = mapRef.current;
    
    const timer = setTimeout(() => {
      if (isMounted) {
        setMapLoaded(true);
        loadSimulatedMap();
      }
    }, 500);

    return () => {
      // 取消定時器並標記組件已卸載
      isMounted = false;
      clearTimeout(timer);
      
      // 清理標記和 DOM 引用
      markersRef.current = [];
      
      // 安全清理地圖容器 - 使用在 effect 中存儲的引用
      if (mapRefValue) {
        mapRefValue.innerHTML = '';
      }
      
      // 重置地圖實例引用
      mapInstanceRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    if (mapLoaded) {
      // 當 spots 數據變化時更新標記
      updateMarkers();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spots, mapLoaded]);

  // 當選中的景點改變時，更新地圖
  useEffect(() => {
    if (mapLoaded && selectedSpotId) {
      const selectedSpot = spots.find(spot => spot.id === selectedSpotId);
      if (selectedSpot) {
        // 找到對應的標記並設置為活躍狀態
        highlightMarker(selectedSpotId);
      }
    }
  }, [selectedSpotId, spots, mapLoaded]);
  
  // 高亮顯示選中的標記
  const highlightMarker = (spotId) => {
    // 在實際的 Google Maps 實現中，這裡會平移地圖到標記位置
    // 在我們的模擬實現中，我們只更新視覺效果
    const markerElements = document.querySelectorAll('.map-marker');
    markerElements.forEach(element => {
      const id = parseInt(element.getAttribute('data-spot-id'));
      if (id === spotId) {
        element.classList.add('active');
        // 確保標記在視野內
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        element.classList.remove('active');
      }
    });
  };

  // 加載模擬地圖（不需要 Google Maps API）
  const loadSimulatedMap = () => {
    if (!mapRef.current) return;
    
    try {
      // 清空地圖容器
      mapRef.current.innerHTML = '';
      
      // 創建模擬地圖背景
      const mapBackground = document.createElement('div');
      mapBackground.className = 'simulated-map-background';
      mapRef.current.appendChild(mapBackground);
      
      // 創建標記容器
      const markersContainer = document.createElement('div');
      markersContainer.className = 'markers-container';
      mapRef.current.appendChild(markersContainer);
      
      // 保存引用
      mapInstanceRef.current = { container: markersContainer };
      
      // 添加標記
      updateMarkers();
    } catch (error) {
      console.error('Error loading simulated map:', error);
    }
  };
  
  // 更新地圖標記
  const updateMarkers = () => {
    if (!mapInstanceRef.current || !mapInstanceRef.current.container) return;
    
    try {
      // 清空現有標記
      mapInstanceRef.current.container.innerHTML = '';
      markersRef.current = [];
      
      // 添加新標記
      spots.forEach(spot => {
      // 確保景點有位置數據（在我們的模擬實現中，我們只需要相對位置）
      if (spot.lat !== undefined && spot.lng !== undefined) {
        // 創建標記元素
        const markerElement = document.createElement('div');
        markerElement.className = 'map-marker';
        markerElement.setAttribute('data-spot-id', spot.id);
        markerElement.setAttribute('data-category', spot.category || 'default');
        
        // 設置標記位置（相對於容器）
        // 我們將經緯度映射到 0-100% 的範圍內
        const left = ((parseFloat(spot.lng) - 121.5) / 0.3) * 100;
        const top = (100 - ((parseFloat(spot.lat) - 24.9) / 0.3) * 100);
        markerElement.style.left = `${Math.min(Math.max(left, 5), 95)}%`;
        markerElement.style.top = `${Math.min(Math.max(top, 5), 95)}%`;
        
        // 根據景點類別選擇不同的圖標
        let iconUrl;
        switch (spot.category) {
          case 'tea':
            iconUrl = '/icons/tea-marker.svg';
            break;
          case 'family':
            iconUrl = '/icons/family-marker.svg';
            break;
          case 'hiking':
            iconUrl = '/icons/hiking-marker.svg';
            break;
          case 'story':
            iconUrl = '/icons/story-marker.svg';
            break;
          default:
            iconUrl = '/icons/default-marker.svg';
        }
        
        // 創建圖標
        const iconElement = document.createElement('img');
        iconElement.src = iconUrl;
        iconElement.alt = spot.name?.zh || '';
        iconElement.className = 'marker-icon';
        markerElement.appendChild(iconElement);
        
        // 添加標題提示
        const titleElement = document.createElement('div');
        titleElement.className = 'marker-title';
        titleElement.textContent = spot.name?.zh || '';
        markerElement.appendChild(titleElement);
        
        // 添加點擊事件
        markerElement.addEventListener('click', () => {
          onSpotClick(spot);
        });
        
        // 將標記添加到容器
        mapInstanceRef.current.container.appendChild(markerElement);
        
        // 保存標記引用
        markersRef.current.push(markerElement);
      }
    });
    } catch (error) {
      console.error('Error updating markers:', error);
    }
  };

  return (
    <div className="interactive-map-container">
      <div ref={mapRef} className="interactive-map">
        {!mapLoaded && (
          <div className="map-loading">
            <div className="loading-spinner"></div>
            <p>載入地圖中...</p>
          </div>
        )}
        {error && (
          <div className="map-error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
