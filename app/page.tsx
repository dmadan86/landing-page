import TrustedTechnology from "@/components/trusted-technology";
import JoinCommunity from "@/components/join-community";
import Testimonials from "@/components/testimonials";
import HowItWorks from "@/components/how-it-works";
import TrustedIndustory from "@/components/trusted-industory";
import HeroSection from "@/components/hero-section";
import WhatIsCoreSight from "@/components/what-is-job-ready";
import Feedback from "@/components/feedback";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIsCoreSight />
      <TrustedIndustory />
      <HowItWorks />
      <Testimonials />
      <Feedback />
      {/* <JoinCommunity /> */}
      <TrustedTechnology />
    </>
  );
}
