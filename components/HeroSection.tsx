import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/p1.webp"
            alt="Professional painting service"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <div className="p-2 rounded-lg hover:bg-gray-100 transition-all">
                <div className="relative w-[150px] h-[80px] sm:w-[180px] sm:h-[90px] md:w-[220px] md:h-[100px]">
                  <Image
                    src="/logo.png"
                    alt="The Painting Company Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {["about", "services", "gallery", "testimonials", "contact"].map(
                (section) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    className="text-[#00878C] font-medium hover:text-[#005f63] hover:underline underline-offset-4 transition-all duration-200"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#00878C] p-2 rounded hover:bg-[#00878C] hover:text-white transition-all duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-xl w-56 py-2">
            <Link
              href="#about"
              className="block px-4 py-2 text-[#00878C] hover:bg-teal-50"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block px-4 py-2 text-[#00878C] hover:bg-teal-50"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="block px-4 py-2 text-[#00878C] hover:bg-teal-50"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="block px-4 py-2 text-[#00878C] hover:bg-teal-50"
              onClick={closeMobileMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 text-[#00878C] hover:bg-teal-50"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 ">
          <div className="text-center max-w-4xl px-4 ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Precision. Protection. Perfection.
            </h1>
            {/* <p className="text-lg md:text-2xl text-white mb-6">
              Welcome to{" "}
              <span className="font-semibold">The Painting Company</span> — with
              over <strong>20 years</strong> of experience delivering
              high-quality painting services for residential, commercial, and
              industrial spaces.
            </p> */}
            <p className="text-white font-normal md:text-normal mb-8">
              From stylish interiors to durable exterior finishes, our expert
              solutions are designed to last. Looking for reliable painters who
              deliver{" "}
              <span className="">
                on time, on budget, and beyond expectations?
              </span>{" "}
              You're in the right place.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 mt-16 py-4 text-lg rounded-full shadow-lg transition-all duration-300">
              Get a Quote
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection;
