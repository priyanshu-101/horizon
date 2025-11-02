import React, { useState } from 'react';
import { BLOG_CATEGORIES } from '@/constants';
import { BlogCategory } from '@/types';

const BlogCategorySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 items at a time on desktop, 1 on mobile
  const totalPages = Math.ceil(BLOG_CATEGORIES.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between mb-12'>
          <h2 className='text-3xl sm:text-4xl font-gilroy-semibold text-gray-900'>
            Read By Category
          </h2>

          {/* Navigation Arrows - Mobile Only */}
          <div className='flex items-center space-x-2 md:hidden'>
            <button
              onClick={prevSlide}
              className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors duration-200'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className='w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-200'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile: Single item carousel */}
        <div className='block md:hidden'>
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {BLOG_CATEGORIES.map((category: BlogCategory) => (
                <div key={category.id} className='w-full flex-shrink-0 px-2'>
                  <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group'>
                    <div className='relative h-64 overflow-hidden'>
                      <img
                        src={category.image}
                        alt={category.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                    <div className='p-6'>
                      <h3 className='text-xl font-gilroy-semibold text-gray-900 mb-3'>
                        {category.title}
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Full grid without navigation */}
        <div className='hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8'>
          {BLOG_CATEGORIES.map((category: BlogCategory) => (
            <div
              key={category.id}
              className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group'
            >
              <div className='relative h-64 overflow-hidden'>
                <img
                  src={category.image}
                  alt={category.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-gilroy-semibold text-gray-900 mb-3'>
                  {category.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategorySection;
