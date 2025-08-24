// components/animated-dashboard.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import FallbackImage from '@/components/ui/fallback-image';

export default function AnimatedDashboard() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative perspective-1200">
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent rounded-xl blur-2xl transition-opacity duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      
      {/* Dashboard Frame */}
      <div 
        className={`relative rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100 transition-all duration-1000 transform ${
          isInView 
            ? 'translate-y-0 opacity-100 rotate-0' 
            : 'translate-y-10 opacity-0 rotate-2'
        }`}
      >
        {/* Floating UI elements that appear before the main dashboard */}
        <div 
          className={`absolute top-4 right-4 z-10 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-10 opacity-0'
          }`}
        >
          Online
        </div>
        
        <div 
          className={`absolute top-4 left-4 z-10 bg-white shadow-md rounded-lg py-1 px-2 flex items-center gap-1.5 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="h-2 w-2 bg-primary-500 rounded-full"></div>
          <span className="text-xs text-gray-700 font-medium">Dashboard</span>
        </div>
        
        {/* Dashboard Image */}
        <div className="relative">
          <FallbackImage 
            src="/images/product_dashboard.png" 
            alt="CoreSight Platform"
            className={`w-full h-auto block transition-all duration-1000 transform ${
              isInView ? 'scale-100 filter-none' : 'scale-105 blur-sm'
            }`}
            fallbackText="Platform Dashboard"
          />
          
          {/* Interactive elements that appear after the dashboard is visible */}
          <div 
            className={`absolute left-[20%] top-[30%] h-16 w-16 bg-white/80 backdrop-blur rounded-lg shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-700 transform cursor-pointer hover:scale-105 ${
              isInView ? 'translate-y-0 opacity-100 delay-1000' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-primary-500"></div>
            </div>
          </div>
          
          <div 
            className={`absolute right-[25%] top-[45%] px-3 py-2 bg-white/80 backdrop-blur rounded-lg shadow-lg border border-gray-100 transition-all duration-700 transform cursor-pointer hover:scale-105 ${
              isInView ? 'translate-y-0 opacity-100 delay-1200' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="h-2 w-20 bg-green-200 rounded-full mb-1"></div>
            <div className="h-1 w-16 bg-gray-200 rounded-full"></div>
          </div>
          
          <div 
            className={`absolute bottom-[20%] left-[30%] h-6 w-24 bg-primary-600 text-white text-xs flex items-center justify-center rounded-full transition-all duration-700 transform cursor-pointer hover:bg-primary-700 ${
              isInView ? 'translate-y-0 opacity-100 delay-1400' : 'translate-y-10 opacity-0'
            }`}
          >
            View Details
          </div>
          
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
      
      {/* Dashboard stats that float in */}
      <div 
        className={`absolute -right-6 -bottom-6 bg-white rounded-lg shadow-xl p-3 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100 delay-1500' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <div>
            <div className="text-xs text-gray-500">Productivity</div>
            <div className="font-bold text-gray-900">+37%</div>
          </div>
        </div>
      </div>
      
      <div 
        className={`absolute -left-6 -top-6 bg-white rounded-lg shadow-xl p-3 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100 delay-1600' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div>
            <div className="text-xs text-gray-500">Active Teams</div>
            <div className="font-bold text-gray-900">12</div>
          </div>
        </div>
      </div>
    </div>
  );
}