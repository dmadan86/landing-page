import type { Metadata } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import UtmTracker from '@/components/utm-tracker';

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CoreSight | Your Sales Team’s 24/7 Coach and Practice Partner",
  description: 'Transform your team with AI agents that provide personalized coaching, structured evaluations, and continuous learning—enhancing employee performance at scale.',
  keywords: 'AI training, talent development, employee coaching, performance evaluation, continuous learning, AI agents, knowledge base integration',
  authors: [{ name: 'CoreSight' }],
  creator: 'CoreSight',
  publisher: 'CoreSight',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coresight.net',
    siteName: 'CoreSight',
    title: "CoreSight | Your Sales Team’s 24/7 Coach and Practice Partner",
    description: 'Transform your team with AI agents that provide personalized coaching, structured evaluations, and continuous learning.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CoreSight Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CoreSight | Your Sales Team’s 24/7 Coach and Practice Partner",
    description: 'Transform your team with AI agents that provide personalized coaching, structured evaluations, and continuous learning.',
    images: ['/images/twitter-image.jpg'],
    creator: '@digitalagentsai',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10172A" />
        <link rel="canonical" href="https://coresight.net" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.__NEXT_HYDRATION_MARKER__ = true;
          document.documentElement.classList.add('hydration-pending');
          document.addEventListener('DOMContentLoaded', function() {
            document.documentElement.classList.remove('hydration-pending');
          });
        `}} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRWXH9BB');
            `,
          }}
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "YOUR_INTERCOM_APP_ID"
            };
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/YOUR_INTERCOM_APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `,
          }}
        />

        <style dangerouslySetInnerHTML={{ __html: `
          .hydration-pending [data-nextjs-component] {
            opacity: 0;
          }
          [data-nextjs-component] {
            opacity: 1;
            transition: opacity 0.2s ease-in-out;
          }
        `}} />
      </head>
      <body className="min-h-screen flex flex-col antialiased text-gray-900 bg-gray-50">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TRWXH9BB"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Navbar />
        <UtmTracker />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}