'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { getRelativeTime, calculateReadingTime } from '@/lib/blog-utils';
import { Post } from '@/lib/wordpress-api';

type PopularPostsProps = {
  posts: Post[];
  title?: string;
  showIcon?: boolean;
  limit?: number;
  className?: string;
};

export default function PopularPosts({ 
  posts,
  title = 'Popular Articles',
  showIcon = true,
  limit = 5,
  className = ''
}: PopularPostsProps) {
  const validPosts = posts
    .filter(post => post.title && post.slug)
    .slice(0, limit);
  
  if (validPosts.length === 0) {
    return null;
  }
  
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%239ca3af'%3EDA%3C/text%3E%3C/svg%3E";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center mb-4">
        {showIcon && <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {validPosts.map((post, index) => {
          // Calculate reading time
          const readingTime = calculateReadingTime(post.content);
          
          return (
            <motion.div 
              key={post.id} 
              variants={itemVariants}
              className="group flex gap-3"
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-gray-100"
              >
                {post.featuredImage?.node?.sourceUrl ? (
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="80px"
                    blurDataURL={placeholderImage}
                    placeholder="blur"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400 text-xs">No image</span>
                  </div>
                )}
                
                {/* Position indicator */}
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center">
                  {index + 1}
                </div>
              </Link>
              
              <div className="flex flex-col">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                
                <div className="flex mt-auto text-xs text-gray-500 items-center space-x-2">
                  <span className="capitalize">{getRelativeTime(post.date)}</span>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}