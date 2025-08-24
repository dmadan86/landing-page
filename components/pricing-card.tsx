// components/pricing-card.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  perUserPerMonth?: boolean;
  aiCredits: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export default function PricingCard({
  name,
  price,
  perUserPerMonth = true,
  aiCredits,
  features,
  isPopular = false,
  ctaText,
  ctaLink
}: PricingCardProps) {
  return (
    <div className={`flex flex-col h-full rounded-xl overflow-hidden ${
      isPopular 
        ? 'border-2 border-primary-700 shadow-lg relative' 
        : 'border border-gray-200 hover:shadow-md'
    }`}>
      {isPopular && (
        <div className="bg-primary-700 text-white text-center py-2 text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl md:text-5xl font-bold">{price}</span>
          {perUserPerMonth && (
            <span className="text-base font-normal text-gray-600 ml-2">/user/month</span>
          )}
        </div>
        <div className="text-sm text-gray-500 mb-6">
          {aiCredits} included
        </div>
        <ul className="space-y-4 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-700 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <Link href={ctaLink}>
            <Button 
              className={`w-full py-3 md:py-4 ${
                isPopular 
                  ? 'bg-primary-700 hover:bg-primary-800 text-white'
                  : 'border border-primary-700 bg-white text-primary-700 hover:bg-primary-50'
              }`}
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}