import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect, useCallback } from "react";



function Testmonialsection() {
    const [isPaused, setIsPaused] = useState(false);
    const testimonials = [
        {
          id: 1,
          name: "Ahmed R.",
          role: "Villa Owner",
          image: "/p15.webp",
          content:
            "Professional from start to finish. They transformed our villa with clean, high-quality work. Highly recommended.",
        },
        {
          id: 2,
          name: "Sarah L.",
          role: "Property Manager",
          image: "/p16.webp",
          content:
            "On-time delivery and flawless finish. Their team really knows what they're doing.",
        },
        {
          id: 3,
          name: "Lina M.",
          role: "Café Owner",
          image: "/p16.webp",
          content:
            "They understood our vision for the café wall and brought it to life with color and energy. The mural is now the most photographed spot in our shop.",
        },
        {
          id: 4,
          name: "Hassan T.",
          role: "Facilities Manager",
          image: "/p17.webp",
          content:
            "Reliable, fast, and no mess left behind. I've worked with a few painting companies, but these guys stand out for their professionalism.",
        },
        {
          id: 5,
          name: "Nour A.",
          role: "Marketing Director",
          image: "/p18.webp",
          content:
            "They turned a dull office hallway into a vibrant branded space. Our team loves it, and so do our clients!",
        },
        {
          id: 6,
          name: "Samiya K.",
          role: "Homeowner",
          image: "/p19.webp",
          content:
            "The calligraphy they did for our living room wall is absolutely stunning. Subtle, elegant, and meaningful.",
        },
        {
          id: 7,
          name: "Omar F.",
          role: "Real Estate Investor",
          image: "/p20.webp",
          content:
            "From the first consultation to the final coat, the experience was smooth. Great communication and a beautiful result.",
        },
        {
          id: 8,
          name: "Rita B.",
          role: "Store Manager",
          image: "/p21.webp",
          content:
            "We hired them for our annual retail refresh. They were quick, flexible with our timing, and the store looked brand new when they finished.",
        },
        {
          id: 9,
          name: "Ayesha D.",
          role: "Homeowner",
          image: "/p22.webp",
          content:
            "I was worried about repainting with my kids at home, but they were incredibly neat and fast. Great attention to detail too.",
        },
        {
          id: 10,
          name: "Yusuf E.",
          role: "Event Producer",
          image: "/p23.webp",
          content:
            "A fantastic team with real talent — the graffiti wall they painted for our launch event turned into the highlight of the night.",
        },
      ];
      const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    // Testimonial carousel functionality
      const nextTestimonial = useCallback(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, []);
    
      const prevTestimonial = useCallback(() => {
        setCurrentTestimonial((prev) =>
          prev === 0 ? testimonials.length - 1 : prev - 1
        );
      }, []);
    
      const goToTestimonial = (index: any) => {
        setCurrentTestimonial(index);
      };
    
      // Auto-play functionality
      useEffect(() => {
        if (!isPaused) {
          const interval = setInterval(() => {
            nextTestimonial();
          }, 5000);
          return () => clearInterval(interval);
        }
      }, [isPaused, nextTestimonial]);
    
  return (
    <>
      <section id="testimonials" className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our services.
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
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
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
                          <h4 className="font-semibold text-lg md:text-xl text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 italic text-base md:text-lg mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex text-teal-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 md:h-6 md:w-6"
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
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white text-teal-500 hover:text-teal-600 p-2 md:p-3 rounded-full shadow-lg z-10 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white text-teal-500 hover:text-teal-600 p-2 md:p-3 rounded-full shadow-lg z-10 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.slice(0, 5).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-colors ${
                    currentTestimonial === index
                      ? "bg-teal-500"
                      : "bg-gray-300 hover:bg-teal-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Testmonialsection
