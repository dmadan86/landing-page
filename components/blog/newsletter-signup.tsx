'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type NewsletterSignupProps = {
  title?: string;
  description?: string;
  variant?: 'inline' | 'card' | 'full-width';
  className?: string;
};

export default function NewsletterSignup({ 
  title = 'Subscribe to our newsletter',
  description = 'Get the latest insights on AI and digital transformation delivered to your inbox.',
  variant = 'card',
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    try {
      // TODO: I need to connect actual newsletter signup function here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (email === 'test@example.com') {
        throw new Error('Subscription failed');
      }
      
      setStatus('success');
      setMessage('Thanks for subscribing! Please check your inbox to confirm your subscription.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
      console.error('Newsletter signup error:', error);
    }
  };

  const getContainerStyles = () => {
    switch (variant) {
      case 'inline':
        return 'flex flex-col md:flex-row items-center gap-4 py-4';
      case 'full-width':
        return 'bg-blue-600 text-white p-8 rounded-xl';
      case 'card':
      default:
        return 'bg-blue-50 p-6 rounded-xl border border-blue-100';
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={`${getContainerStyles()} ${className}`}>
      <div className={`${variant === 'inline' ? 'md:w-1/2' : ''}`}>
        <div className="flex items-center mb-2">
          <Mail className={`h-5 w-5 ${variant === 'full-width' ? 'text-blue-200' : 'text-blue-600'} mr-2`} />
          <h3 className={`text-lg font-bold ${variant === 'full-width' ? 'text-white' : ''}`}>{title}</h3>
        </div>
        
        <p className={`text-sm ${variant === 'full-width' ? 'text-blue-100' : 'text-gray-600'} mb-4`}>
          {description}
        </p>
      </div>
      
      <div className={`${variant === 'inline' ? 'md:w-1/2' : 'w-full'}`}>
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              className={`flex items-start p-4 rounded-lg ${
                variant === 'full-width' ? 'bg-blue-500' : 'bg-green-50 border border-green-100'
              }`}
            >
              <CheckCircle className={`h-5 w-5 ${
                variant === 'full-width' ? 'text-blue-200' : 'text-green-500'
              } mr-2 flex-shrink-0 mt-0.5`} />
              <p className={`text-sm ${
                variant === 'full-width' ? 'text-blue-50' : 'text-green-800'
              }`}>{message}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              className="space-y-3"
            >
              {status === 'error' && (
                <div className={`flex items-start p-4 rounded-lg ${
                  variant === 'full-width' ? 'bg-blue-500' : 'bg-red-50 border border-red-100'
                }`}>
                  <AlertCircle className={`h-5 w-5 ${
                    variant === 'full-width' ? 'text-blue-200' : 'text-red-500'
                  } mr-2 flex-shrink-0 mt-0.5`} />
                  <p className={`text-sm ${
                    variant === 'full-width' ? 'text-blue-50' : 'text-red-800'
                  }`}>{message}</p>
                </div>
              )}
              
              <div className={`flex ${variant === 'inline' ? 'flex-row' : 'flex-col sm:flex-row'} gap-2`}>
                <div className="relative flex-grow">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      variant === 'full-width' 
                        ? 'border-blue-500 bg-blue-500 text-white placeholder-blue-200' 
                        : 'border-gray-200 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 ${
                      variant === 'full-width' 
                        ? 'focus:ring-blue-400' 
                        : 'focus:ring-blue-500'
                    } transition-all`}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                
                <Button 
                type="submit" 
                variant={variant === 'full-width' ? 'secondary' : 'default'} 
                className={`
                  py-3 px-6 rounded-lg whitespace-nowrap bg-black text-white hover:bg-gray-800
                  ${variant === 'full-width' ? '' : ''}
                `} 
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : null}
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
        
        <p className={`text-xs mt-3 ${
          variant === 'full-width' ? 'text-blue-200' : 'text-gray-500'
        }`}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}