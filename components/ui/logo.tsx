"use client";

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="w-36 h-auto md:w-44 lg:w-48">
        <Image 
          src="/images/logo.png" 
          alt="CoreSight Logo" 
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;