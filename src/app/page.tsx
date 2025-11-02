'use client';

import { Button, Logo, ActionButton, BackButton } from '@/components/ui';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { gilroyBold } from '@/lib/fonts';
import BookingForm from '@/components/BookingForm';
import FlatOffer from '@/components/FlatOffer';
import DealsAndOffers from '@/components/DealsAndOffers';
import PromoCarousel from '@/components/PromoCarousel';
import ExtraordinaryCarousel from '@/components/ExtraordinaryCarousel';
import WeOfferTheBest from '@/components/WeOfferTheBest';
import ExploreWorld from '@/components/ExploreWorld';
import FAQSection from '@/components/sections/FAQ/FAQSection';
import GallerySection from '@/components/sections/FAQ/GallerySection';
import PhoenixFlyBlogsSection from '@/components/sections/Blogs/PhoenixFlyBlogsSection';
// import PackagesSection from '@/components/PackagesSection';
// import HotelsSection from '@/components/HotelsSection';
// import CabsSection from '@/components/CabsSection';
// import ActivitiesSection from '@/components/ActivitiesSection';
import Image from 'next/image';

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward (from top), -1 for backward (from bottom)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentMobilePage, setCurrentMobilePage] = useState('hero'); // 'hero' or 'booking'
  const [windowWidth, setWindowWidth] = useState(0);
  const texts = ['DISCOVER', 'EXPLORE', 'TRAVEL'];

  // Hydration check
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Mobile detection - only after hydration
  useEffect(() => {
    if (!isHydrated) return;

    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isHydrated]);

  // Prevent hydration mismatch by ensuring consistent initial state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
    }
  }, []);

  // Handle mobile viewport height for better background display
  useEffect(() => {
    if (isMobile) {
      const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      setVH();
      window.addEventListener('resize', setVH);
      return () => window.removeEventListener('resize', setVH);
    }
    return undefined;
  }, [isMobile]);

  // Text animation - words slide from top and bottom alternately
  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentText(prev => {
          if (direction === 1) {
            // Forward: DISCOVER → EXPLORE → TRAVEL (from top)
            if (prev === texts.length - 1) {
              setDirection(-1); // Switch to backward direction
              return prev;
            }
            return prev + 1;
          } else {
            // Backward: TRAVEL → EXPLORE → DISCOVER (from bottom)
            if (prev === 0) {
              setDirection(1); // Switch to forward direction
              return prev;
            }
            return prev - 1;
          }
        });
      },
      direction === 1 ? 1000 : 350
    );

    return () => clearInterval(interval);
  }, [direction, texts.length]);

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
        minHeight: isMobile ? '100vh' : '100vh',
        borderRadius: '0',
        overflow: isMobile ? 'hidden' : 'visible',
        margin: isMobile ? '10px' : '0',
        maxWidth: isMobile ? 'calc(100vw - 20px)' : '100%',
        marginLeft: isMobile ? 'auto' : '0',
        marginRight: isMobile ? 'auto' : '0',
      }}
    >
      {/* Background Image - Only for Hero Section */}
      {isMobile ? (
        <div
          className='absolute bg-no-repeat overflow-hidden'
          style={{
            backgroundImage: 'url(/img/home-bg.jpg)',
            width: '100%',
            height: '100%',
            minHeight: '500px',
            maxHeight: '800px',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            zIndex: 0,
            borderRadius: '0',
          }}
        />
      ) : (
        <div
          className='absolute inset-0 bg-cover bg-no-repeat'
          style={{
            backgroundImage: 'url(/img/home-bg.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: (windowWidth >= 1024 && windowWidth > 0) ? 'fixed' : 'scroll',
            zIndex: 0,
          }}
        />
      )}

      {/* Background overlay for better readability - Mobile Hero Section Only */}
      {isMobile ? (
        <div
          className='absolute'
          style={{
            width: '100%',
            height: '100%',
            minHeight: '500px',
            maxHeight: '800px',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: 1,
            borderRadius: '0',
            background:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(255, 255, 255, 0.6) 100%)',
            backdropFilter: 'blur(0.2px)',
            pointerEvents: 'none',
          }}
        />
      ) : (
        <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30 z-[1] pointer-events-none'></div>
      )}

      {/* Content wrapper with relative positioning */}
      <div className={`relative z-10 ${isMobile ? 'min-h-full' : ''}`}>
        {/* Header */}
        <header className='shadow-soft relative z-[60]'>
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
                        <button className='px-3 py-2 text-base text-orange-500 font-bold'>
                          India
                        </button>
                        <button className='px-3 py-2 text-base text-gray-500 hover:text-gray-700 font-bold'>
                          International
                        </button>
                        <a
                          href='/destinations/all'
                          className='px-3 py-2 text-base text-gray-500 hover:text-gray-700 font-bold'
                        >
                          All
                        </a>
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
                  className='text-white hover:text-white/80 hover:bg-white/10'
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
                    backgroundColor: '#29383E',
                    backdropFilter: 'blur(6px)',
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
                    backgroundColor: '#29383E66',
                    backdropFilter: 'blur(6px)',
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

        {/* Hero Section */}
        <main
          className={`max-w-6xl mx-auto w-full ${isMobile ? 'flex flex-col justify-start' : ''}`}
          style={{
            padding: isMobile 
              ? '60px 16px 20px 16px' 
              : (windowWidth >= 1536 
                ? '120px 32px 40px 32px' 
                : windowWidth >= 1280 
                  ? '100px 24px 40px 24px' 
                  : windowWidth >= 1024 
                    ? '80px 24px 32px 24px' 
                    : windowWidth >= 768 
                      ? '60px 20px 32px 20px' 
                      : windowWidth > 0 ? '40px 16px 24px 16px' : '80px 24px 32px 24px'),
            height: 'auto',
            minHeight: isMobile 
              ? '500px' 
              : (windowWidth >= 1024 
                ? '600px' 
                : windowWidth >= 768 
                  ? '500px' 
                  : windowWidth > 0 ? '400px' : '600px'),
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Mobile Back Button */}
          {isMobile && (
            <div className='absolute top-20 right-4 z-20'>
              <BackButton
                size='md'
                onClick={() => {
                  // Add back navigation logic here
                  // For now, just close any open modals or go back in history
                  if (window.history.length > 1) {
                    window.history.back();
                  }
                }}
              />
            </div>
          )}

          <div className={`text-center ${isMobile ? '' : 'mb-8 md:mb-16'}`}>
            <h1
              className='text-white text-center w-full'
              style={{
                fontFamily: isMobile
                  ? 'var(--font-gilroy-semibold)'
                  : 'var(--font-gilroy-bold)',
                fontSize: isMobile 
                  ? '12px' 
                  : (windowWidth >= 1536 
                    ? '22px' 
                    : windowWidth >= 1280 
                      ? '20px' 
                      : windowWidth >= 1024 
                        ? '18px' 
                        : windowWidth >= 768 
                          ? '16px' 
                          : windowWidth > 0 ? '14px' : '18px'),
                fontWeight: isMobile ? 400 : 700,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-6%',
                textTransform: 'capitalize',
                color: '#FFFFFF',
                textAlign: 'center',
                display: 'block',
                marginLeft: isMobile ? '0' : (windowWidth >= 1024 ? '30px' : '0'),
                marginTop: isMobile ? '60px' : (windowWidth >= 1024 ? '0' : '20px'),
                paddingLeft: isMobile ? '16px' : '0',
                paddingRight: isMobile ? '16px' : '0',
              }}
            >
              One adventure at a time
            </h1>

            {/* Animated Text Container */}
            <div
              className='relative overflow-hidden w-full flex justify-center'
              style={{
                height: isMobile ? '60px' : (windowWidth >= 1024 ? '140px' : windowWidth >= 768 ? '100px' : windowWidth > 0 ? '80px' : '120px'),
                opacity: 1,
                padding: isMobile ? '0' : (windowWidth >= 1024 ? '10px' : '8px'),
                marginTop: isMobile ? '8px' : (windowWidth >= 1024 ? '32px' : windowWidth >= 768 ? '24px' : windowWidth > 0 ? '16px' : '24px'),
              }}
            >
              <div
                className='absolute flex items-center justify-center w-full'
                style={{
                  transform: 'scale(1)',
                  transformOrigin: 'center',
                }}
              >
                <span
                  key={currentText}
                  className='animate-flow-from-top'
                  style={{
                    color: '#F2F4F6',
                    fontFamily: 'var(--font-gilroy-bold)',
                    fontWeight: 700,
                    fontSize: isMobile 
                      ? '48px' 
                      : (windowWidth >= 1536 
                        ? '180px' 
                        : windowWidth >= 1280 
                          ? '160px' 
                          : windowWidth >= 1024 
                            ? '140px' 
                            : windowWidth >= 768 
                              ? '100px' 
                              : windowWidth > 0 ? '80px' : '140px'),
                    lineHeight: '1',
                    letterSpacing: '2%',
                    textTransform: 'uppercase',
                    WebkitTextStroke: isMobile ? '1px #F2F4F6' : '2px #F2F4F6',
                    WebkitTextFillColor: '#F2F4F6',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                    width: '100%',
                    animationDuration: '0.5s',
                    animationFillMode: 'forwards',
                  }}
                >
                  {texts[currentText]}
                </span>
              </div>
            </div>

            {/* Desktop Booking Form - Right after animated text */}
            {!isMobile && (
              <div style={{ marginTop: '0', paddingTop: '0' }}>
                <BookingForm />
              </div>
            )}

            {/* Mobile Search Button */}
            {isMobile && currentMobilePage === 'hero' && (
              <div className='flex justify-center'>
                <button
                  onClick={() => setCurrentMobilePage('booking')}
                  className='text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg hover:scale-105'
                  style={{
                    width: '140px',
                    height: '44px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: '22px',
                    padding: '8px 16px',
                    marginBottom: '10px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Search Here
                </button>
              </div>
            )}

            {/* Mobile Action Button - Only in Hero Section */}
            {isMobile && currentMobilePage === 'hero' && (
              <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2 z-50'>
                <ActionButton
                  size='md'
                  onClick={() => {
                    // Add your action here - could be scroll to next section, open menu, etc.
                    // Example: scroll to next section or trigger navigation
                  }}
                />
              </div>
            )}
          </div>
        </main>

        {/* Mobile Navigation Tabs - Always Visible */}
        {isMobile && (
          <div>
            <BookingForm showTabsOnly={true} />
          </div>
        )}

        {/* Booking Form Section - Mobile Only */}
        {isMobile && currentMobilePage === 'booking' && (
          <div className='px-4 py-6'>
            <div className='mb-4'>
              <button
                onClick={() => setCurrentMobilePage('hero')}
                className='flex items-center text-gray-600 hover:text-gray-800 transition-colors'
              >
                <MdKeyboardArrowDown className='w-5 h-5 mr-2 rotate-90' />
                Back to Home
              </button>
            </div>
            <BookingForm />
          </div>
        )}


        {/* All Sections - Show on both mobile and desktop */}
        <div className='relative z-20' style={{ backgroundColor: '#F2F4F6' }}>
          {/* Spacing between sections */}
          <div className='py-8 md:py-16'></div>

          {/* Packages Section - Commented out for now */}
          {/* <PackagesSection /> */}

          {/* Hotels Section - Commented out for now */}
          {/* <HotelsSection /> */}

          {/* Cabs Section - Commented out for now */}
          {/* <CabsSection /> */}

          {/* Activities Section - Commented out for now */}
          {/* <ActivitiesSection /> */}

          {/* Deals and Offers Section */}
          <DealsAndOffers />

          {/* Promo Carousel Section */}
          <PromoCarousel />

          {/* Extraordinary Carousel Section */}
          <ExtraordinaryCarousel />

          {/* We Offer The Best Section */}
          <WeOfferTheBest />

          {/* Phoenix Fly Blogs Section */}
          <PhoenixFlyBlogsSection />

          {/* Explore World Section */}
          <ExploreWorld />

          {/* Flat Offer Component */}
          <FlatOffer />

          {/* Gallery Section */}
          <GallerySection />

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
