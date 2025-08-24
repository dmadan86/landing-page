"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo/>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link href="/about">
              <Button 
                variant="ghost" 
                className="px-3 rounded-full text-gray-700 hover:text-gray-900"
              >
                About
              </Button>
            </Link>
            
            <Link href="/">
              <Button 
                variant="ghost" 
                className="px-3 rounded-full text-gray-700 hover:text-gray-900"
              >
                Technology
              </Button>
            </Link>
            
            <Link href="/pricing">
              <Button 
                variant="ghost" 
                className="px-3 rounded-full text-gray-700 hover:text-gray-900"
              >
                Pricing
              </Button>
            </Link>

            <Link href="/">
              <Button 
                variant="ghost" 
                className="px-3 rounded-full text-gray-700 hover:text-gray-900"
              >
                Industries
              </Button>
            </Link>
            
            <Link href="https://community.digitalagents.io" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                className="px-3 rounded-full text-gray-700 hover:text-gray-900"
              >
                Community
              </Button>
            </Link>
            
            <Link href="/blog">
              <Button 
                variant="ghost" 
                className="px-3 rounded-full text-gray-700 hover:text-gray-900"
              >
                Blog
              </Button>
            </Link>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link href="https://app.CoreSight.co/login">
              <Button 
                variant="outline"
                className="rounded-full border-gray-300"
              >
                Login
              </Button>
            </Link>
            <Link href="https://app.CoreSight.co/register">
              <Button 
                className="rounded-full shadow-button bg-[#10172A] hover:bg-opacity-90 text-white"
              >
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 space-y-4 bg-white rounded-xl mb-4 shadow-lg"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 space-y-1">
                <Link 
                  href="/about" 
                  className="block px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link 
                  href="/features" 
                  className="block px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className="block px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Pricing
                </Link>
                <Link 
                  href="/calculator" 
                  className="block px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  ROI Calculator
                </Link>
                <Link 
                  href="https://community.digitalagents.io" 
                  className="block px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMenu}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Community
                </Link>
                <Link 
                  href="/blog" 
                  className="block px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </div>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <div className="p-2 pt-0 space-y-3">
                <Link href="https://app.CoreSight.co/login" onClick={toggleMenu}>
                  <Button 
                    variant="outline"
                    className="w-full rounded-lg border-gray-300 mb-4 sm:mb-0"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="https://app.CoreSight.co/register" onClick={toggleMenu}>
                  <Button 
                    className="w-full rounded-lg bg-[#10172A] hover:bg-opacity-90 text-white"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;