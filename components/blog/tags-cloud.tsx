'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';

type Tag = {
  id: string;
  name: string;
  slug: string;
  count?: number;
};

type TagsCloudProps = {
  tags: Tag[];
  maxInitialTags?: number;
  title?: string;
  showIcon?: boolean;
};

export default function TagsCloud({ 
  tags, 
  maxInitialTags = 15,
  title = 'Popular Tags',
  showIcon = true
}: TagsCloudProps) {
  const [showAllTags, setShowAllTags] = useState(false);
  
  if (!tags || tags.length === 0) {
    return null;
  }
  
  const sortedTags = [...tags]
    .filter(tag => tag.count && tag.count > 0)
    .sort((a, b) => (b.count || 0) - (a.count || 0));
  
  if (sortedTags.length === 0) {
    return null;
  }
  
  const visibleTags = showAllTags 
    ? sortedTags 
    : sortedTags.slice(0, maxInitialTags);
  
  const getTagSize = (count: number = 1) => {
    const max = Math.max(...sortedTags.map(t => t.count || 1));
    const min = Math.min(...sortedTags.map(t => t.count || 1));
    
    if (max === min) return 'text-base';
    
    const normalized = (count - min) / (max - min);
    
    if (normalized < 0.2) return 'text-xs';
    if (normalized < 0.4) return 'text-sm';
    if (normalized < 0.6) return 'text-base';
    if (normalized < 0.8) return 'text-lg';
    return 'text-xl';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };
  
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        {showIcon && <Tag className="h-5 w-5 text-blue-600 mr-2" />}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {visibleTags.map((tag) => (
            <motion.div
              key={tag.slug}
              variants={tagVariants}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`/blog/tags/${tag.slug}`}>
                <span 
                  className={`
                    inline-block px-3 py-1 bg-gray-100 text-gray-800 
                    rounded-full hover:bg-gray-200 transition-colors cursor-pointer
                    ${getTagSize(tag.count)}
                  `}
                >
                  {tag.name} 
                  <span className="text-gray-500 text-xs ml-1">({tag.count})</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {sortedTags.length > maxInitialTags && (
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm w-full justify-center"
          onClick={() => setShowAllTags(!showAllTags)}
        >
          {showAllTags ? (
            <>
              Show less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Show all tags <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}