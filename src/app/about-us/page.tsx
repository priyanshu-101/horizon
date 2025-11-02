'use client';

import { Button, Logo } from '@/components/ui';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { gilroyBold } from '@/lib/fonts';
import Image from 'next/image';
import {
  HeroSection,
  OurStorySection,
  OurValuesSection,
  OurMissionSection,
  RecognitionSection,
  FooterSection,
} from '@/components/sections/AboutUs';

export default function AboutUsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

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
                className='hover:opacity-80 transition-colors text-orange-500'
                style={{
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
                  className='block text-orange-500 font-medium'
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
      <main className='relative z-10'>
        <HeroSection />
        <OurStorySection />
        <OurMissionSection />
        <OurValuesSection />
        <RecognitionSection />
        <FooterSection />
      </main>
    </div>
  );
}
