'use client';

import Image from 'next/image';

export default function WeOfferTheBest() {
  return (
    <div className='w-full py-8 md:py-12 lg:py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
        <div className='relative w-full' style={{ aspectRatio: '16/9', minHeight: '600px' }}>
          <Image
            src='/services.png'
            alt='We offer the Best - Services'
            fill
            className='object-contain'
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
          />
        </div>
      </div>
    </div>
  );
}

