// app/contact/page.tsx
import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | CoreSight',
  description: 'Get in touch with our team to learn more about CoreSight',
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help. Reach out to our team for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary-700/10 p-3 rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 mb-1">Sales:</p>
                        <a href={`mailto:${CONTACT_INFO.email.sales}`} className="text-primary-700 hover:underline">
                          {CONTACT_INFO.email.sales}
                        </a>
                        <p className="text-gray-600 mt-2 mb-1">Support:</p>
                        <a href={`mailto:${CONTACT_INFO.email.support}`} className="text-primary-700 hover:underline">
                          {CONTACT_INFO.email.support}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-700/10 p-3 rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                        <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-primary-700 hover:underline">
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-700/10 p-3 rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600 d-none">
                          {CONTACT_INFO.address.company}<br />
                          {CONTACT_INFO.address.street}<br />
                          {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-700/10 p-3 rounded-lg mr-4">
                        <Clock className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    {/* <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://x.com/digitalagentsai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
                        aria-label="X"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com/company/digitalagentsai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-96 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.0407224030156!2d-96.9604383!3d32.8114346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e82d4f15e9e5f%3A0xfb8ca4aadb6a56c0!2s411%20Dakota%20Trail%2C%20Irving%2C%20TX%2075063!5e0!3m2!1sen!2sus!4v1714424430283!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="411 Dakota Trail, Irving, Texas, USA, 75063"
              aria-label="Map showing location of 411 Dakota Trail, Irving, Texas, USA, 75063"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">How quickly can I get started?</h3>
                <p className="text-gray-700">
                  You can get started with CoreSight immediately after signing up. Our onboarding process is 
                  designed to be quick and user-friendly, allowing you to upload your content and deploy your 
                  first AI agent within hours, not weeks.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Do you offer custom integrations?</h3>
                <p className="text-gray-700">
                  Yes, we offer custom integrations with your existing tools and systems. Our team can work with 
                  you to ensure CoreSight fits seamlessly into your workflow, whether you're using common 
                  platforms or proprietary systems.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What kind of support do you provide?</h3>
                <p className="text-gray-700">
                  We offer different levels of support based on your plan. All customers receive email support, 
                  while higher-tier plans include priority support, dedicated account managers, and custom 
                  onboarding assistance. We're committed to your success with our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}