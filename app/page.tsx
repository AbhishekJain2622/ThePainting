"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect, useCallback } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Testimonial data
const galleryImages = [
  "/p5.jpg",
  "/p6.jpg",
  "/p7.jpg",
  "/p8.jpg",
  "/p9.jpg",
 "/p10.jpg",
"/p11.jpg",
"/p12.jpg",
];

const testimonials = [
  {
    id: 1,
    name: "Ahmed R.",
    role: "Villa Owner",
    image: "/p15.jpg",
    content:
      "Professional from start to finish. They transformed our villa with clean, high-quality work. Highly recommended.",
  },
  

  {
    id: 2,
    name: "Sarah L.",
    role: "Property Manager",
    image: "/p16.jpg",
    content: "On-time delivery and flawless finish. Their team really knows what they're doing.",
  },
  {
    id: 3,
    name: "Lina M.",
    role: "Café Owner",
    image: "/p16.jpg",
    content:
      "They understood our vision for the café wall and brought it to life with color and energy. The mural is now the most photographed spot in our shop.",
  },
  {
    id: 4,
    name: "Hassan T.",
    role: "Facilities Manager",
    image: "/p17.jpg",
    content:
      "Reliable, fast, and no mess left behind. I've worked with a few painting companies, but these guys stand out for their professionalism.",
  },
  {
    id: 5,
    name: "Nour A.",
    role: "Marketing Director",
    image: "/p18.jpg",
    content:
      "They turned a dull office hallway into a vibrant branded space. Our team loves it, and so do our clients!",
  },
  {
    id: 6,
    name: "Samiya K.",
    role: "Homeowner",
    image: "/p19.jpg",
    content:
      "The calligraphy they did for our living room wall is absolutely stunning. Subtle, elegant, and meaningful.",
  },
  {
    id: 7,
    name: "Omar F.",
    role: "Real Estate Investor",
    image: "/p20.jpg",
    content:
      "From the first consultation to the final coat, the experience was smooth. Great communication and a beautiful result.",
  },
  {
    id: 8,
    name: "Rita B.",
    role: "Store Manager",
    image: "/p21.jpg",
    content:
      "We hired them for our annual retail refresh. They were quick, flexible with our timing, and the store looked brand new when they finished.",
  },
  {
    id: 9,
    name: "Ayesha D.",
    role: "Homeowner",
    image: "/p22.jpg",
    content:
      "I was worried about repainting with my kids at home, but they were incredibly neat and fast. Great attention to detail too.",
  },
  {
    id: 10,
    name: "Yusuf E.",
    role: "Event Producer",
    image: "/p23.jpg",
    content:
      "A fantastic team with real talent — the graffiti wall they painted for our launch event turned into the highlight of the night.",
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Testimonial carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextTestimonial])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Navigation */}
      <header className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/p1.jpg"
            alt="Professional painting service"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
        </div>

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
  <div className="container mx-auto flex items-center justify-between py-4">
    <div className="flex items-center">
      <div className="flex items-center p-2">
        <div className="h-[60px] w-[60px]">
          <Image
            src="/logo.png"
            alt="The Painting Company Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <span className="ml-3 text-[#00878C] font-semibold text-xl">
          The Painting Company
        </span>
      </div>
    </div>
    <nav className="hidden md:flex space-x-8">
      <Link href="#about" className="text-[#00878C] hover:text-[#006e73] transition-colors">
        About
      </Link>
      <Link href="#services" className="text-[#00878C] hover:text-[#006e73] transition-colors">
        Services
      </Link>
      <Link href="#gallery" className="text-[#00878C] hover:text-[#006e73] transition-colors">
        Gallery
      </Link>
      <Link href="#testimonials" className="text-[#00878C] hover:text-[#006e73] transition-colors">
        Testimonials
      </Link>
      <Link href="#contact" className="text-[#00878C] hover:text-[#006e73] transition-colors">
        Contact
      </Link>
    </nav>
    <Button
      variant="outline"
      className="md:hidden text-[#00878C] border-[#00878C] hover:bg-[#00878C] hover:text-white"
      onClick={toggleMobileMenu}
    >
      Menu
    </Button>
  </div>
</div>





        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 right-4 z-50 bg-gray-800 rounded-lg shadow-lg p-4 w-48">
            <div className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-white hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="text-white hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#testimonials"
                className="text-white hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-teal-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex h-[calc(100vh-80px)] items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Precision. Protection. Perfection.
            </h1>
            <p className="text-lg md:text-2xl text-white mb-6 max-w-2xl mx-auto">
              Welcome to <span className="text-teal-400 font-semibold">The Painting Company</span> — with over{" "}
              <strong>20 years</strong> of experience delivering high-quality painting services for residential,
              commercial, and industrial spaces.
            </p>
            <p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto">
              From stylish interiors to durable exterior finishes, our expert solutions are designed to last. Looking
              for reliable painters who deliver{" "}
              <span className="text-teal-400">on time, on budget, and beyond expectations?</span> You're in the right
              place.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 text-lg rounded-full shadow-lg transition-all duration-300">
              Request a Free Quote
            </Button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <Link href="#about" className="text-white flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/p2.jpg"
                alt="Professional painters at work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
              <p className="text-gray-600 mb-4 text-justify">
                <strong>20 Years of Trusted Painting Excellence</strong>
                <br />
                Established two decades ago, The Painting Company has earned its name through commitment, consistency,
                and quality. We started as a small team with a big vision — to offer seamless, professional painting
                services that transform spaces and exceed client expectations.
              </p>
              <p className="text-gray-600 mb-6 text-justify">
                Today, we proudly serve a wide range of clients, including homeowners, property managers, retail
                businesses, and developers. Whether it's a fresh coat for your home or a large-scale exterior project,
                we bring the same care and attention to every job.
              </p>
              <p className="text-gray-600 mb-6 text-justify">
                Our team is trained, experienced, and equipped with the latest tools and materials — ensuring a smooth
                process from start to finish.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm">Skilled professionals with years of experience</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">Quality Materials</h3>
                  <p className="text-gray-600 text-sm">Premium paints and supplies for lasting results</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">Timely Delivery</h3>
                  <p className="text-gray-600 text-sm">Projects completed on schedule, every time</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600 text-sm">Committed to exceeding your expectations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              At The Painting Company, we take pride in offering a full suite of painting and wall care solutions
              tailored to both residential and commercial spaces. Every service is executed with precision, using
              top-quality materials, advanced techniques, and a team of trained professionals who treat your space like
              their own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/p3.jpg"
                  alt="Interior Wall Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Interior Wall Painting</h3>
                <p className="text-gray-600 mb-4 text-justify">
                  We deliver smooth, professional interior finishes that enhance your space. From color consultation to
                  neat edging, we handle it all with precision and care.
                </p>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>• Color consultation & sampling</li>
                  <li>• Wall crack repair & prep</li>
                  <li>• Brush, roller, or spray application</li>
                  <li>• Homes, offices, shops, and more</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/p4.jpg"
                  alt="Exterior Wall Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Exterior Wall Painting</h3>
                <p className="text-gray-600 mb-4 text-justify">
                  Designed to withstand harsh weather while keeping your property looking sharp. Ideal for villas,
                  buildings, warehouses, and more.
                </p>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>• UV & weather-resistant paints</li>
                  <li>• Mold, mildew, water protection</li>
                  <li>• Crack sealing & pressure washing</li>
                  <li>• Façade, trims, gates & more</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/p5.jpg"
                  alt="Wall Maintenance & Artistry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Wall Maintenance & Artistry</h3>
                <p className="text-gray-600 mb-4 text-justify">
                  From routine repainting to expressive wall art, we keep your walls vibrant and inspiring — whether
                  you're a home, office, or creative space.
                </p>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>• Scheduled maintenance & touch-ups</li>
                  <li>• Murals & calligraphy</li>
                  <li>• Custom graffiti & doodle art</li>
                  <li>• Ideal for homes, cafes & events</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
     

    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of completed projects and see the quality of our work firsthand.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg group">
              <Image
                src={src}
                alt={`Painting project ${index + 1}`}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-medium">View</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">View More Photos</Button>
        </div>
      </div>
    </section>
  );
}

      {/* Testimonials Section with Carousel */}
      <section id="testimonials" className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <div className="flex items-center mb-6">
                        <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden relative">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-xl text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic text-lg mb-6">"{testimonial.content}"</p>
                      <div className="flex text-teal-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white text-teal-500 hover:text-teal-600 p-3 rounded-full shadow-lg z-10 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white text-teal-500 hover:text-teal-600 p-3 rounded-full shadow-lg z-10 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2 flex-wrap">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    currentTestimonial === index ? "bg-teal-500" : "bg-gray-300 hover:bg-teal-300"
                  } mb-2`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to schedule a consultation? Reach out to us using the contact
                form or the information below.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">123 Painting Lane, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-teal-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+971 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-teal-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@thepaintingcompany.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>Monday - Friday</div>
                  <div>8:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>9:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a Service</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="maintenance">Wall Maintenance</option>
                    <option value="artistry">Wall Artistry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tell us about your project and what services you're looking for..."
                  ></textarea>
                </div>

                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Frequently Asked Questions</h2>
          <br />
          <br />
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What types of painting services do you offer?",
                a: "We offer complete painting solutions, including:\n• Interior wall painting\n• Exterior wall painting\n• Maintenance & repainting services\n• Artistic wall highlights such as murals, calligraphy, doodles, and graffiti-inspired designs",
              },
              {
                q: "Do you provide the paint and materials, or do I need to supply them?",
                a: "We provide all required paints, tools, and materials. We use high-quality, trusted brands. If you have a preferred paint brand or finish, we're happy to accommodate it.",
              },
              {
                q: "How long does a typical painting project take?",
                a: "It depends on the size and scope:\n• A single room: 1 day\n• Full apartment/villa: 2–5 days\n• Commercial or exterior projects: Variable based on surface size and prep requirements",
              },
              {
                q: "Do you do surface preparation and repairs?",
                a: "Yes. All our jobs include full surface prep — sanding, filling cracks or holes, priming, and treating stains or humidity damage before painting begins.",
              },
              {
                q: "Can you repaint areas affected by water damage or renovation?",
                a: "Absolutely. We specialize in post-repair touch-ups, repainting water-damaged walls, and restoring surfaces after maintenance or construction work.",
              },
              {
                q: "Do you offer maintenance contracts or regular repainting services?",
                a: "Yes. We offer monthly, quarterly, or annual maintenance packages for residential communities, commercial properties, and shared spaces.",
              },
              {
                q: "Can you help me choose the right colors or finishes?",
                a: "Of course. We offer color consultation services to help you select tones that match your space, lighting, and design goals. We can also provide sample applications if needed.",
              },
              {
                q: "Do you offer wall art services like murals or graffiti?",
                a: "Yes. We have an in-house team of artists who create custom murals, graffiti-inspired designs, Arabic or modern calligraphy, doodles, and more.",
              },
              {
                q: "Will the painters clean up after the job?",
                a: "Always. Clean-up is part of our process. We protect your furniture, flooring, and belongings during painting and leave your space clean and paint-free once we're done.",
              },
              {
                q: "How do I request a quote?",
                a: "Just click [Request a Free Quote] or reach out via WhatsApp, phone, or our contact form. Share a few details and we'll get back to you with a customized quote.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-lg font-semibold text-gray-800 group-open:bg-teal-50 group-open:text-teal-600 transition-colors">
                  <span>
                    {index + 1}. {item.q}
                  </span>
                  <svg
                    className="w-5 h-5 transform transition-transform duration-200 group-open:rotate-180 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="h-12 w-auto">
                  <Image
                    src="/logo.png"
                    alt="The Painting Company Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="ml-3 font-semibold text-xl">The Painting Company</span>
              </div>
              <p className="text-gray-400 mb-6">
                Premium painting services for residential, commercial, and industrial spaces. Professional, reliable,
                and passionate about quality.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-500 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-500 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-teal-500 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5" />
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
                  <Link href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">
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
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Interior Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Exterior Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Wall Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Wall Artistry
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Commercial Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                <span className="relative z-10">Newsletter</span>
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-500"></span>
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for painting tips, special offers, and updates.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white focus:ring-teal-500 focus:border-teal-500 rounded-r-none"
                />
                <Button className="bg-teal-500 hover:bg-teal-600 rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t border-b border-gray-800 mb-8">
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-teal-500 mr-3" />
              <span className="text-gray-400">123 Painting Lane, Dubai, UAE</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-teal-500 mr-3" />
              <span className="text-gray-400">+971 50 123 4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Mail className="h-5 w-5 text-teal-500 mr-3" />
              <span className="text-gray-400">info@thepaintingcompany.com</span>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Painting Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
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
    </div>
  )
}
