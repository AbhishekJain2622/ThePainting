import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GallerySection() {
    const galleryImages = [
        "/p5.webp",
        "/p6.webp",
        "/p7.webp",
        "/p8.webp",
        "/p9.webp",
        "/p10.webp",
        "/p11.webp",
        "/p12.webp",
      ];


        // Ensure selectedImageIndex is initialized correctly with useState
        const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
          null
        );
   const [selectedImage, setSelectedImage] = useState(null);
 
  const goToNextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < galleryImages.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Function to handle Previous Image
  const goToPreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };
  return (
    <>
      
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of completed projects and see the
              quality of our work firsthand.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-medium">View</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              View More Photos
            </Button>
          </div>
        </div>

        {/* Animated Lightbox */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)} // Close modal when clicking on the overlay
            >
              <motion.div
                className="relative w-full h-full max-w-4xl max-h-[90vh] px-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing on inner content click
              >
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt="Enlarged view"
                  fill
                  className="object-contain w-full h-full rounded-xl"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full text-lg font-bold"
                  onClick={() => setSelectedImageIndex(null)} // Close modal on button click
                >
                  ✕
                </button>

                {/* Carousel Navigation */}
                <div
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl"
                  onClick={goToPreviousImage}
                >
                  &#10094;
                </div>
                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white text-3xl"
                  onClick={goToNextImage}
                >
                  &#10095;
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

export default GallerySection
