import React, { useState, useEffect } from 'react';
import Content from './Content';

const SwipeComponent = () => {
  const [touchStartX, setTouchStartX] = useState(null);
  const [swipe, setSwipe] = useState(false);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // 움직이는 동안 처리할 필요가 없으므로 비워둡니다.
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distanceX = touchStartX - touchEndX;

    // 스와이프 거리 확인 (50px 이상일 때 스와이프로 간주)
    if (distanceX > 50) {
      console.log('Swiped left');
      setSwipe(true);
    }

    setTouchStartX(null);
  };

  useEffect(() => {
    const handleTouchStartWrapper = (e) => handleTouchStart(e);
    const handleTouchEndWrapper = (e) => handleTouchEnd(e);

    document.addEventListener('touchstart', handleTouchStartWrapper);
    document.addEventListener('touchend', handleTouchEndWrapper);

    return () => {
      document.removeEventListener('touchstart', handleTouchStartWrapper);
      document.removeEventListener('touchend', handleTouchEndWrapper);
    };
  }, [touchStartX]);

  return (
    <div>
      <Content swipe={swipe} onSwipeHandled={() => setSwipe(false)} />
    </div>
  );
};

export default SwipeComponent;
