import { ChevronUp, FacebookIcon, InstagramIcon, Mail, MapPin, Phone, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import  Link  from 'next/link'
import React, { useState } from 'react'

function Footersection() {
      const [showScrollTop, setShowScrollTop] = useState(false);
      
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
           <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Company Info */}
            <div>
               <div className="flex items-center mb-6">
                {/* <div className="h-20 w-20 relative">
                  <Image
                    src="/logo1.png"
                    alt="The Painting Company Logo"
                    fill
                    className="object-contain"
                  />
                </div> */}
<h3 className="text-lg font-semibold mb-6 relative">
                <span className="relative z-10">The Painting Company</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-500"></span>
              </h3>
            
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Premium painting services for residential, commercial, and
                industrial spaces. Professional, reliable, and passionate about
                quality.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-500 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <FacebookIcon className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-500 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-500 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <TwitterIcon className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                <span className="relative z-10">Quick Links</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-500"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                <span className="relative z-10">Our Services</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-500"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Interior Painting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Exterior Painting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Wall Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Wall Artistry
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Commercial Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-500"></span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-400">
                    123 Painting Lane, Dubai, UAE
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-400">+971 50 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-teal-500 mr-3" />
                  <a
                    href="mailto:info@thepaintingcompany.com"
                    className="text-gray-400"
                  >
                    info@thepaintingcompany.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Bar */}

          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-slate-500 text-sm">
              &copy; 2025{" "}
              <a
                href="https://codestudios.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00878C] hover:text-orange-500 transition-colors"
              >
                The Painting Company.
              </a>
              All rights reserved. | Powered by{" "}
              <a
                href="https://codestudios.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00878C] hover:text-orange-500 transition-colors"
              >
                CodeStudios
              </a>
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
      </footer>
    </>
  )
}

export default Footersection
