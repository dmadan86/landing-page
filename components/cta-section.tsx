// components/cta-section.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'default' | 'gradient';
}

const CTASection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'default',
}: CTASectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${
      variant === 'gradient' 
        ? 'bg-[#10172A] text-white' 
        : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className={`text-xl ${variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={primaryButtonLink}>
              <Button 
                size="lg" 
                className={`rounded-full ${
                  variant === 'gradient' 
                    ? 'bg-white text-[#10172A] hover:bg-gray-100' 
                    : 'bg-[#10172A] text-white hover:bg-[#10172A]/90'
                }`}
              >
                {primaryButtonText}
              </Button>
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className={`rounded-full ${
                    variant === 'gradient' 
                      ? 'border-white text-white hover:bg-white/10' 
                      : 'border-[#10172A] text-[#10172A] hover:bg-[#10172A]/10'
                  }`}
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;