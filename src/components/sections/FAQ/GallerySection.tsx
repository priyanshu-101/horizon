'use client';

import Image from 'next/image';

export default function GallerySection() {
  return (
    <div
      className='py-8 sm:py-12 md:py-16 lg:py-20'
      style={{
        backgroundColor: '#F8F8F8',
      }}
    >
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
        {/* Gallery Header */}
        <div className='text-center mb-8 sm:mb-10 md:mb-12'>
          <h2
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gilroy-bold mb-3 sm:mb-4 md:mb-6'
            style={{
              color: '#16242A',
              fontWeight: 600,
            }}
          >
            Gallery
          </h2>
          <p
            className='text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-6'
            style={{
              color: '#4B5563',
              fontWeight: 400,
            }}
          >
            Have a look at the beautiful images of our happy customers
          </p>
        </div>
      </div>

      {/* Gallery Image - Full Width */}
      <div className='relative w-full'>
        <Image
          src='/svgs/image list.png'
          alt='Gallery - Beautiful images of our happy customers'
          width={1200}
          height={600}
          className='w-full h-auto object-cover'
          priority
        />
      </div>
    </div>
  );
}
