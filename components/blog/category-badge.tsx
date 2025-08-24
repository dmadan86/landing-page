'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type CategoryBadgeProps = {
  category: {
    name: string;
    slug: string;
    count?: number;
  };
  isActive?: boolean;
  showCount?: boolean;
  size?: 'sm' | 'md' | 'lg';
  index?: number;
};

export default function CategoryBadge({ 
  category, 
  isActive = false, 
  showCount = false,
  size = 'md',
  index = 0
}: CategoryBadgeProps) {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: index * 0.05,
        duration: 0.2,
        type: 'spring',
        stiffness: 500,
        damping: 30
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={badgeVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={`/blog/categories/${category.slug}`}>
        <span 
          className={`
            inline-block rounded-full font-medium 
            transition-all duration-200
            ${sizeClasses[size]}
            ${isActive 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }
          `}
        >
          {category.name}
          {showCount && category.count && category.count > 0 && (
            <span className={`ml-1 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
              ({category.count})
            </span>
          )}
        </span>
      </Link>
    </motion.div>
  );
}