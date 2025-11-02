'use client';

import { useState, useEffect, useRef } from 'react';

interface FlatOfferProps {
  show?: boolean;
}

export default function FlatOffer({ show = true }: FlatOfferProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [signupButtonVisible, setSignupButtonVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Hydration check
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!show || !isHydrated) return;

    // Create intersection observer to track signup button visibility
    const signupButton = document.querySelector('[data-signup-button]');

    if (signupButton) {
      observerRef.current = new IntersectionObserver(
        entries => {
          const [entry] = entries;
          if (entry) {
            setSignupButtonVisible(entry.isIntersecting);
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the button is visible
          rootMargin: '0px 0px -10% 0px', // Add some margin to ensure it's truly visible
        }
      );

      observerRef.current.observe(signupButton);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [show, isHydrated]);

  useEffect(() => {
    if (!show || !signupButtonVisible) return;

    // Show the offer card every 2 seconds, but only when signup button is visible
    const interval = setInterval(() => {
      if (signupButtonVisible) {
        setShouldRender(true);
        setIsVisible(true);

        // Hide after 1.5 seconds
        setTimeout(() => {
          setIsVisible(false);
          // Remove from DOM after animation completes
          setTimeout(() => {
            setShouldRender(false);
          }, 300);
        }, 1500);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [show, signupButtonVisible]);

  // Clean up when signup button becomes invisible
  useEffect(() => {
    if (!signupButtonVisible) {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }
  }, [signupButtonVisible]);

  // Don't render until hydrated to prevent mismatch
  if (!isHydrated || !shouldRender || !signupButtonVisible) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full pointer-events-none z-50'>
      <div className='relative w-full h-full'>
        {/* Offer Card positioned near signup button */}
        <div
          className={`absolute top-20 right-8 lg:right-16 transition-all duration-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          {/* Card Container */}
          <div className='relative'>
            {/* Arrow pointing up to signup button */}
            <div className='absolute -top-3 right-36'>
              <div className='w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white'></div>
            </div>

            {/* Main Card */}
            <div className='bg-white border border-orange-200 rounded-xl shadow-lg min-w-[280px]'>
              <div className='p-4 m-2 bg-orange-200 rounded-lg'>
                <div className='flex items-center space-x-3'>
                  {/* Discount Icon - Cogwheel/Starburst style */}
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center relative'>
                      {/* Cogwheel/Starburst effect */}
                      <div className='absolute inset-0 rounded-full border-2 border-orange-400'></div>
                      <div className='absolute inset-1 rounded-full border border-orange-300'></div>
                      <span className='text-white font-bold text-lg relative z-10'>
                        %
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className='flex-1'>
                    <div className='text-orange-600 font-bold text-lg'>
                      Flat 20% OFF
                    </div>
                    <div className='text-orange-600 font-medium text-sm'>
                      On your First Booking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
