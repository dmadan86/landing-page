import React from "react";
import FallbackImage from "./ui/fallback-image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <FallbackImage
                  src="/reviewers/reviewer4.png"
                  alt="Client testimonial"
                  className="h-24 w-24 rounded-full mb-4 object-cover"
                  fallbackText="MT"
                />
                <h3 className="text-xl font-bold">Maria Rodriguez</h3>
                <p className="text-gray-600">HR Director, TechScale</p>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "CoreSight transformed our operations. What used to take
                  hours now happens in minutes, and our team's productivity has
                  never been higher. The best part? I can see exactly where
                  we're improving in real-time."
                </blockquote>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">Before CoreSight</p>
                    <p className="font-medium">With CoreSight</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm">
                      20+ hours on routine tasks weekly
                    </p>
                    <p className="text-gray-600 text-sm">
                      4 hours weekly, 80% time saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
