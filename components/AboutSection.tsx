import React from 'react'
import Image from 'next/image'

function AboutSection() {
  return (
    <>
           <section id="about" className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 w-full">
                    <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/p10.webp"
                        alt="Professional painters at work"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full mt-8 md:mt-0">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                      About Us
                    </h2>
                    <p className="text-gray-600 mb-4">
                      <strong>20 Years of Trusted Painting Excellence</strong>
                      <br />
                      Established two decades ago, The Painting Company has earned its
                      name through commitment, consistency, and quality. We started as
                      a small team with a big vision — to offer seamless, professional
                      painting services that transform spaces and exceed client
                      expectations.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Today, we proudly serve a wide range of clients, including
                      homeowners, property managers, retail businesses, and
                      developers. Whether it's a fresh coat for your home or a
                      large-scale exterior project, we bring the same care and
                      attention to every job.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Our team is trained, experienced, and equipped with the latest
                      tools and materials — ensuring a smooth process from start to
                      finish.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-teal-700 mb-2">
                          Expert Team
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Skilled professionals with years of experience
                        </p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-teal-700 mb-2">
                          Quality Materials
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Premium paints and supplies for lasting results
                        </p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-teal-700 mb-2">
                          Timely Delivery
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Projects completed on schedule, every time
                        </p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-teal-700 mb-2">
                          Customer Satisfaction
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Committed to exceeding your expectations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}

export default AboutSection
