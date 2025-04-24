"use client"; // Necessary for React hooks in Next.js
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesScetion from "@/components/ServicesScetion";
import GallerySection from "@/components/GallerySection";
import Testmonialsection from "@/components/Testmonialsection";
import ContactSection from "@/components/ContactSection";
import Faqsection from "@/components/Faqsection";
import Footersection from "@/components/Footersection";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
<HeroSection/>

      {/* About Section */}
<AboutSection/>

      {/* Services Section */}
<ServicesScetion/>
      {/* Gallery Section */}
<GallerySection/>
      {/* Testimonials Section */}
<Testmonialsection/>

      {/* Contact Section */}
<ContactSection/>

      {/* FAQ Section */} 
<Faqsection/>

      {/* Footer */}
 <Footersection/>
    </div>
  );
}
