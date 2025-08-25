// app/features/page.tsx
import { FEATURES } from "@/lib/constants";
import {
  MessageSquare,
  Clock,
  Database,
  UserPlus,
  BarChart,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FallbackImage from "@/components/ui/fallback-image";

export const metadata = {
  title: "Features | CoreSight",
  description:
    "Explore the powerful features of CoreSight AI-powered talent development platform",
};

export default function FeaturesPage() {
  const mapIconToComponent = (iconName: string) => {
    const icons = {
      MessageSquare: <MessageSquare className="h-12 w-12" />,
      Clock: <Clock className="h-12 w-12" />,
      Database: <Database className="h-12 w-12" />,
      UserPlus: <UserPlus className="h-12 w-12" />,
      BarChart: <BarChart className="h-12 w-12" />,
      Globe: <Globe className="h-12 w-12" />,
    };
    return (
      icons[iconName as keyof typeof icons] || (
        <CheckCircle className="h-12 w-12" />
      )
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-50/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              CoreSight combines powerful AI with intuitive interfaces to
              deliver a complete talent development solution.
            </p>
            <Link href="https://app.coresight.net/register">
              <Button
                size="lg"
                className="rounded-full shadow-md bg-primary-700 hover:bg-primary-800 text-white transition-all duration-300 hover:shadow-lg group"
              >
                Start 7-Day Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 ${
                index !== 0 ? "border-t border-gray-100" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="h-24 w-24 bg-primary-700/10 text-primary-700 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110 hover:bg-primary-700/20">
                  {mapIconToComponent(feature.icon)}
                </div>
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits?.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start group transition-all duration-300 hover:translate-x-1"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        {benefit}
                      </span>
                    </li>
                  )) ||
                    // Fallback benefits if not defined in the feature
                    [
                      `Enhanced ${feature.title.toLowerCase()} capabilities`,
                      `Seamless integration with existing systems`,
                      `Comprehensive analytics and reporting`,
                    ].map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start group transition-all duration-300 hover:translate-x-1"
                      >
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                        <span className="text-gray-700 group-hover:text-gray-900">
                          {benefit}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div
                className={`rounded-xl overflow-hidden shadow-md relative group ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                {/* Feature image with hover effects */}
                <div className="relative h-full w-full transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
                  <FallbackImage
                    src={feature?.imagePath || "/images/feature-placeholder.png"}
                    alt={feature.title}
                    className="w-full h-full object-contain md:object-cover"
                    fallbackText={feature.title}
                  />

                  {/* Overlay on hover with scale effect */}
                  {/* <div className="absolute inset-0 bg-primary-700/0 group-hover:bg-primary-700/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 px-4 py-2 rounded-full flex items-center font-medium text-primary-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                    </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with enterprise-grade security and performance in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-primary-200">
              <h3 className="text-xl font-bold mb-4 text-primary-700">
                Security & Compliance
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    End-to-end encryption
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    SOC 2 compliance
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    GDPR & CCPA ready
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Regular security audits
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-primary-200">
              <h3 className="text-xl font-bold mb-4 text-primary-700">
                Performance
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    99.9% uptime guarantee
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Global CDN deployment
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Low-latency response times
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Horizontal scaling architecture
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-primary-200">
              <h3 className="text-xl font-bold mb-4 text-primary-700">
                Integration
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    REST API access
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Webhook support
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    SSO authentication
                  </span>
                </li>
                <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-primary-500" />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Popular platform connectors
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to see CoreSight in action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 7-day trial today or schedule a personalized demo with
              our team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://app.coresight.net/register">
                <Button
                  size="lg"
                  className="rounded-full shadow-md bg-white text-primary-700 hover:bg-gray-100 transition-all duration-300 group"
                >
                  Start 7-Day Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-primary-700 transition-all duration-300"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
