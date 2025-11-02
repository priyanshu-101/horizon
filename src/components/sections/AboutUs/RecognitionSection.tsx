'use client';

import Image from 'next/image';

export default function RecognitionSection() {
  const partners = [
    {
      name: 'Summit Hotels & Resorts',
      logo: '/svgs/about_us/SummitHotelsResorts.svg',
    },
    { name: 'TAJ Group', logo: '/svgs/about_us/TAJGroup.svg' },
    { name: 'Startup India', logo: '/svgs/about_us/startup-india.svg' },
    { name: 'Marriott Bonvoy', logo: '/svgs/about_us/Marriott-Bonvoy.svg' },
  ];

  const paymentMethods = [
    {
      name: 'American Express',
      logo: '/svgs/about_us/payment/American Express svg.svg',
    },
    { name: 'Mastercard', logo: '/svgs/about_us/payment/mastercard.svg' },
    { name: 'VISA', logo: '/svgs/about_us/payment/visa.svg' },
    { name: 'PayPal', logo: '/svgs/about_us/payment/PayPal - png.svg' },
  ];

  return (
    <div className='bg-white py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Recognition Section */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
            Recognition By Government
          </h2>
          <p className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            Phoenix Fly, a certified tour operator and ATOAI member, has quickly
            earned trust in the travel industry, winning multiple
            awards—including the TripAdvisor Travelers' Choice 2023 and MSME
            Best Enterprise for three years—while being recognized by Startup
            India and featured in ANI and Business Standard.
          </p>
        </div>

        {/* Partners Section */}
        <div className='overflow-hidden mb-16'>
          <div className='flex items-center gap-8 lg:gap-12 animate-scroll-right'>
            {partners.map((partner, index) => (
              <div
                key={index}
                className='flex items-center justify-center h-28 w-56 flex-shrink-0'
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={224}
                  height={112}
                  className={`transition-all duration-300 ${
                    partner.name === 'Summit Hotels & Resorts'
                      ? 'h-28 w-auto object-contain'
                      : 'max-h-28 max-w-56 w-auto h-auto object-contain'
                  }`}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`duplicate-${index}`}
                className='flex items-center justify-center h-28 w-56 flex-shrink-0'
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={224}
                  height={112}
                  className={`transition-all duration-300 ${
                    partner.name === 'Summit Hotels & Resorts'
                      ? 'h-28 w-auto object-contain'
                      : 'max-h-28 max-w-56 w-auto h-auto object-contain'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className='bg-gray-100 rounded-2xl p-4 sm:p-6 mb-16'>
          {/* Mobile Layout */}
          <div className='block sm:hidden'>
            {/* Avatar Row */}
            <div className='flex justify-center -space-x-1 mb-4'>
              {[
                'jurica-koletic-7YVZYZeITc8-unsplash.jpg',
                'jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
                'rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg',
                'alex-suprun-ZHvM3XIOHoE-unsplash.jpg',
                'christopher-campbell-rDEOVtE7vOs-unsplash.jpg',
              ].map((imageName, index) => (
                <div
                  key={index}
                  className='w-12 h-12 rounded-full border-2 border-white overflow-hidden'
                >
                  <Image
                    src={`/img/about_us/reviewes_people/${imageName}`}
                    alt={`Reviewer ${index + 1}`}
                    width={48}
                    height={48}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>

            {/* Rating and Description */}
            <div className='text-center mb-4'>
              <h3 className='text-xl font-bold text-gray-800 mb-1'>
                1.2K+ Reviews
              </h3>
              <p className='text-sm text-gray-600'>
                Hear What Our Travelers Are Saying
              </p>
            </div>

            {/* Button */}
            <div className='flex justify-center'>
              <button className='bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm'>
                Check Reviews
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className='hidden sm:flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              {/* Avatar Row */}
              <div className='flex -space-x-1'>
                {[
                  'jurica-koletic-7YVZYZeITc8-unsplash.jpg',
                  'jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
                  'rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg',
                  'alex-suprun-ZHvM3XIOHoE-unsplash.jpg',
                  'christopher-campbell-rDEOVtE7vOs-unsplash.jpg',
                ].map((imageName, index) => (
                  <div
                    key={index}
                    className='w-10 h-10 rounded-full border-2 border-white overflow-hidden'
                  >
                    <Image
                      src={`/img/about_us/reviewes_people/${imageName}`}
                      alt={`Reviewer ${index + 1}`}
                      width={40}
                      height={40}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <div>
                <h3 className='text-lg font-bold text-gray-800'>
                  1.2K+ Reviews
                </h3>
                <p className='text-sm text-gray-600'>
                  Hear What Our Travelers Are Saying
                </p>
              </div>
            </div>
            <button className='bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm'>
              Check Reviews
            </button>
          </div>
        </div>

        {/* Footer Information */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Contact Us */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Contact Us</h3>
            <div className='space-y-3'>
              <div className='flex items-center justify-center md:justify-start space-x-3'>
                <svg
                  className='w-5 h-5 text-orange-500'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                </svg>
                <span className='text-gray-600'>
                  phoenixflytravel@gmail.com
                </span>
              </div>
              <div className='flex items-center justify-center md:justify-start space-x-3'>
                <svg
                  className='w-5 h-5 text-orange-500'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                </svg>
                <span className='text-gray-600'>+91-8861524428</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Address</h3>
            <div className='flex items-start justify-center md:justify-start space-x-3'>
              <svg
                className='w-5 h-5 text-orange-500 mt-1'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
              <span className='text-gray-600'>
                3rd floor, above united medicals, ramdev galli, belagavi -
                590010
              </span>
            </div>
          </div>

          {/* We Accept */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>We Accept</h3>
            <div className='flex flex-wrap justify-center md:justify-start gap-0.5'>
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className='h-6 w-12 flex items-center justify-center'
                >
                  <Image
                    src={method.logo}
                    alt={method.name}
                    width={48}
                    height={24}
                    className='h-6 w-auto object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
