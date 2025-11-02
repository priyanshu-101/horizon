'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='relative bg-white py-8 sm:py-12 lg:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight'>
              <span className='block'>Redefining Travel</span>
              <span className='block'>Experiences</span>
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className='space-y-4'>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
              Phoenix Fly is an online travel platform that specialises in
              providing personalised and affordable travel packages, including
              luxury travel options. We understand that every traveler is
              unique, which is why we offer customised packages that fit your
              specific needs and budget, ensuring that you have a unique and
              memorable trip.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className='mt-8 sm:mt-10 lg:mt-12'>
          <div className='relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden'>
            <Image
              src='/img/about_us/redefining-travel-exp.jpg'
              alt='Redefining Travel Experiences'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
