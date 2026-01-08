import React, { useState, useEffect } from 'react';

export default function Carousel({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [slides.length]);

  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[55vh] md:h-[82vh] lg:h-[88vh] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          >
            {/* Image Display - Full Width */}
            {slide.backgroundImage && (
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
              >
                <img 
                  src={slide.backgroundImage} 
                  alt={slide.title || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 15px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(0, 0, 0, 0.2)',
                    willChange: 'opacity',
                    transform: 'translateZ(0)'
                  }}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </div>
            )}
            
            {/* Fallback Gradient if no image */}
            {!slide.backgroundImage && (
              <div 
                className="absolute inset-0"
                style={{ background: slide.fallbackGradient }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on md and above */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none shadow-lg items-center justify-center"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none shadow-lg items-center justify-center"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none shadow-lg ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <svg className="w-6 h-6 text-white/70 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
