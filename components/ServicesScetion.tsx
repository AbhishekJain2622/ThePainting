import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
function ServicesScetion() {
  return (
    <>
        <section id="services" className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Our Services
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Expert residential and commercial painting and wall care with
                    quality materials and skilled pros.
                  </p>
                </div>
      
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                    <div className="h-48 relative">
                      <Image
                        src="/p3.webp"
                        alt="Interior Wall Painting"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        Interior Wall Painting
                      </h3>
                      <p className="text-gray-600 mb-4">
                        We deliver smooth, professional interior finishes that enhance
                        your space. From color consultation to neat edging, we handle
                        it all with precision and care.
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
      
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                    <div className="h-48 relative">
                      <Image
                        src="/p4.webp"
                        alt="Exterior Wall Painting"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        Exterior Wall Painting
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Designed to withstand harsh weather while keeping your
                        property looking sharp. Ideal for villas, buildings,
                        warehouses, and more.
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
      
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                    <div className="h-48 relative">
                      <Image
                        src="/p5.webp"
                        alt="Wall Maintenance & Artistry"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        Wall Maintenance & Artistry
                      </h3>
                      <p className="text-gray-600 mb-4">
                        From routine repainting to expressive wall art, we keep your
                        walls vibrant and inspiring — whether you're a home, office,
                        or creative space.
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
      
    </>
  )
}

export default ServicesScetion
