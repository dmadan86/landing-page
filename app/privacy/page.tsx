import Link from "next/link";
import { Shield, Lock, FileText, User, ClipboardList, Clock, Globe, Bell, AlertTriangle } from "lucide-react";

export const metadata = {
  title: 'Privacy Policy | CoreSight',
  description: 'Learn about how CoreSight handles your data and protects your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-center">Last updated: April 8, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead">This Privacy Policy describes how CoreSight ("we," "us," or "our") collects, uses, and discloses your information when you use our website, products, and services.</p>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, information we collect automatically when you use our services, and information we obtain from third-party sources.</p>
                    
                    <h3 className="text-lg font-bold mt-4 mb-2">Information You Provide to Us</h3>
                    <p>We collect information you provide when you:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Create an account or register for our services</li>
                      <li>Submit information through our website</li>
                      <li>Communicate with us through email, forms, or other means</li>
                      <li>Upload content to our platform</li>
                    </ul>
                    <p>This may include your name, email address, phone number, company information, payment details, and any other information you choose to provide.</p>
                    
                    <h3 className="text-lg font-bold mt-4 mb-2">Information We Collect Automatically</h3>
                    <p>When you use our services, we automatically collect certain information, including:</p>
                    <ul className="list-disc pl-5">
                      <li>Device information (e.g., IP address, browser type, operating system)</li>
                      <li>Usage information (e.g., pages visited, time spent on pages)</li>
                      <li>Location information</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-5">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Send you technical notices, updates, security alerts, and support messages</li>
                      <li>Communicate with you about products, services, offers, and events</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Detect, prevent, and address fraud and other illegal activities</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <ClipboardList className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">3. Sharing of Information</h2>
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-5">
                      <li>Service providers who perform services on our behalf</li>
                      <li>Business partners and third parties with whom we collaborate</li>
                      <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
                      <li>In response to a legal request if required by law</li>
                      <li>With your consent or at your direction</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">4. Your Rights and Choices</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <ul className="list-disc pl-5">
                      <li>Accessing, updating, or deleting your information</li>
                      <li>Objecting to our processing of your information</li>
                      <li>Requesting restriction of processing</li>
                      <li>Data portability</li>
                      <li>Opting out of marketing communications</li>
                      <li>Managing cookie preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">5. Data Security</h2>
                      <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">6. Data Retention</h2>
                      <p>We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">7. Children's Privacy</h2>
                      <p>Our services are not directed to children under 16, and we do not knowingly collect personal information from children under 16.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">8. International Transfers</h2>
                      <p>Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Bell className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">9. Changes to This Privacy Policy</h2>
                      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">10. Contact Us</h2>
                      <p>If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:growth@coresight.net" className="text-blue-600 hover:underline">growth@coresight.net</Link>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}