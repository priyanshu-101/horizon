'use client';

import Image from 'next/image';

export default function OurStorySection() {
  return (
    <div className='relative bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Mobile Layout - Text above image */}
        <div className='block lg:hidden'>
          <div className='max-w-4xl mx-auto'>
            {/* Our Story Heading */}
            <div className='text-left mb-6'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-800'>
                Our Story
              </h2>
            </div>

            {/* Story Content */}
            <div className='mb-8'>
              <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-left max-w-3xl'>
                At Phoenix Fly, we specialize in crafting unforgettable travel
                experiences, be it luxurious getaways, cultural immersions, or
                adrenaline-filled adventures. Whether you're traveling solo,
                with friends, or as a family, we take care of every detail to
                ensure your journey is seamless, exciting, and memorable.
              </p>
            </div>

            {/* Story Image */}
            <div className='relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg'>
              <Image
                src='/img/about_us/our-story.jpg'
                alt='Our Story - Phoenix Fly Travel Experiences'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Image left, text right */}
        <div className='hidden lg:block'>
          <div className='grid grid-cols-2 gap-12 items-center'>
            {/* Left Column - Image */}
            <div className='relative w-full h-96 rounded-2xl overflow-hidden shadow-lg'>
              <Image
                src='/img/about_us/our-story.jpg'
                alt='Our Story - Phoenix Fly Travel Experiences'
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* Right Column - Text Content */}
            <div className='space-y-6'>
              <h2 className='text-5xl font-bold text-gray-800'>Our Story</h2>
              <p className='text-lg text-gray-700 leading-relaxed'>
                At Phoenix Fly, we specialize in crafting unforgettable travel
                experiences, be it luxurious getaways, cultural immersions, or
                adrenaline-filled adventures. Whether you're traveling solo,
                with friends, or as a family, we take care of every detail to
                ensure your journey is seamless, exciting, and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
