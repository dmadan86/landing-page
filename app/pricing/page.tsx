// app/pricing/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, DollarSign, Clock, Zap, Shield, Users } from 'lucide-react';

export const metadata = {
  title: 'Pricing | CoreSight',
  description: 'Simple, transparent pricing for your AI-powered talent development solution',
};

export default function PricingPage() {
  return (
    <>
      {/* Pricing Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 mb-8">
              One plan with all features included. Only pay for the AI training minutes you need.
            </p>
          </div>
          
          {/* Main Pricing Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-primary-700 text-white p-6 md:p-8 text-center">
                <h2 className="text-3xl font-bold">Standard Plan</h2>
                <p className="text-lg opacity-90 mt-2">All features included for every user</p>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-end justify-center gap-6 md:gap-12 mb-8">
                  <div className="text-center">
                    <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">Monthly</h3>
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold">$50</span>
                      <span className="text-gray-600 ml-2">/user/month</span>
                    </div>
                  </div>
                  
                  <div className="text-center relative">
                    <div className="absolute -top-5 left-0 right-0 text-center">
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">Save 17%</span>
                    </div>
                    <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">Annual</h3>
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold">$500</span>
                      <span className="text-gray-600 ml-2">/user/year</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-8">
                  <div className="flex justify-center items-center mb-4">
                    <Clock className="h-5 w-5 text-primary-700 mr-2" />
                    <span className="font-medium">100 AI minutes included per user/month</span>
                  </div>
                  <p className="text-center text-gray-600 text-sm">
                    Minutes pool across your organization and unused minutes roll over for up to 3 months
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="font-bold text-lg mb-3 text-primary-700">Platform Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>AI agent creation and management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Knowledge base integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Performance analytics dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Unlimited users and teams</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Custom evaluation reports</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="font-bold text-lg mb-3 text-primary-700">Support & Resources</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Standard implementation support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Access to knowledge base</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Email & chat support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Regular product updates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Community forum access</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                  <Link href="https://app.coresight.net/register">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-8 rounded-full shadow-md bg-primary-700 hover:bg-primary-800 text-white transition-all duration-300"
                    >
                      Start 7-Day Trial
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 rounded-full border-gray-300 hover:bg-gray-50 transition-all duration-300"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Enterprise volume program available for organizations with 100+ users. Contact sales for details.
            </p>
          </div>
        </div>
      </section>

      {/* AI Credit System Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI Credit System</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Pay only for the AI training minutes you need
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-700 text-white">
                      <th className="px-4 py-4 text-left whitespace-nowrap">Usage Type</th>
                      <th className="px-4 py-4 text-left whitespace-nowrap">Rate</th>
                      <th className="px-4 py-4 text-left whitespace-nowrap">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-4 font-medium whitespace-nowrap">Included minutes</td>
                      <td className="px-4 py-4 whitespace-nowrap">100 mins/user/month</td>
                      <td className="px-4 py-4">Pooled across organization</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-4 font-medium whitespace-nowrap">Additional minutes</td>
                      <td className="px-4 py-4 whitespace-nowrap">$0.20/minute</td>
                      <td className="px-4 py-4">Automatic billing</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium whitespace-nowrap">Prepaid packs</td>
                      <td className="px-4 py-4 whitespace-nowrap">Starting at $0.15/minute</td>
                      <td className="px-4 py-4">For predictable usage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary-700 mr-2" />
                  Credit Management
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Minutes pool across the organization for maximum flexibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unused minutes roll over for up to 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Real-time usage dashboard with alerts at 70%, 85%, and 100% thresholds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-700 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Auto-replenishment options with discount incentives</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-primary-700 mr-2" />
                  What's an AI minute?
                </h3>
                <p className="text-gray-700 mb-4">
                  AI minutes measure the active conversation time between your employees and our AI agents during training sessions, evaluations, and coaching interactions.
                </p>
                <p className="text-gray-700">
                  For example, a 15-minute training session with an AI agent would consume 15 AI minutes from your organization's pool, regardless of which employee uses it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value-Add Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Premium Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Optional services to accelerate your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
                <div className="h-12 w-12 bg-primary-700/10 text-primary-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-gray-600 mb-4 flex-grow">Customized setup, admin training, and knowledge base integration</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="text-primary-700 font-bold mb-1">One-time fee</div>
                  <div className="text-2xl font-bold">$5,000</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
                <div className="h-12 w-12 bg-primary-700/10 text-primary-700 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Agent Development</h3>
                <p className="text-gray-600 mb-4 flex-grow">Specialized AI agents built for specific roles or industry use cases</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="text-primary-700 font-bold mb-1">One-time fee</div>
                  <div className="text-2xl font-bold">$3,500-$7,500</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
                <div className="h-12 w-12 bg-primary-700/10 text-primary-700 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integration Development</h3>
                <p className="text-gray-600 mb-4 flex-grow">Custom connectors for your enterprise systems and workflow</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="text-primary-700 font-bold mb-1">One-time fee</div>
                  <div className="text-2xl font-bold">$5,000 per integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">ROI & Value Justification</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How CoreSight delivers measurable return on investment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-primary-700">Cost Comparison</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-[20px] h-5 flex justify-center text-primary-700 mr-2 flex-shrink-0 mt-0.5 font-bold">1.</div>
                    <div>
                      <span className="font-medium block">Traditional training:</span>
                      <span className="text-gray-700">$1,252 per employee annually</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[20px] h-5 flex justify-center text-primary-700 mr-2 flex-shrink-0 mt-0.5 font-bold">2.</div>
                    <div>
                      <span className="font-medium block">Onboarding costs:</span>
                      <span className="text-gray-700">$4,129 per new hire</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[20px] h-5 flex justify-center text-primary-700 mr-2 flex-shrink-0 mt-0.5 font-bold">3.</div>
                    <div>
                      <span className="font-medium block">Manager coaching time:</span>
                      <span className="text-gray-700">5-7 hours/week per direct report</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-primary-700">Measured Customer Outcomes</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold">40%</div>
                    <span className="text-gray-700">Reduction in training time</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold">60%</div>
                    <span className="text-gray-700">Decrease in manager coaching hours</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold">20%</div>
                    <span className="text-gray-700">Performance improvement within 3 months</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold">30%</div>
                    <span className="text-gray-700">Faster ramp time for new hires</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/calculator">
                <Button 
                  size="lg" 
                  className="rounded-full shadow-md bg-primary-700 hover:bg-primary-800 text-white transition-all duration-300"
                >
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">How do AI minutes work?</h3>
                <p className="text-gray-700">
                  AI minutes measure the actual conversation time between your employees and our AI agents. Each plan comes with 100 AI minutes per user per month, which are pooled across your organization. Unused minutes roll over for up to 3 months, and you can purchase additional minutes as needed.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Can I upgrade or downgrade the number of users?</h3>
                <p className="text-gray-700">
                  Yes, you can add users at any time. The additional users will be prorated for the remainder of your billing cycle. You can also reduce users at renewal time. Your AI minute allocation will adjust accordingly.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Is there a limit to how many AI agents I can create?</h3>
                <p className="text-gray-700">
                  No, you can create as many AI agents as you need. Your subscription includes unlimited agent creation and customization. The only limit is on the minutes of active conversation with those agents, which is determined by your AI credit allocation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What happens if I exceed my AI minute allocation?</h3>
                <p className="text-gray-700">
                  If you exceed your included AI minutes, you'll be billed automatically at a rate of $0.20 per additional minute. We provide usage alerts at 70%, 85%, and 100% of your allocation, and you can set up auto-replenishment at discounted rates to ensure uninterrupted service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your team?</h2>
            <p className="text-xl opacity-90 mb-8">
              Start your 7-day trial today and see the difference CoreSight can make.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://app.coresight.net/register">
                <Button 
                  size="lg" 
                  className="rounded-full shadow-md bg-white text-primary-700 hover:bg-gray-100"
                >
                  Start 7-Day Trial
                </Button>
              </Link>
              <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-white bg-black text-white hover:bg-white hover:text-black"
              >
                Talk to Sales
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}