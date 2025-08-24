import { UserPlus, CheckCircle2, Globe, BarChart, MessageSquare } from "lucide-react";

export default function TrustedIndustory() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-2xl translate-y-32 -translate-x-32"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help organizations across industries transform their workforce
            training with AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Government Agencies - Large card */}
          <div className="lg:row-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="p-4 bg-blue-500 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Government Agencies
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Run large-scale reskilling programs that reach thousands of
              citizens. Deploy AI coaches that work 24/7 to bridge the skills
              gap in your community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                Scale to 10,000+ participants
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                Multi-language support
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                Real-time progress tracking
              </div>
            </div>
          </div>

          {/* Sales Teams */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:border-orange-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-xl text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <BarChart className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Sales Teams
            </h3>
            <p className="text-gray-600">
              Onboard and coach reps in real time with AI-powered role-playing
              scenarios
            </p>
          </div>

          {/* BPOs & Voice Teams */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:border-purple-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-xl text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <MessageSquare className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              BPOs & Voice Teams
            </h3>
            <p className="text-gray-600">
              Reduce training costs and boost QA scores with automated coaching
            </p>
          </div>

          {/* Hiring Agencies */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-xl text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <UserPlus className="h-6 w-6" />
              </div>
              <div className="text-green-500 font-bold text-lg">5x Faster</div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Hiring Agencies
            </h3>
            <p className="text-gray-600">
              Filter, prep, and certify talent with standardized AI assessments
            </p>
          </div>

          {/* Job Seekers */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="text-blue-500 font-bold text-lg">7 Days</div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Job Seekers
            </h3>
            <p className="text-gray-600">
              Become interview-ready in days with personalized AI coaching
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
