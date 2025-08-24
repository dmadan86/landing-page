import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'About Us | CoreSight',
  description: 'Learn more about CoreSight, our mission, and the team behind the platform',
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CoreSight</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're revolutionizing how organizations train, develop, and empower their employees through AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                CoreSight was founded in 2024 with a clear mission: to transform how organizations develop their most valuable asset — their people. Our team of AI experts, learning specialists, and enterprise software engineers came together to solve a persistent problem we observed across industries.
              </p>
              <p>
                Traditional training methods were failing to deliver sustained results. One-time seminars and static training materials weren't creating the continuous improvement organizations needed. Training was treated as an event rather than an ongoing process, and the results showed it.
              </p>
              <p>
                We saw an opportunity to use advanced AI to create something different: a platform that could deliver personalized coaching at scale, simulate real-world scenarios for practice, and create a continuous learning loop that eliminates the forgetting curve.
              </p>
              <p>
                Today, CoreSight helps organizations across various industries transform their approach to employee development. Our AI agents provide consistent, available, and personalized training that adapts to each employee's needs while giving management the insights they need to track and improve performance over time.
              </p>
              <p>
                We're just getting started on our mission to make world-class training and development accessible to every organization, regardless of size. We believe that better trained employees create better companies, and better companies create a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary-700/10 text-primary-700 mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">People First</h3>
                <p className="text-gray-700">
                  We believe technology should serve people, not the other way around. Every feature we build 
                  starts with understanding human needs and creating solutions that genuinely help.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary-700/10 text-primary-700 mb-6">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
                <p className="text-gray-700">
                  We're never satisfied with the status quo. We constantly explore new possibilities, 
                  experiment with emerging technologies, and push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary-700/10 text-primary-700 mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Measurable Impact</h3>
                <p className="text-gray-700">
                  We focus on creating solutions that deliver quantifiable results. We don't just build 
                  technology that feels good—we build technology that demonstrably improves performance.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary-700/10 text-primary-700 mb-6">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accessible Excellence</h3>
                <p className="text-gray-700">
                  We believe best-in-class training should be available to organizations of all sizes. 
                  We design our platform to be both powerful and approachable, sophisticated yet simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600">The experts behind CoreSight</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <FallbackImage 
                    src="/images/team/ceo.jpg" 
                    alt="CEO Portrait" 
                    className="w-full h-full object-cover"
                    fallbackText="CEO"
                  />
                </div>
                <h3 className="text-xl font-bold">Ram Chella</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <FallbackImage 
                    src="/images/team/cto.jpg" 
                    alt="CTO Portrait" 
                    className="w-full h-full object-cover"
                    fallbackText="CTO"
                  />
                </div>
                <h3 className="text-xl font-bold">Mohamed Haris</h3>
                <p className="text-gray-600">CTO & Co-Founder</p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <FallbackImage 
                    src="/images/team/cpo.jpg" 
                    alt="CPO Portrait" 
                    className="w-full h-full object-cover"
                    fallbackText="CPO"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Davis</h3>
                <p className="text-gray-600">Chief Product Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Join Us CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-8">
              We're looking for passionate people to help us transform how organizations develop talent.
            </p>
            <Link href="/contact">
            <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-white bg-black text-white hover:bg-white hover:text-black"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}