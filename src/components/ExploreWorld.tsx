'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ExploreWorldProps {
  className?: string;
}

const ExploreWorld: React.FC<ExploreWorldProps> = ({ className = '' }) => {
  const [selectedTab, setSelectedTab] = useState<'india' | 'international'>('india');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const indiaExperiences = [
    {
      id: 'north-india',
      title: 'North India',
      subtitle: 'Explore The Best Of',
      description: 'Embark on an enchanting Himalayan odyssey of cultures and majestic landscapes in North India.',
      image: '/img/explore_world/4e54eb63b79a8c697d267316d55c248d61738fe0.jpg',
      isWide: true,
    },
    {
      id: 'south-india',
      title: 'South India',
      image: '/img/explore_world/a25e3254e07039637085de5d54ce68185bf3dcdd.jpg',
      isWide: false,
    },
    {
      id: 'west-india',
      title: 'West India',
      image: '/img/explore_world/ee284a65de208a6f4cc2ac9b4dbd4e968e5e0b7e.png',
      isWide: false,
    },
    {
      id: 'east-india',
      title: 'East India',
      image: '/img/explore_world/fbb0880085cd4a71a5d739129d8996408a136d34.png',
      isWide: false,
    },
  ];

  const internationalExperiences = [
    {
      id: 'europe',
      title: 'Europe',
      subtitle: 'Explore The Best Of',
      description: 'Embark on an enchanting European odyssey of cultures and majestic landscapes across the continent.',
      image: '/img/explore_world/international/europe.jpg',
      isWide: true,
    },
    {
      id: 'dubai',
      title: 'Dubai',
      image: '/img/explore_world/international/dubai.jpg',
      isWide: false,
    },
    {
      id: 'thailand',
      title: 'Thailand',
      image: '/img/explore_world/international/thailand.jpg',
      isWide: false,
    },
    {
      id: 'more-destinations',
      title: 'Destinations',
      image: '/img/explore_world/international/destinations.jpg',
      isWide: false,
    },
  ];

  const travelExperiences = selectedTab === 'india' ? indiaExperiences : internationalExperiences;


  // Reset currentIndex when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTab]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % travelExperiences.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [travelExperiences.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0]?.clientY || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientY || 0);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe && currentIndex < travelExperiences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isDownSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className={`py-8 md:py-16 px-4 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 
            className="text-2xl md:text-4xl text-gray-900 mb-2 md:mb-4"
            style={{
              fontFamily: 'var(--font-gilroy-semibold)',
              fontWeight: 400
            }}
          >
            Explore The World
          </h2>
          <p className="text-sm md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Browse top domestic and international travel experiences tailored for every kind of traveler.
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div 
            className="bg-white shadow-sm border border-gray-200 relative w-[280px] h-12 md:w-[410px] md:h-[68px]"
            style={{ 
              borderRadius: '62.96px',
              opacity: 1
            }}
          >
            <button
              onClick={() => setSelectedTab('india')}
              className={`transition-all duration-200 cursor-pointer absolute ${
                selectedTab === 'india'
                  ? 'bg-orange-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              } w-[130px] h-9 top-[6px] left-[6px] md:w-[192px] md:h-[52px] md:top-[8px] md:left-[8px]`}
              style={{
                borderRadius: '50px',
                opacity: 1,
                fontFamily: 'var(--font-gilroy-semibold)',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-2%'
              }}
            >
              India
            </button>
            <button
              onClick={() => setSelectedTab('international')}
              className={`transition-all duration-200 cursor-pointer absolute ${
                selectedTab === 'international'
                  ? 'bg-orange-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              } w-[130px] h-9 top-[6px] right-[6px] md:w-[192px] md:h-[52px] md:top-[8px] md:right-[8px]`}
              style={{
                borderRadius: '50px',
                opacity: 1,
                fontFamily: 'var(--font-gilroy-semibold)',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-2%'
              }}
            >
              International
            </button>
          </div>
        </div>

        {/* Travel Experience Cards - Responsive Carousel */}
        <div className="block md:hidden">
          {/* Mobile Vertical Expanding Carousel */}
          <div 
            className="relative overflow-hidden h-[400px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col h-full">
              {travelExperiences.map((experience, index) => {
                const isActive = index === currentIndex;
                
                return (
                  <div
                    key={experience.id}
                    className={`relative overflow-hidden shadow-lg transition-all duration-700 ease-in-out cursor-pointer ${
                      isActive ? 'flex-1' : 'h-16'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      borderRadius: '10px',
                      marginBottom: index < travelExperiences.length - 1 ? '0.5rem' : '0',
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: isActive 
                            ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 46.36%, rgba(0, 0, 0, 0.67) 78.5%, rgba(0, 0, 0, 0.95) 100%)'
                            : 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)'
                        }}
                      />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-3">
                        {isActive ? (
                          <div className="text-white">
                            <p className="text-xs mb-1 opacity-90">{experience.subtitle || 'Explore The Best Of'}</p>
                            <h3 className="text-lg font-bold mb-2">{experience.title}</h3>
                            <p className="text-xs leading-relaxed opacity-90">
                              {experience.description || 'Discover amazing destinations and experiences with our curated travel packages.'}
                            </p>
                          </div>
                        ) : (
                          <div className="text-white">
                            <h3 className="text-sm font-bold truncate">{experience.title}</h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          {/* Desktop Horizontal Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center">
            {travelExperiences.map((experience, index) => {
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={experience.id}
                  className={`relative overflow-hidden shadow-lg cursor-pointer group transition-all duration-1000 ease-in-out flex-shrink-0`}
                  style={{
                    width: isActive ? '600px' : '190px',
                    height: '495px',
                    opacity: 1,
                    borderRadius: '10px',
                    marginRight: index < travelExperiences.length - 1 ? '1.5rem' : '0',
                    zIndex: isActive ? 10 : 1,
                    transition: 'width 1s ease-in-out',
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    
                    {/* Gradient Overlay for all cards */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 46.36%, rgba(0, 0, 0, 0.67) 78.5%, rgba(0, 0, 0, 0.95) 100%)'
                      }}
                    />
                    

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {isActive ? (
                        <div className="text-white">
                          <p className="text-sm mb-2 opacity-90">{experience.subtitle || 'Explore The Best Of'}</p>
                          <h3 className="text-3xl font-bold mb-3">{experience.title}</h3>
                          <p className="text-sm leading-relaxed opacity-90 max-w-md">
                            {experience.description || 'Discover amazing destinations and experiences with our curated travel packages.'}
                          </p>
                        </div>
                        ) : (
                          <div className="text-white">
                            <h3 
                              className="text-2xl font-bold transform -rotate-90 origin-bottom-left absolute whitespace-nowrap text-shadow-lg"
                              style={{
                                left: experience.title.length > 8 ? '140px' : '150px',
                                bottom: experience.title.length > 8 ? '24px' : '36px'
                              }}
                            >
                              {experience.title}
                            </h3>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWorld;
