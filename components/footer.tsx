"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";
import { CONTACT_INFO, EXTERNAL_LINKS } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <Logo className="mb-4" />
            <p className="text-gray-600 text-sm mb-6 max-w-sm">
              CoreSight helps governments, BPOs, sales teams, and staffing firms upskill people in days—not months.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://x.com/digitalagentsai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="X"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/digitalagentsai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/digitalagentsai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.14 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link 
                  href="/feedback" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href={EXTERNAL_LINKS.community}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`mailto:${CONTACT_INFO.email.sales}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {CONTACT_INFO.email.sales}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="text-gray-600 text-sm d-none">
                {CONTACT_INFO.address.company}<br />
                {CONTACT_INFO.address.street}<br />
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
              </li>
            </ul>
            
            <Link href="/contact" className="inline-block mt-4 text-[#10172A] hover:text-blue-800 text-sm font-medium">
              Send us a message →
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} <Link href={`https://coresight.net/`}  className="underline-offset-4 hover:underline" target="_blank">CoreSight</Link> LLC. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;