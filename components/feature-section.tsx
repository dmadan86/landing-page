"use client";

import { CheckCircle2 } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'cards' | 'minimal';
  className?: string;
}

const FeatureSection = ({
  title,
  subtitle,
  features,
  columns = 3,
  variant = 'default',
  className = '',
}: FeatureSectionProps) => {
  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </AnimateOnScroll>
        
        <div className={`grid grid-cols-1 ${columnClass} gap-8`}>
          {features.map((feature, index) => {
            if (variant === 'cards') {
              return (
                <AnimateOnScroll 
                  key={index} 
                  animation="fadeUp" 
                  delay={0.1 * index}
                  className="h-full"
                >
                  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm h-full hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      {feature.icon || <CheckCircle2 className="h-6 w-6" />}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            }
            
            if (variant === 'minimal') {
              return (
                <AnimateOnScroll 
                  key={index} 
                  animation="fadeUp" 
                  delay={0.1 * index}
                >
                  <div className="flex items-center">
                    <div className="mr-4 text-blue-600">
                      {feature.icon || <CheckCircle2 className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            }
            
            return (
              <AnimateOnScroll 
                key={index} 
                animation="fadeUp" 
                delay={0.1 * index}
              >
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 text-blue-600">
                      {feature.icon || <CheckCircle2 className="h-6 w-6" />}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;