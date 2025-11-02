'use client';

import { useState, useRef, useMemo } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { FaPlane, FaBed, FaHiking, FaCar } from 'react-icons/fa';
import NextImage from 'next/image';
import { gilroySemiBold } from '../lib/fonts';
import OfferCard, { OfferCardData } from './OfferCard';
import { OFFERS_CONFIG, GRADIENT_OVERLAY } from '../constants';

interface OffersSectionProps {
  title: string;
  tabs?: Array<{ id: string; label: string }>;
  cards: OfferCardData[];
  showExploreButton?: boolean;
  showCarouselButton?: boolean;
  onExploreMore?: () => void;
}

export default function OffersSection({
  title,
  tabs,
  cards,
  showExploreButton = false,
  showCarouselButton = true,
  onExploreMore,
}: OffersSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || 'default');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Start with 1 card visible
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Memoize expensive calculations to prevent unnecessary re-renders
  const carouselConfig = useMemo(() => {
    const { cardWidth, cardGap, containerWidth } = OFFERS_CONFIG;
    const cardsPerView = Math.floor(
      (containerWidth + cardGap) / (cardWidth + cardGap)
    );
    const totalCards = (cards?.length || 0) + 1; // +1 for the Explore More card
    const maxIndex = Math.max(0, totalCards - cardsPerView);
    const adjustedMaxIndex = Math.min(maxIndex, (cards?.length || 0) - cardsPerView + 1);
    
    return {
      cardWidth,
      cardGap,
      cardsPerView,
      totalCards,
      maxIndex,
      adjustedMaxIndex,
    };
  }, [cards?.length]);

  // Input validation - moved after hooks to avoid conditional hook calls
  if (!title || typeof title !== 'string') {
    // In production, this should be logged to a monitoring service
    return (
      <div className='w-full bg-gray-100 py-8 md:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className={`text-2xl md:text-3xl text-gray-800 ${gilroySemiBold.className}`}>
              Invalid Configuration
            </h2>
            <p className='text-gray-600 mt-4'>Please check the component configuration.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    return (
      <div className='w-full bg-gray-100 py-8 md:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className={`text-2xl md:text-3xl text-gray-800 ${gilroySemiBold.className}`}>
              {title}
            </h2>
            <p className='text-gray-600 mt-4'>No offers available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  const slideRight = () => {
    if (currentIndex < carouselConfig.adjustedMaxIndex) {
      setCurrentIndex(prev => Math.min(prev + 1, carouselConfig.adjustedMaxIndex));
    }
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const handleExploreMore = () => {
    try {
      // Show next card if not all cards are visible
      if (visibleCards < cards.length) {
        setVisibleCards(prev => prev + 1);
      } else if (onExploreMore) {
        onExploreMore();
      }
    } catch {
      // In production, this should be logged to a monitoring service
      // and show user-friendly error message
      return;
    }
  };

  return (
    <div className='w-full bg-gray-100 py-8 md:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title */}
        <div className='text-center mb-6 md:mb-8'>
          <h2 className={`text-2xl md:text-3xl text-gray-800 ${gilroySemiBold.className}`}>
            {title}
          </h2>
        </div>

        {/* Navigation Tabs and Cards Container */}
        <div className='rounded-xl shadow-lg border border-gray-200 p-4 md:p-6' style={{ backgroundColor: '#F2F4F6' }}>
          {/* Navigation Tabs */}
          {tabs && tabs.length > 0 && (
            <div className='mb-6 md:mb-8'>
              <div className='flex overflow-x-auto gap-2 pb-2'>
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className='font-bold transition-colors cursor-pointer whitespace-nowrap flex-shrink-0 text-sm md:text-base'
                    style={{
                      height: '40px',
                      opacity: 1,
                      paddingTop: '8px',
                      paddingRight: '16px',
                      paddingBottom: '8px',
                      paddingLeft: '16px',
                      borderRadius: '10px',
                      backgroundColor:
                        activeTab === tab.id ? '#FFEFDF' : 'transparent',
                      color: activeTab === tab.id ? '#FF6A00' : '#374151',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Offer Cards */}
          <div className='relative overflow-hidden'>
            {/* Mobile Layout */}
            <div className='block md:hidden'>
              <div className='space-y-4'>
                {cards.slice(0, visibleCards).map(card => (
                  <div key={card.id} className='w-full'>
                    <OfferCard
                      card={card}
                      showExploreButton={false}
                      isMobile={true}
                    />
                  </div>
                ))}
                
              </div>
            </div>

            {/* Desktop Layout */}
            <div className='hidden md:block'>
              <div
                ref={scrollContainerRef}
                className='flex transition-transform duration-500 ease-in-out'
                style={{
                  transform: `translateX(-${currentIndex * (carouselConfig.cardWidth + carouselConfig.cardGap)}px)`,
                  gap: `${carouselConfig.cardGap}px`,
                  width: `${carouselConfig.totalCards * (carouselConfig.cardWidth + carouselConfig.cardGap) - carouselConfig.cardGap}px`,
                }}
              >
                {cards.map(card => (
                  <div key={card.id} className='flex-shrink-0'>
                    <OfferCard
                      card={card}
                      showExploreButton={showExploreButton}
                      isMobile={false}
                    />
                  </div>
                ))}

                {/* Blurred Explore More Card */}
                <div className='flex-shrink-0'>
                  <div
                    className='rounded-xl shadow-lg overflow-hidden border border-gray-200 relative'
                    style={{
                      width: `${OFFERS_CONFIG.cardWidth}px`,
                      height: `${OFFERS_CONFIG.desktopCardHeight}px`,
                      opacity: 1,
                      backgroundColor: '#F2F4F6',
                    }}
                  >
                    {/* Blurred Background Image */}
                    <div className='relative h-full'>
                      <NextImage
                        src={OFFERS_CONFIG.exploreMoreImage}
                        alt='Explore More'
                        fill
                        className='object-cover blur-sm'
                      />

                      {/* Gradient overlay for better text readability */}
                      <div
                        className='absolute inset-0'
                        style={{
                          background: GRADIENT_OVERLAY.background,
                        }}
                      ></div>

                      {/* Content */}
                      <div className='absolute inset-0 p-4 flex flex-col justify-center items-center text-center'>
                        {/* Orange Explore More Button */}
                        <button 
                          onClick={handleExploreMore}
                          className='bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg'
                        >
                          Explore More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation - Desktop Only */}
            {showCarouselButton && carouselConfig.adjustedMaxIndex > 0 && (
              <div className='hidden md:block'>
                {/* Left Arrow */}
                {currentIndex > 0 && (
                  <div className='absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-4'>
                    <button
                      onClick={slideLeft}
                      className='w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg'
                    >
                      <IoChevronBack className='w-16 h-16' />
                    </button>
                  </div>
                )}

                {/* Right Arrow */}
                {currentIndex < carouselConfig.adjustedMaxIndex && (
                  <div className='absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-4'>
                    <button
                      onClick={slideRight}
                      className='w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg'
                    >
                      <IoChevronForward className='w-6 h-6' />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Explore More Button - outside the container */}
        <div className='block md:hidden mt-6'>
          {visibleCards < cards.length && (
            <div className='flex justify-center'>
              <button 
                onClick={handleExploreMore}
                className='bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg'
                style={{
                  width: '160px',
                  height: '50px',
                  borderRadius: '10px',
                  paddingTop: '16px',
                  paddingRight: '40px',
                  paddingBottom: '16px',
                  paddingLeft: '40px',
                  fontFamily: 'var(--font-gilroy-semibold)',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1',
                  opacity: 1,
                  gap: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                Explore More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sample data for different pages
export const sampleOfferCards: OfferCardData[] = [
  {
    id: '1',
    title: 'Lemon Tree Hotel',
    location: 'New Delhi',
    image: '/img/deals/1de67b5c25346458f2bbfd0e3e119a6fd9b3d28d.png',
    category: 'Hotel',
    currentPrice: '₹ 5,999',
    originalPrice: '12,999',
    timer: '11h: 32m: 45s',
  },
  {
    id: '2',
    title: 'Shimla, Kullu & Manali',
    location: 'Manali',
    image: '/img/deals/fb039e036b15c368d0cd499657492ecfc3992662.png',
    category: 'Package',
    duration: '6N/7D',
    currentPrice: '₹ 10,999',
    originalPrice: '12,999',
    timer: '11h: 32m: 45s',
    features: [
      { icon: <FaPlane className='w-4 h-4' />, text: '2 Flights' },
      { icon: <FaBed className='w-4 h-4' />, text: '11 Hotels' },
      { icon: <FaHiking className='w-4 h-4' />, text: '5 Activities' },
      { icon: <FaCar className='w-4 h-4' />, text: '4 Transfers' },
    ],
  },
  {
    id: '3',
    title: 'Cordelia Cruise',
    location: 'Chennai - Chennai',
    image: '/img/deals/2d4c9922a164c963c1119287efbea275a823655f.png',
    category: 'Cruise',
    duration: '6N/7D',
    currentPrice: '₹ 10,999',
    originalPrice: '12,999',
    timer: '11h: 32m: 45s',
    date: '16 October 2023',
  },
  {
    id: '4',
    title: 'Taj Palace Hotel',
    location: 'Mumbai',
    image: '/img/deals/1de67b5c25346458f2bbfd0e3e119a6fd9b3d28d.png',
    category: 'Hotel',
    currentPrice: '₹ 8,999',
    originalPrice: '15,999',
    timer: '8h: 15m: 30s',
  },
  {
    id: '5',
    title: 'Goa Beach Package',
    location: 'Goa',
    image: '/img/deals/fb039e036b15c368d0cd499657492ecfc3992662.png',
    category: 'Package',
    duration: '4N/5D',
    currentPrice: '₹ 7,999',
    originalPrice: '11,999',
    timer: '6h: 45m: 20s',
    features: [
      { icon: <FaPlane className='w-4 h-4' />, text: '1 Flight' },
      { icon: <FaBed className='w-4 h-4' />, text: '4 Hotels' },
      { icon: <FaHiking className='w-4 h-4' />, text: '3 Activities' },
      { icon: <FaCar className='w-4 h-4' />, text: '2 Transfers' },
    ],
  },
  {
    id: '6',
    title: 'Kerala Backwaters',
    location: 'Kochi',
    image: '/img/deals/2d4c9922a164c963c1119287efbea275a823655f.png',
    category: 'Cruise',
    duration: '3N/4D',
    currentPrice: '₹ 6,999',
    originalPrice: '9,999',
    timer: '4h: 20m: 10s',
    date: '20 November 2023',
  },
];

export const sampleTabs = [
  { id: 'deals', label: 'Deals' },
  { id: 'hotels', label: 'Hotels' },
  { id: 'packages', label: 'Packages' },
  { id: 'cruise', label: 'Cruise' },
  { id: 'cabs', label: 'Cabs' },
  { id: 'activities', label: 'Activities' },
  { id: 'community', label: 'Community Trips' },
  { id: 'trekking', label: 'Trekking' },
];
