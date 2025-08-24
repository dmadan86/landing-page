'use client';

import { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { extractTableOfContents } from '@/lib/blog-utils';

type TableOfContentsProps = {
  content: string;
  collapsible?: boolean;
  initiallyExpanded?: boolean;
  className?: string;
};

export default function TableOfContents({ 
  content, 
  collapsible = true,
  initiallyExpanded = true,
  className = ''
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const [activeId, setActiveId] = useState<string | null>(null);
  
  useEffect(() => {
    const extractedHeadings = extractTableOfContents(content);
    setHeadings(extractedHeadings);
    
    if (extractedHeadings.length > 0) {
      setActiveId(extractedHeadings[0].id);
    }
  }, [content]);
  
  useEffect(() => {
    if (headings.length === 0) return;
    
    const handleScroll = () => {
      const headingElements = headings.map(heading => 
        document.getElementById(heading.id)
      ).filter(Boolean) as HTMLElement[];
      
      if (headingElements.length === 0) return;
      
      const scrollPosition = window.scrollY + 100;
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);
  
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };
  
  if (headings.length === 0) {
    return null;
  }
  
  return (
    <div className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <List className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-bold">Table of Contents</h3>
        </div>
        
        {collapsible && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={expanded ? 'Collapse table of contents' : 'Expand table of contents'}
          >
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <nav className="space-y-1">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    block w-full text-left px-2 py-1.5 rounded 
                    transition-colors hover:bg-gray-100
                    ${activeId === heading.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}
                    ${heading.level === 2 ? 'font-medium' : ''}
                    ${heading.level === 3 ? 'pl-4 text-sm' : ''}
                    ${heading.level === 4 ? 'pl-6 text-sm' : ''}
                  `}
                >
                  {heading.text}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}