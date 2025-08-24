'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      router.push(`/blog/search?query=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/blog');
    }
  }, [searchQuery, router]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (searchQuery === initialQuery) return;
    
    setIsTyping(true);
    const timeoutId = setTimeout(() => {
      setIsTyping(false);
      if (searchQuery.trim() && searchQuery.trim().length >= 3) {
        handleSearch();
      }
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, handleSearch, initialQuery]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div 
        className={`relative flex h-14 rounded-full transition-all ${
          isFocused ? 'shadow-md' : 'shadow-sm'
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex-grow">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full h-full px-6 py-3 pl-12 pr-4 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            aria-label="Search blog posts"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          
          {/* <AnimatePresence>
            {searchQuery && (
              <motion.button 
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Clear search"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-4 w-4" />
              </motion.button>
            )}
          </AnimatePresence> */}
        </div>
        
        <Button 
        onClick={handleSearch}
        className="h-full rounded-l-none rounded-r-full px-6 font-medium min-w-[100px] bg-black text-white hover:bg-gray-800"
        disabled={isTyping || !searchQuery.trim()}
      >
        {isTyping ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          'Search'
        )}
      </Button>
      </motion.div>
    </div>
  );
}