'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <div className='w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16'>
      <div className='max-w-6xl mx-auto relative overflow-hidden rounded-2xl md:rounded-3xl'>
        {/* Background Image */}
        <div className='absolute inset-0 w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop'
            alt='Beach and coastal town'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
          />
        </div>

        {/* Dark Semi-Transparent Overlay */}
        <div
          className='absolute inset-0 z-10 rounded-2xl md:rounded-3xl'
          style={{
            background:
              'linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 65%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        />

        {/* Content */}
        <div className='relative z-20 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20'>
          {/* Text Content */}
          <div className='max-w-2xl mb-6 md:mb-8'>
            <h2
              className='text-white mb-3 md:mb-4'
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                lineHeight: '1.2',
                fontFamily: 'var(--font-gilroy-bold)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Stay In The Loop, Travel Smarter
            </h2>
            <p
              className='text-white mb-6 md:mb-8'
              style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                lineHeight: '1.5',
                fontFamily: 'var(--font-gilroy-semibold)',
                fontWeight: 600,
              }}
            >
              Subscribe To Our Newsletter
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className='mb-4 md:mb-6'>
              <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter Your Email'
                  required
                  className='flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all'
                  style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontFamily: 'var(--font-gilroy-semibold)',
                    backgroundColor: '#F3F4F6',
                  }}
                />
                <button
                  type='submit'
                  className='px-6 md:px-8 py-3 md:py-4 rounded-lg text-white font-semibold transition-all hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontFamily: 'var(--font-gilroy-semibold)',
                    fontWeight: 600,
                    backgroundColor: '#FF6A00',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Disclaimer/Benefit Text */}
            <p
              className='text-white'
              style={{
                fontSize: 'clamp(12px, 1.8vw, 14px)',
                lineHeight: '1.6',
                fontFamily: 'var(--font-gilroy-semibold)',
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: '600px',
              }}
            >
              By Subscribing, You'll Stay Informed About Our Newest And Most
              Exciting Offers. Ensuring You Never Miss Out On The Freshest And
              Most Advantageous Opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
