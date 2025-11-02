'use client';

import { FiClock, FiCalendar } from 'react-icons/fi';
import NextImage from 'next/image';
import { useState } from 'react';
import { OFFERS_CONFIG, GRADIENT_OVERLAY } from '../constants';

export interface OfferCardData {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  duration?: string;
  currentPrice: string;
  originalPrice: string;
  timer: string;
  features?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  date?: string;
}

interface OfferCardProps {
  card: OfferCardData;
  showExploreButton?: boolean;
  isMobile?: boolean;
}

export default function OfferCard({
  card,
  showExploreButton = false,
  isMobile = false,
}: OfferCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    // In production, this should be logged to a monitoring service
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };
  return (
    <div
      className='rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200'
      style={{
        width: isMobile ? '100%' : `${OFFERS_CONFIG.cardWidth}px`,
        height: isMobile ? `${OFFERS_CONFIG.mobileCardHeight}px` : `${OFFERS_CONFIG.desktopCardHeight}px`,
        opacity: 1,
        backgroundColor: '#F2F4F6',
      }}
    >
      {/* Card Image with Overlay Content */}
      <div className='relative h-full bg-gray-200'>
        {!imageError ? (
          <NextImage
            src={card.image}
            alt={card.title}
            fill
            className='object-cover'
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-gray-300'>
            <div className='text-center text-gray-600'>
              <div className='text-4xl mb-2'>{OFFERS_CONFIG.fallbackImage}</div>
              <div className='text-sm'>Image unavailable</div>
            </div>
          </div>
        )}
        
        {/* Loading indicator */}
        {imageLoading && !imageError && (
          <div className='absolute inset-0 bg-gray-200 flex items-center justify-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500'></div>
          </div>
        )}

        {/* Gradient overlay for better text readability */}
        <div
          className='absolute inset-0'
          style={{
            background: GRADIENT_OVERLAY.background,
          }}
        ></div>

        {/* Timer */}
        <div className={`absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 font-medium ${
          isMobile ? 'text-xs' : 'text-sm'
        }`}>
          <FiClock className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
          <span>Ends in {card.timer}</span>
        </div>

        {/* Card Content Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 text-white ${isMobile ? 'p-3' : 'p-4'}`}>
          <div className={`text-white/90 mb-1 ${isMobile ? 'text-xs' : 'text-sm'}`}>{card.category}</div>
          <h3 className={`font-bold text-white mb-2 ${isMobile ? 'text-lg' : 'text-xl'}`}>{card.title}</h3>
          <div className={`text-white/90 mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>
            <span>{card.location}</span>
          </div>

          {/* Features for Package deals */}
          {card.features && (
            <div className={`grid grid-cols-2 gap-2 mb-4 ${isMobile ? 'gap-1' : 'gap-2'}`}>
              {card.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 text-white/90 ${isMobile ? 'text-xs' : 'text-sm'}`}
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          )}

          {/* Date for Cruise deals */}
          {card.date && (
            <div className={`flex items-center text-white/90 mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>
              <FiCalendar className={`${isMobile ? 'w-3 h-3 mr-1' : 'w-4 h-4 mr-1'}`} />
              <span>{card.date}</span>
            </div>
          )}

          {/* Pricing */}
          <div className='flex items-baseline mb-2'>
            <span className={`font-bold text-orange-500 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              ₹
            </span>
            <span className={`font-bold text-white ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
              {card.currentPrice.replace('₹', '').trim()}
            </span>
            <span className={`text-white/70 line-through ml-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
              {card.originalPrice}
            </span>
            <span className={`text-white/90 ml-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>Per Person</span>
          </div>

          <div className={`text-white/90 mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>Includes taxes</div>

          {/* Explore More Button */}
          {showExploreButton && (
            <button className={`w-full bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors ${
              isMobile ? 'py-1.5 px-3 text-sm' : 'py-2 px-4'
            }`}>
              Explore More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
