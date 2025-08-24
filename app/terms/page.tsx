import Link from "next/link";
import { FileText, FileCode, Award, AlertTriangle, Lock, Scale, Mail } from "lucide-react";

export const metadata = {
  title: 'Terms of Service | CoreSight',
  description: 'Read the terms and conditions for using CoreSight products and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FileText className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Terms of Service</h1>
            <p className="text-gray-600 text-center">Last updated: April 8, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CoreSight website or any of our products or services.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {/* <HandShake className="h-5 w-5 text-blue-600" /> */}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">1. Agreement to Terms</h2>
                    <p>
                      By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FileCode className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">2. Use of Services</h2>
                    <p>
                      Our services are intended for business use. You are responsible for all activities that occur under your account and for maintaining the confidentiality of your account information.
                    </p>
                    <div className="mt-4">
                      <h3 className="text-lg font-bold mb-2">Account Requirements</h3>
                      <p>
                        To use our services, you must:
                      </p>
                      <ul className="list-disc pl-5">
                        <li>Be at least 18 years of age</li>
                        <li>Complete the registration process</li>
                        <li>Provide accurate and complete information</li>
                        <li>Update your information as necessary to keep it current</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">3. Intellectual Property</h2>
                    <p>
                      The content, features, and functionality of our services are owned by CoreSight and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <div className="mt-4">
                      <h3 className="text-lg font-bold mb-2">License</h3>
                      <p>
                        Subject to these Terms, CoreSight grants you a limited, non-exclusive, non-transferable, and revocable license to use our services for your internal business purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">4. User Content</h2>
                    <p>
                      You retain ownership of any content you submit to our services. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, modify, and display the content in connection with our services.
                    </p>
                    <div className="mt-4">
                      <h3 className="text-lg font-bold mb-2">Content Guidelines</h3>
                      <p>
                        You agree not to upload, post, or transmit content that:
                      </p>
                      <ul className="list-disc pl-5">
                        <li>Infringes on any intellectual property rights</li>
                        <li>Violates any law or regulation</li>
                        <li>Is harmful, abusive, defamatory, or invasive of privacy</li>
                        <li>Contains software viruses or any other harmful code</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">5. Limitation of Liability</h2>
                    <p>
                      In no event shall CoreSight be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                    </p>
                    <div className="mt-4">
                      <p>
                        To the maximum extent permitted by law, CoreSight' total liability to you for any damages shall not exceed the amount paid by you, if any, for accessing our services during the twelve (12) months immediately preceding the date of the claim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start h-full">
                    <div className="mr-4 mt-1">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">6. Changes to Terms</h2>
                      <p>
                        We reserve the right to modify these Terms at any time. We will provide notice of any material changes to these Terms.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start h-full">
                    <div className="mr-4 mt-1">
                      <Scale className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">7. Governing Law</h2>
                      <p>
                        These Terms shall be governed by the laws of [State/Country], without regard to its conflict of law provisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">8. Contact Us</h2>
                    <p>
                      If you have any questions about these Terms, please contact us at <Link href="mailto:growth@digitalagents.io" className="text-blue-600 hover:underline">growth@digitalagents.io</Link>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <p className="text-gray-700 font-medium">
                  By using CoreSight services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}