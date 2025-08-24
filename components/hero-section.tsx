import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Clock, Shield, BarChart } from "lucide-react";

const AnimatedDashboard = dynamic(
  () => import("@/components/animated-dashboard"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl overflow-hidden shadow-2xl bg-white h-[500px] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">
          Loading dashboard preview...
        </div>
      </div>
    ),
  }
);

export default function HeroSection() {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-gray-50 via-gray-50 to-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-blue-50/40 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[40%] bg-primary-50/30 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] left-[60%] w-4 h-4 bg-primary-200 rounded-full"></div>
        <div className="absolute top-[80%] left-[30%] w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="absolute top-[25%] left-[10%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute top-[60%] left-[80%] w-5 h-5 bg-primary-100 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-700/10 text-primary-700 text-[0.7rem] sm:text-sm font-medium mb-6 animate-fadeIn">
              <span className="mr-1.5">•</span>
              <span>
                AI-Powered Agents That Make People CoreSight. Instantly.
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeInUp">
              Train 1,000 people like you’d train 1.{" "}
              <span className="text-primary-700 relative inline-block">
                With AI.
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500/30 rounded"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 animate-fadeInUp animation-delay-100">
              CoreSight helps governments, BPOs, sales teams, and staffing
              firms upskill people in days—not months.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fadeInUp animation-delay-200">
              <Link href="https://app.CoreSight.co/register" className="w-10/12 sm:w-auto">
                <Button
                  size="lg"
                  className="rounded-full shadow-lg bg-primary-700 hover:bg-primary-800 text-white transition-all duration-300 hover:shadow-primary-700/20 hover:shadow-xl w-full"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="https://app.CoreSight.co/login" className="w-10/12 sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 w-full"
                >
                  Join the Rapid Reskill Initiative
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start lg:items-center justify-start sm:justify-center lg:justify-start gap-6 text-sm text-gray-600 animate-fadeInUp animation-delay-300 max-w-[14rem] mx-auto sm:mx-0 sm:max-w-none">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary-700/10 text-primary-700">
                  <Clock size={14} />
                </div>
                <span>Setup in minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary-700/10 text-primary-700">
                  <Shield size={14} />
                </div>
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary-700/10 text-primary-700">
                  <BarChart size={14} />
                </div>
                <span>Real-time analytics</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full animate-fadeInUp animation-delay-400">
            <AnimatedDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
