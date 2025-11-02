'use client';

import { Button, Logo } from '@/components/ui';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFlight,
  MdHotel,
  MdAttractions,
  MdDirectionsCar,
} from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import { gilroyBold } from '@/lib/fonts';
import Image from 'next/image';
import { FooterSection } from '@/components/sections/AboutUs';
import { DESTINATION_SECTIONS, TIME_FILTERS } from '@/constants';

export default function DestinationsAllPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('2-4-days');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll functions for trending trips
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Width of one card + gap
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Width of one card + gap
        behavior: 'smooth',
      });
    }
  };

  // Hydration check
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Mobile detection - only after hydration
  useEffect(() => {
    if (!isHydrated) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isHydrated]);

  // Prevent hydration mismatch by ensuring consistent initial state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  // Don't render until hydrated to prevent mismatch
  if (!isHydrated) {
    return (
      <div
        className={`relative ${gilroyBold.variable} overflow-x-hidden`}
        style={{
          backgroundColor: '#F2F4F6',
          minHeight: '100vh',
          borderRadius: '0',
          overflow: 'visible',
          margin: '0',
          maxWidth: '100%',
          marginLeft: '0',
          marginRight: '0',
        }}
      >
        <div className='flex items-center justify-center min-h-screen'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-800'>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${gilroyBold.variable} overflow-x-hidden`}
      style={{
        backgroundColor: '#F2F4F6',
        minHeight: '100vh',
        borderRadius: isMobile ? '20px' : '0',
        overflow: isMobile ? 'hidden' : 'visible',
        margin: isMobile ? '10px' : '0',
        maxWidth: isMobile ? 'calc(100vw - 20px)' : '100%',
        marginLeft: isMobile ? 'auto' : '0',
        marginRight: isMobile ? 'auto' : '0',
      }}
    >
      {/* Header */}
      <header className='shadow-soft relative z-[60] bg-white'>
        <div className='w-full px-4 sm:px-8 lg:px-16'>
          <div className='flex items-center justify-between py-4 md:py-6'>
            <div className='flex items-center space-x-1'>
              <Logo
                size={24}
                className='md:w-8 md:h-8'
                style={{ color: '#16242A' }}
              />
              <h1
                className='text-xl md:text-3xl font-gilroy-semibold'
                style={{ color: '#16242A' }}
              >
                Horizon
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden p-2'
            >
              <Image
                src='/jam_menu.svg'
                alt='Menu'
                width={28}
                height={28}
                className='w-7 h-7'
              />
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex space-x-6 ml-8'>
              <div className='relative group'>
                <a
                  href='#'
                  className='flex items-center hover:opacity-80 transition-colors'
                  style={{
                    color: '#16242A',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                  }}
                >
                  Destination
                  <MdKeyboardArrowDown
                    className='ml-1 group-hover:rotate-180 transition-transform duration-200'
                    style={{
                      color: '#16242A',
                      fontWeight: 700,
                      width: '24px',
                      height: '24px',
                      opacity: 1,
                    }}
                  />
                </a>
                <div className='absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                  <div className='p-4'>
                    {/* Tabs */}
                    <div className='flex space-x-1 mb-4'>
                      <button className='px-3 py-2 text-base text-gray-500 hover:text-gray-700 font-bold'>
                        India
                      </button>
                      <button className='px-3 py-2 text-base text-gray-500 hover:text-gray-700 font-bold'>
                        International
                      </button>
                      <button className='px-3 py-2 text-base text-orange-500 font-bold'>
                        All
                      </button>
                    </div>

                    {/* Grid of destinations */}
                    <div className='grid grid-cols-3 gap-2 text-base'>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Kerala
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Rajasthan
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Uttar Pradesh
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Goa
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Jammu & Kashmir
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Assam
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Himachal Pradesh
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Karnataka
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Andhra Pradesh
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Gujarat
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Madhya Pradesh
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Andaman & Nicobar
                        Islands
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Tamil Nadu
                      </a>
                      <a
                        href='#'
                        className='flex items-center text-gray-700 hover:text-orange-500 py-1 font-bold'
                      >
                        <span className='mr-1'>›</span> Meghalaya
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative group'>
                <a
                  href='#'
                  className='flex items-center hover:opacity-80 transition-colors'
                  style={{
                    color: '#16242A',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                  }}
                >
                  Explore Extraordinary
                  <MdKeyboardArrowDown
                    className='ml-1'
                    style={{
                      color: '#16242A',
                      fontWeight: 700,
                      width: '24px',
                      height: '24px',
                      opacity: 1,
                    }}
                  />
                </a>
                <div className='absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                  <div className='p-4'>
                    <div className='space-y-2 text-sm'>
                      <a
                        href='#'
                        className='block text-gray-700 hover:text-primary-600 py-1'
                      >
                        Solo Female Travel
                      </a>
                      <a
                        href='#'
                        className='block text-gray-700 hover:text-primary-600 py-1'
                      >
                        All
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative group'>
                <a
                  href='#'
                  className='flex items-center hover:opacity-80 transition-colors'
                  style={{
                    color: '#16242A',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                  }}
                >
                  Offers
                  <MdKeyboardArrowDown
                    className='ml-1'
                    style={{
                      color: '#16242A',
                      fontWeight: 700,
                      width: '24px',
                      height: '24px',
                      opacity: 1,
                    }}
                  />
                </a>
                <div className='absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                  <div className='p-4'>
                    <div className='space-y-2 text-sm'>
                      <a
                        href='#'
                        className='block text-gray-700 hover:text-primary-600 py-1'
                      >
                        Refer A Friend
                      </a>
                      <a
                        href='#'
                        className='block text-gray-700 hover:text-primary-600 py-1'
                      >
                        Flat 50% OFF
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href='#'
                className='hover:opacity-80 transition-colors'
                style={{
                  color: '#16242A',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >
                Support
              </a>

              <a
                href='#'
                className='hover:opacity-80 transition-colors'
                style={{
                  color: '#16242A',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >
                Review & Ratings
              </a>

              <a
                href='/about-us'
                className='hover:opacity-80 transition-colors'
                style={{
                  color: '#16242A',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >
                About Us
              </a>

              <a
                href='/blogs'
                className='hover:opacity-80 transition-colors'
                style={{
                  color: '#16242A',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >
                Blogs
              </a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className='hidden lg:flex items-center space-x-4 ml-auto'>
              <Button
                variant='ghost'
                className='text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                data-signup-button
                style={{
                  width: '90px',
                  height: '40px',
                  opacity: 1,
                  borderRadius: '8px',
                  paddingTop: '16px',
                  paddingRight: '24px',
                  paddingBottom: '16px',
                  paddingLeft: '24px',
                  backgroundColor: 'transparent',
                  border: '1px solid #D1D5DB',
                }}
              >
                Signup
              </Button>
              <Button
                className='text-white hover:text-white/80'
                style={{
                  width: '90px',
                  height: '40px',
                  opacity: 1,
                  borderRadius: '8px',
                  paddingTop: '16px',
                  paddingRight: '24px',
                  paddingBottom: '16px',
                  paddingLeft: '24px',
                  backgroundColor: '#29383E',
                }}
              >
                Login
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='lg:hidden bg-white border-t border-gray-200'>
              <div className='px-4 py-4 space-y-4'>
                <a
                  href='#'
                  className='block text-gray-700 hover:text-orange-500 font-medium'
                >
                  Destination
                </a>
                <a
                  href='#'
                  className='block text-gray-700 hover:text-orange-500 font-medium'
                >
                  Explore Extraordinary
                </a>
                <a
                  href='#'
                  className='block text-gray-700 hover:text-orange-500 font-medium'
                >
                  Offers
                </a>
                <a
                  href='#'
                  className='block text-gray-700 hover:text-orange-500 font-medium'
                >
                  Support
                </a>
                <a
                  href='#'
                  className='block text-gray-700 hover:text-orange-500 font-medium'
                >
                  Review & Ratings
                </a>
                <a
                  href='/about-us'
                  className='block text-gray-700 hover:text-orange-500 font-medium'
                >
                  About Us
                </a>
                <a
                  href='/blogs'
                  className='block text-gray-700 hover:text-orange-500 font-medium'
                >
                  Blogs
                </a>
                <div className='flex space-x-4 pt-4 border-t border-gray-200'>
                  <Button
                    variant='ghost'
                    className='flex-1 text-gray-700 hover:text-orange-500'
                    style={{
                      backgroundColor: '#f3f4f6',
                      border: '1px solid #d1d5db',
                    }}
                  >
                    Signup
                  </Button>
                  <Button
                    className='flex-1 text-white'
                    style={{
                      backgroundColor: '#29383E',
                    }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className='relative z-10 bg-white'>
        {/* Main Title Section */}
        <section className='py-16 md:py-24 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>
                Explore All Travel Packages In One Place
              </h1>
              <p className='text-lg md:text-xl text-gray-600'>
                Discover all domestic and international trips tailored for every
                kind of traveler.
              </p>
            </div>

            {/* Trending Trips with Pricing Structure */}
            <div className='mb-16'>
              <div className='flex items-center justify-between mb-8'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                  Trending Trips Everyone's Booking
                </h2>
                <div className='flex space-x-2'>
                  <button
                    onClick={scrollLeft}
                    className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'
                  >
                    <MdKeyboardArrowLeft className='w-5 h-5 text-gray-600' />
                  </button>
                  <button
                    onClick={scrollRight}
                    className='w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors'
                  >
                    <MdKeyboardArrowRight className='w-5 h-5 text-white' />
                  </button>
                </div>
              </div>

              <div
                className='flex space-x-6 overflow-x-auto pb-4 scrollbar-hide'
                ref={scrollContainerRef}
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {/* Trip Card 1 */}
                <div className='flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
                  <div className='relative h-96'>
                    <Image
                      src='/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a.jpg'
                      alt='Shimla, Kullu, Manali in Winters'
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent'></div>

                    {/* Discount Tag */}
                    <div className='absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2'>
                      <span className='text-xs'>🏷️</span>
                      25% OFF
                    </div>

                    {/* Duration Tag */}
                    <div className='absolute top-4 left-4 bg-gray-600/90 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      6N/7D
                    </div>

                    {/* Trip Info */}
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                      <h3 className='text-2xl font-bold mb-3 leading-tight'>
                        Shimla, Kullu, Manali in Winters
                      </h3>
                      <p className='text-base mb-5 opacity-90'>
                        Himachal Pradesh
                      </p>

                      {/* Features */}
                      <div className='grid grid-cols-2 gap-3 mb-7'>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdFlight className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>2 Flights</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdHotel className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>11 Hotels</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdAttractions className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            5 Activities
                          </span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdDirectionsCar className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            4 Transfers
                          </span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className='flex items-end justify-between'>
                        <div>
                          <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-3xl font-bold text-orange-400'>
                              ₹
                            </span>
                            <span className='text-3xl font-bold text-white'>
                              5,999
                            </span>
                          </div>
                          <div className='flex items-center gap-2 mb-1'>
                            <span className='text-sm text-gray-300 line-through'>
                              12,999
                            </span>
                            <span className='text-sm text-gray-300'>
                              Per Person
                            </span>
                          </div>
                          <div className='text-xs text-gray-400'>
                            Includes taxes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trip Card 2 */}
                <div className='flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
                  <div className='relative h-96'>
                    <Image
                      src='/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a(1).jpg'
                      alt='Goa Beach Paradise'
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent'></div>

                    {/* Discount Tag */}
                    <div className='absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2'>
                      <span className='text-xs'>🏷️</span>
                      30% OFF
                    </div>

                    {/* Duration Tag */}
                    <div className='absolute top-4 left-4 bg-gray-600/90 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      4N/5D
                    </div>

                    {/* Trip Info */}
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                      <h3 className='text-2xl font-bold mb-3 leading-tight'>
                        Goa Beach Paradise
                      </h3>
                      <p className='text-base mb-5 opacity-90'>Goa</p>

                      {/* Features */}
                      <div className='grid grid-cols-2 gap-3 mb-7'>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdFlight className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>2 Flights</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdHotel className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>8 Hotels</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdAttractions className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            6 Activities
                          </span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdDirectionsCar className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            3 Transfers
                          </span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className='flex items-end justify-between'>
                        <div>
                          <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-3xl font-bold text-orange-400'>
                              ₹
                            </span>
                            <span className='text-3xl font-bold text-white'>
                              4,999
                            </span>
                          </div>
                          <div className='flex items-center gap-2 mb-1'>
                            <span className='text-sm text-gray-300 line-through'>
                              9,999
                            </span>
                            <span className='text-sm text-gray-300'>
                              Per Person
                            </span>
                          </div>
                          <div className='text-xs text-gray-400'>
                            Includes taxes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trip Card 3 */}
                <div className='flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
                  <div className='relative h-96'>
                    <Image
                      src='/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a(2).jpg'
                      alt='Kerala Backwaters & Tea Gardens'
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent'></div>

                    {/* Discount Tag */}
                    <div className='absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2'>
                      <span className='text-xs'>🏷️</span>
                      20% OFF
                    </div>

                    {/* Duration Tag */}
                    <div className='absolute top-4 left-4 bg-gray-600/90 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      5N/6D
                    </div>

                    {/* Trip Info */}
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                      <h3 className='text-2xl font-bold mb-3 leading-tight'>
                        Kerala Backwaters & Tea Gardens
                      </h3>
                      <p className='text-base mb-5 opacity-90'>Kerala</p>

                      {/* Features */}
                      <div className='grid grid-cols-2 gap-3 mb-7'>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdFlight className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>2 Flights</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdHotel className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>9 Hotels</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdAttractions className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            7 Activities
                          </span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdDirectionsCar className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            5 Transfers
                          </span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className='flex items-end justify-between'>
                        <div>
                          <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-3xl font-bold text-orange-400'>
                              ₹
                            </span>
                            <span className='text-3xl font-bold text-white'>
                              6,999
                            </span>
                          </div>
                          <div className='flex items-center gap-2 mb-1'>
                            <span className='text-sm text-gray-300 line-through'>
                              11,999
                            </span>
                            <span className='text-sm text-gray-300'>
                              Per Person
                            </span>
                          </div>
                          <div className='text-xs text-gray-400'>
                            Includes taxes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trip Card 4 */}
                <div className='flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
                  <div className='relative h-96'>
                    <Image
                      src='/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a.jpg'
                      alt='Rajasthan Royal Heritage'
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent'></div>

                    {/* Discount Tag */}
                    <div className='absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2'>
                      <span className='text-xs'>🏷️</span>
                      35% OFF
                    </div>

                    {/* Duration Tag */}
                    <div className='absolute top-4 left-4 bg-gray-600/90 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      7N/8D
                    </div>

                    {/* Trip Info */}
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                      <h3 className='text-2xl font-bold mb-3 leading-tight'>
                        Rajasthan Royal Heritage
                      </h3>
                      <p className='text-base mb-5 opacity-90'>Rajasthan</p>

                      {/* Features */}
                      <div className='grid grid-cols-2 gap-3 mb-7'>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdFlight className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>2 Flights</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdHotel className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>12 Hotels</span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdAttractions className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            8 Activities
                          </span>
                        </div>
                        <div className='bg-gray-700/80 rounded-lg px-3 py-2 flex items-center gap-2'>
                          <MdDirectionsCar className='w-4 h-4 text-orange-400' />
                          <span className='text-sm text-white'>
                            6 Transfers
                          </span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className='flex items-end justify-between'>
                        <div>
                          <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-3xl font-bold text-orange-400'>
                              ₹
                            </span>
                            <span className='text-3xl font-bold text-white'>
                              7,999
                            </span>
                          </div>
                          <div className='flex items-center gap-2 mb-1'>
                            <span className='text-sm text-gray-300 line-through'>
                              14,999
                            </span>
                            <span className='text-sm text-gray-300'>
                              Per Person
                            </span>
                          </div>
                          <div className='text-xs text-gray-400'>
                            Includes taxes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nature Lover's Escapes Section */}
            {DESTINATION_SECTIONS.slice(1, 2).map(section => (
              <div key={section.id} className='mb-16'>
                <div className='flex items-center justify-between mb-8'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                    {section.title}
                  </h2>
                  <div className='flex space-x-2'>
                    <button className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'>
                      <MdKeyboardArrowLeft className='w-5 h-5 text-gray-600' />
                    </button>
                    <button className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'>
                      <MdKeyboardArrowRight className='w-5 h-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {section.destinations.map((destination, index) => (
                    <div
                      key={index}
                      className='group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                    >
                      <div className='relative h-64'>
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          className='object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                        <div className='absolute bottom-4 left-4 text-white'>
                          <h3 className='text-xl font-bold mb-1'>
                            {destination.name}
                          </h3>
                          <p className='text-sm opacity-90'>
                            {destination.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Trips Tailored to Your Time Section */}
            <div className='relative bg-gradient-to-r from-orange-100 to-blue-100 rounded-3xl p-8 md:p-16 mb-16 overflow-hidden'>
              {/* Background Elements */}
              {/* Chinese Pagoda (China SVG) - Bottom left */}
              <div className='absolute left-4 bottom-4 w-48 h-48 opacity-20'>
                <Image
                  src='/img/all_international/time_filters/landmark_china-4.svg'
                  alt='Chinese pagoda background'
                  width={500}
                  height={500}
                  className='w-full h-full object-contain'
                />
              </div>

              {/* Coconut Tree (Summer Landscape SVG) - Bottom right */}
              <div className='absolute right-4 bottom-4 w-40 h-40 opacity-40'>
                <Image
                  src='/img/all_international/time_filters/summer-landscape-84.svg'
                  alt='Coconut tree background'
                  width={300}
                  height={300}
                  className='w-full h-full object-contain'
                />
              </div>

              <div className='text-center relative z-10'>
                <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>
                  Trips Tailored to Your Time
                </h2>
                <p className='text-lg md:text-xl text-gray-700 mb-12'>
                  From quick gateways to long escapes, we've got you covered.
                </p>

                {/* Time Filter Buttons */}
                <div className='flex flex-wrap justify-center gap-6 md:gap-8'>
                  {TIME_FILTERS.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedTimeFilter(filter.id)}
                      className={`relative transition-all duration-300 ${
                        selectedTimeFilter === filter.id
                          ? 'scale-105'
                          : 'hover:scale-105'
                      }`}
                    >
                      <div className='relative w-24 h-24 rounded-full overflow-hidden'>
                        <Image
                          src={filter.image}
                          alt={filter.label}
                          width={96}
                          height={96}
                          className='w-full h-full object-cover'
                        />
                        {/* Overlay with days text */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <span className='text-xs font-bold text-white drop-shadow-lg text-center'>
                            {filter.label}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Destination Sections - Remaining Sections */}
            {DESTINATION_SECTIONS.slice(2).map(section => (
              <div key={section.id} className='mb-16'>
                <div className='flex items-center justify-between mb-8'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                    {section.title}
                  </h2>
                  <div className='flex space-x-2'>
                    <button className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'>
                      <MdKeyboardArrowLeft className='w-5 h-5 text-gray-600' />
                    </button>
                    <button className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'>
                      <MdKeyboardArrowRight className='w-5 h-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {section.destinations.map((destination, index) => (
                    <div
                      key={index}
                      className='group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                    >
                      <div className='relative h-64'>
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          className='object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                        <div className='absolute bottom-4 left-4 text-white'>
                          <h3 className='text-xl font-bold mb-1'>
                            {destination.name}
                          </h3>
                          <p className='text-sm opacity-90'>
                            {destination.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
