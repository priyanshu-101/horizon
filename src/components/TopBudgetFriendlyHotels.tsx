'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { gilroyBold } from '@/lib/fonts';

interface HotelCard {
  id: string;
  name: string;
  location: string;
  image: string;
  price: string;
}

const hotels: HotelCard[] = [
  {
    id: '1',
    name: 'Lemon Tree Premier Hotel',
    location: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    price: '5,999',
  },
  {
    id: '2',
    name: 'Budget Hotel & Resort',
    location: 'Kerala',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
    price: '4,999',
  },
  {
    id: '3',
    name: 'Comfort Inn Hotel',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
    price: '6,499',
  },
  {
    id: '4',
    name: 'Value Stay Hotel',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    price: '5,499',
  },
  {
    id: '5',
    name: 'Budget Comfort Hotel',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
    price: '4,499',
  },
];

export default function TopBudgetFriendlyHotels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, hotels.length - cardsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = isMobile ? 320 : 423.59814453125;
      const gap = isMobile ? 16 : 24;
      const scrollPosition = currentIndex * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, isMobile]);

  return (
    <div
      className='w-full py-12 md:py-16 lg:py-20'
      style={{ backgroundColor: '#F2F4F6' }}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
        {/* Header Section */}
        <div className='text-center mb-8 md:mb-12'>
          <h2
            className='text-gray-800 mb-4 md:mb-6'
            style={{
              fontSize: 'clamp(28px, 5vw, 40px)',
              lineHeight: '1.2',
              fontFamily: 'var(--font-gilroy-bold)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Top Budget-Friendly Hotels
          </h2>
          <p
            className='text-gray-600 max-w-3xl mx-auto'
            style={{
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: '1.6',
              fontFamily: 'var(--font-gilroy-semibold)',
              fontWeight: 400,
            }}
          >
            Explore Our Hand-Curated Selection of Budget Hotels Offering
            Unbeatable Value and Comfort
          </p>
        </div>

        {/* Hotel Cards Carousel */}
        <div className='relative mb-8 md:mb-12'>
          <div
            ref={scrollContainerRef}
            className='flex gap-4 md:gap-6 overflow-x-auto scroll-smooth'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className='flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
                style={{
                  width: isMobile ? '320px' : '423.59814453125px',
                  height: isMobile ? 'auto' : '370px',
                }}
              >
                {/* Hotel Image */}
                <div className='relative w-full' style={{ height: isMobile ? '140px' : '180px' }}>
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 320px, 423.59814453125px'
                  />
                  {/* Favorite Icon */}
                  <div className='absolute top-3 right-3'>
                    <button className='bg-gray-800/60 backdrop-blur-sm rounded-full p-2 hover:bg-gray-800/80 transition-colors'>
                      <AiOutlineHeart className='w-5 h-5 text-white' />
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div style={{ padding: isMobile ? '10px' : '14px', height: isMobile ? 'auto' : '190px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div>
                    {/* Hotel Name */}
                    <h3
                      className='text-gray-800'
                      style={{
                        fontSize: isMobile ? '16px' : '18px',
                        lineHeight: '1.2',
                        fontFamily: 'var(--font-gilroy-bold)',
                        fontWeight: 700,
                        marginBottom: isMobile ? '3px' : '4px',
                      }}
                    >
                      {hotel.name}
                    </h3>

                    {/* Location */}
                    <p
                      className='text-gray-600'
                      style={{
                        fontSize: isMobile ? '12px' : '14px',
                        lineHeight: '1.3',
                        fontFamily: 'var(--font-gilroy-semibold)',
                        fontWeight: 400,
                        marginBottom: isMobile ? '6px' : '8px',
                      }}
                    >
                      {hotel.location}
                    </p>
                  </div>

                  <div>
                    {/* Price Row */}
                    <div className='flex items-baseline justify-between' style={{ marginBottom: isMobile ? '3px' : '4px' }}>
                      <div className='flex items-baseline gap-1'>
                        <span
                          className='text-orange-500'
                          style={{
                            fontSize: isMobile ? '20px' : '26px',
                            fontFamily: 'var(--font-gilroy-bold)',
                            fontWeight: 700,
                          }}
                        >
                          ₹ {hotel.price}
                        </span>
                        <span
                          className='text-gray-600'
                          style={{
                            fontSize: isMobile ? '10px' : '11px',
                            fontFamily: 'var(--font-gilroy-semibold)',
                            fontWeight: 400,
                            marginLeft: '4px',
                          }}
                        >
                          Per Person
                        </span>
                      </div>
                      <span
                        className='text-orange-500'
                        style={{
                          fontSize: isMobile ? '10px' : '11px',
                          fontFamily: 'var(--font-gilroy-semibold)',
                          fontWeight: 600,
                        }}
                      >
                        0 Booking Fees
                      </span>
                    </div>

                    {/* Includes taxes */}
                    <p
                      className='text-gray-500'
                      style={{
                        fontSize: isMobile ? '9px' : '10px',
                        lineHeight: '1.2',
                        fontFamily: 'var(--font-gilroy-semibold)',
                        fontWeight: 400,
                        marginBottom: isMobile ? '6px' : '8px',
                      }}
                    >
                      Includes taxes
                    </p>

                    {/* Book Now Button */}
                    <div className='flex justify-end' style={{ marginTop: isMobile ? '4px' : '6px' }}>
                      <button
                        className='bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-200 hover:scale-105'
                        style={{
                          fontSize: isMobile ? '12px' : '14px',
                          fontFamily: 'var(--font-gilroy-semibold)',
                          fontWeight: 600,
                          padding: isMobile ? '6px 12px' : '7px 14px',
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg transition-all duration-200 z-10 hidden md:flex items-center justify-center'
              style={{
                right: '-20px',
                width: '48px',
                height: '48px',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label='Next'
            >
              <IoChevronForward className='w-6 h-6 text-white' />
            </button>
          )}
        </div>

        {/* Explore More Button */}
        <div className='text-center'>
          <button
            className='bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg'
            style={{
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              fontFamily: 'var(--font-gilroy-semibold)',
              fontWeight: 600,
            }}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

