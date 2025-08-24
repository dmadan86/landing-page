'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Calendar, User } from 'lucide-react';
import { formatBlogDate, calculateReadingTime } from '@/lib/blog-utils';
import { Post } from '@/lib/wordpress-api';

type BlogCardProps = {
  post: Post;
  index?: number;
  featured?: boolean;
  variant?: 'default' | 'compact' | 'horizontal';
  showReadingTime?: boolean;
  showExcerpt?: boolean;
};

export default function BlogCard({ 
  post, 
  index = 0, 
  featured = false,
  variant = 'default',
  showReadingTime = true,
  showExcerpt = true
}: BlogCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%239ca3af'%3EDA%3C/text%3E%3C/svg%3E";
  
  useEffect(() => {
    setIsVisible(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, '') : '';
  
  const readingTime = calculateReadingTime(post.content);
  
  const primaryCategory = post.categories?.edges?.length > 0 
    ? post.categories.edges[0].node 
    : null;

  const isHorizontal = variant === 'horizontal' || featured;
  const isCompact = variant === 'compact';

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      className={`group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full ${
        isHorizontal ? 'md:flex' : 'flex flex-col'
      }`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <Link 
        href={`/blog/${post.slug}`}
        className={`block overflow-hidden ${
          isHorizontal ? 'md:w-2/5' : ''
        } ${isCompact ? 'aspect-[3/2]' : 'aspect-video'} relative`}
      >
        <div className="absolute inset-0 bg-gray-100">
          <Image
            src={post.featuredImage?.node?.sourceUrl || placeholderImage}
            alt={post.featuredImage?.node?.altText || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={isHorizontal 
              ? "(max-width: 768px) 100vw, 40vw" 
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            blurDataURL={placeholderImage}
            placeholder="blur"
          />
        </div>
        
        {primaryCategory && !isCompact && (
          <div className="absolute top-4 left-4 z-10">
            <Link href={`/blog/categories/${primaryCategory.slug}`}>
              <span className="px-3 py-1 bg-blue-600 bg-opacity-95 text-white text-xs font-medium rounded-full hover:bg-opacity-100 transition-colors">
                {primaryCategory.name}
              </span>
            </Link>
          </div>
        )}
      </Link>
      
      <div className={`p-6 flex flex-col ${isHorizontal ? 'md:w-3/5' : ''} ${isCompact ? 'p-4' : ''}`}>
        {primaryCategory && (isCompact || (isHorizontal && isMobile)) && (
          <Link href={`/blog/categories/${primaryCategory.slug}`} className="mb-2 inline-block">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
              {primaryCategory.name}
            </span>
          </Link>
        )}
        
        <Link href={`/blog/${post.slug}`} className="block group-hover:text-blue-600 transition-colors">
          <h3 className={`font-bold text-gray-900 ${
            featured ? 'text-2xl' : isCompact ? 'text-lg' : 'text-xl'
          } line-clamp-2 mb-2`}>
            {post.title}
          </h3>
        </Link>
        
        {showExcerpt && !isCompact && (
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
            {cleanExcerpt}
          </p>
        )}
        
        <div className={`flex items-center text-sm text-gray-500 mt-auto ${
          isCompact ? 'text-xs' : ''
        }`}>
          <div className="flex items-center">
            <User className={`${isCompact ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
            <span className="truncate max-w-[100px]">
              {post.author?.node?.name || 'CoreSight'}
            </span>
          </div>
          
          <span className="mx-2">·</span>
          
          <div className="flex items-center">
            <Calendar className={`${isCompact ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
            <span>{formatBlogDate(post.date)}</span>
          </div>
          
          {showReadingTime && (
            <>
              <span className="mx-2">·</span>
              <div className="flex items-center">
                <Clock className={`${isCompact ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
                <span>{readingTime} min read</span>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}