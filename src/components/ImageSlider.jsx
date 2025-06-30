import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, images.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  // Handle touch/swipe gestures
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
    
    // Reset touch values
    setTouchStart(0)
    setTouchEnd(0)
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main slider container */}
      <div 
        className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => {
          setTimeout(() => setIsAutoPlaying(true), 100)
        }}
      >
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative flex items-center justify-center p-8 sm:p-12 md:p-16">
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Optional overlay for better text readability */}
              {image.title || image.description ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              ) : null}
              
              {/* Text overlay */}
              {(image.title || image.description) && (
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  {image.title && (
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg">
                      {image.title}
                    </h3>
                  )}
                  {image.description && (
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 drop-shadow-md max-w-2xl">
                      {image.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="flex justify-center items-center py-6 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 shadow-lg ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125 shadow-blue-300'
                  : 'bg-white border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}


    </div>
  )
}

export default ImageSlider 