'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=600&fit=crop',
    title: 'Solo/Group Female Travelers',
    subtitle: 'Your safety and peace of mind are our utmost priorities',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=400&fit=crop',
    title: 'Adventure Seekers',
    subtitle: 'Embark on thrilling journeys that push your boundaries',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop',
    title: 'Family Explorers',
    subtitle: 'Create unforgettable memories with your loved ones',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop',
    title: 'Luxury Travelers',
    subtitle: 'Experience the finest in comfort and elegance',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=400&fit=crop',
    title: 'Cultural Enthusiasts',
    subtitle: 'Immerse yourself in rich traditions and heritage',
  },
];

export default function ExtraordinaryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className='w-full py-8 md:py-16' style={{ backgroundColor: '#F2F4F6' }}>
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
        {/* Header Section */}
        <div className='text-center mb-6 md:mb-8'>
          <h2
            className='text-gray-800'
            style={{
              fontSize: isMobile ? '24px' : '48px',
              lineHeight: '1.2',
              fontFamily: 'var(--font-gilroy-bold)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: isMobile ? '8px' : '16px',
            }}
          >
            Experience the Extraordinary
          </h2>
          <p
            className='text-gray-600'
            style={{
              fontSize: isMobile ? '14px' : '18px',
              lineHeight: '1.5',
              fontFamily: 'var(--font-gilroy-semibold)',
              fontWeight: 400,
            }}
          >
            Immerse yourself in extraordinary journeys tailored to your style
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full overflow-hidden rounded-2xl'>
          <div
            className='relative rounded-2xl'
            style={{
              aspectRatio: '2.5 / 1',
              minHeight: isMobile ? '200px' : '320px',
              maxHeight: isMobile ? '250px' : '450px',
            }}
          >
            {/* Background Images - Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 rounded-2xl ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`Extraordinary slide ${slide.id}`}
                  fill
                  className='object-cover rounded-2xl'
                  priority={index === 0}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
                />
              </div>
            ))}

            {/* Dark Overlay with Gradient - darker at bottom */}
            <div
              className='absolute inset-0 z-20 rounded-2xl'
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.75) 100%)',
              }}
            />

            {/* Content Overlay */}
            <div className='absolute inset-0 z-30 flex flex-col justify-end rounded-2xl'>
              {/* Bottom Content Container */}
              <div
                className='w-full flex flex-col px-6 md:px-8 lg:px-12 xl:px-16 pb-2 md:pb-4 gap-3 md:gap-4'
                style={{ marginBottom: '0' }}
              >
                {/* Left Side Content - Text and Button */}
                <div className='flex flex-col space-y-2 md:space-y-3 lg:space-y-4'>
                  {/* Main Title */}
                  <h3
                    className='text-white'
                    style={{
                      fontSize: isMobile ? '20px' : '48px',
                      lineHeight: '1.2',
                      fontFamily: 'var(--font-gilroy-bold)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {slides[currentSlide].title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className='text-white'
                    style={{
                      fontSize: isMobile ? '12px' : '18px',
                      lineHeight: '1.5',
                      fontFamily: 'var(--font-gilroy-semibold)',
                      fontWeight: 400,
                      opacity: 0.95,
                    }}
                  >
                    {slides[currentSlide].subtitle}
                  </p>

                  {/* Explore Now Button */}
                  <button
                    className='bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg'
                    style={{
                      padding: isMobile ? '12px 24px' : '16px 32px',
                      fontSize: isMobile ? '14px' : '18px',
                      width: 'fit-content',
                      marginTop: isMobile ? '12px' : '16px',
                      fontFamily: 'var(--font-gilroy-semibold)',
                      fontWeight: 600,
                      borderRadius: '8px',
                    }}
                    onClick={() => {
                      console.log('Explore Now clicked');
                    }}
                  >
                    Explore Now
                  </button>
                </div>

                {/* Navigation Dots - Bottom Center */}
                <div
                  className='flex justify-center items-center space-x-2 md:space-x-3'
                  style={{ paddingBottom: '0', marginTop: isMobile ? '8px' : '12px' }}
                >
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? 'bg-orange-500'
                          : 'bg-gray-300 border border-gray-400'
                      }`}
                      style={{
                        width: isMobile ? '10px' : '14px',
                        height: isMobile ? '10px' : '14px',
                        cursor: 'pointer',
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

