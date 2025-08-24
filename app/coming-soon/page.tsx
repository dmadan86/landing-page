"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  const launchDate = new Date("2025-05-15T00:00:00");
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);
    setIsSubmitting(true);
    
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('product') || 'general';
      
      let utmSource = urlParams.get('utm_source') || '';
      let utmMedium = urlParams.get('utm_medium') || '';
      let utmCampaign = urlParams.get('utm_campaign') || '';
      let utmTerm = urlParams.get('utm_term') || '';
      let utmContent = urlParams.get('utm_content') || '';
      
      if (typeof window !== 'undefined') {
        if (!utmSource) utmSource = localStorage.getItem('utm_source') || '';
        if (!utmMedium) utmMedium = localStorage.getItem('utm_medium') || '';
        if (!utmCampaign) utmCampaign = localStorage.getItem('utm_campaign') || '';
        if (!utmTerm) utmTerm = localStorage.getItem('utm_term') || '';
        if (!utmContent) utmContent = localStorage.getItem('utm_content') || '';
      }
      
      const webhookUrl = process.env.WAITLIST_GHL_WEBHOOK_URL || '/api/coming-soon-webhook';
      
      console.log("Sending data to:", webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: email.split('@')[0],
          subject: 'Waitlist Signup',
          message: `User signed up for the waitlist from the ${productId} page`,
          productInterest: productId,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_term: utmTerm,
          utm_content: utmContent
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
      
      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">
      <div className="absolute top-6 right-6 z-10">
        <a 
          href="/" 
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="h-5 w-5 text-white" />
        </a>
      </div>
      
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center text-center">
        <div className="mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
              DA
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
          Something Exciting is Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-10">
          We're working on a new AI-powered digital labor solution that will transform how you work. Join our waitlist to be the first to know when we launch.
        </p>
        
        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12 max-w-2xl w-full">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.days}</div>
            <div className="text-blue-200 text-sm md:text-base mt-1">DAYS</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</div>
            <div className="text-blue-200 text-sm md:text-base mt-1">HOURS</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.minutes}</div>
            <div className="text-blue-200 text-sm md:text-base mt-1">MINUTES</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-3xl md:text-5xl font-bold">{timeLeft.seconds}</div>
            <div className="text-blue-200 text-sm md:text-base mt-1">SECONDS</div>
          </div>
        </div>
        
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full h-14 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full pr-36 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-1 top-1 bottom-1 bg-white text-blue-700 rounded-full px-5 font-medium flex items-center transition-transform hover:translate-x-1"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-3 text-sm text-blue-200">
              ✓ Thank you! You've been added to our waitlist.
            </div>
          )}
        </div>
        
        <div className="mt-12">
          <p className="mb-4 text-blue-200">Follow us for updates:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
