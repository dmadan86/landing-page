'use client';

import { useState } from 'react';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon, 
  Check, 
  Mail 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getShareUrls } from '@/lib/blog-utils';
import { Button } from '@/components/ui/button';

type ShareButtonsProps = {
  title: string;
  url: string;
  variant?: 'vertical' | 'horizontal';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export default function ShareButtons({ 
  title, 
  url, 
  variant = 'horizontal',
  showLabel = true,
  size = 'md'
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const shareUrls = getShareUrls(title, url);
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShowTooltip(true);
      
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  const sizeClass = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };
  
  const iconSize = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  return (
    <div className={`flex ${variant === 'vertical' ? 'flex-col space-y-3' : 'space-x-3'}`}>
      {showLabel && (
        <div className={`text-gray-500 text-sm ${variant === 'vertical' ? 'mb-2' : 'mr-2 flex items-center'}`}>
          <Share2 className="h-4 w-4 mr-1" />
          <span>Share</span>
        </div>
      )}
      
      <a 
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={`
          flex items-center justify-center rounded-full 
          bg-gray-100 hover:bg-blue-100 hover:text-blue-600
          transition-colors ${sizeClass[size]}
        `}
      >
        <Facebook size={iconSize[size]} />
      </a>
      
      <a 
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className={`
          flex items-center justify-center rounded-full 
          bg-gray-100 hover:bg-blue-100 hover:text-blue-500
          transition-colors ${sizeClass[size]}
        `}
      >
        <Twitter size={iconSize[size]} />
      </a>
      
      <a 
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={`
          flex items-center justify-center rounded-full 
          bg-gray-100 hover:bg-blue-100 hover:text-blue-700
          transition-colors ${sizeClass[size]}
        `}
      >
        <Linkedin size={iconSize[size]} />
      </a>
      
      <a 
        href={shareUrls.email}
        aria-label="Share via Email"
        className={`
          flex items-center justify-center rounded-full 
          bg-gray-100 hover:bg-blue-100 hover:text-blue-600
          transition-colors ${sizeClass[size]}
        `}
      >
        <Mail size={iconSize[size]} />
      </a>
      
      <div className="relative">
        <button
          onClick={handleCopyLink}
          aria-label="Copy link"
          className={`
            flex items-center justify-center rounded-full 
            ${copied ? 'bg-green-100 text-green-600' : 'bg-gray-100 hover:bg-blue-100 hover:text-blue-600'}
            transition-colors ${sizeClass[size]}
          `}
        >
          {copied ? <Check size={iconSize[size]} /> : <LinkIcon size={iconSize[size]} />}
        </button>
        
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
            >
              Link copied!
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}