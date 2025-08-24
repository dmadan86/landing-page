'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const calculateReadingProgress = () => {
      const contentElement = document.querySelector('article');
      if (!contentElement) return;
      
      const contentBox = contentElement.getBoundingClientRect();
      const contentHeight = contentBox.height;
      const contentOffsetTop = contentBox.top + window.scrollY;
      const windowHeight = window.innerHeight;
      const currentPosition = window.scrollY;
      
      const scrollPosition = currentPosition - contentOffsetTop + windowHeight;
      
      const progressPercentage = Math.min(
        Math.max((scrollPosition * 100) / (contentHeight + windowHeight), 0),
        100
      );
      
      setProgress(Math.floor(progressPercentage));
    };
    
    window.addEventListener('scroll', calculateReadingProgress);
    calculateReadingProgress();
    
    return () => window.removeEventListener('scroll', calculateReadingProgress);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
      <motion.div 
        className="h-full bg-blue-600"
        style={{ width: `${progress}%` }}
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
}