'use client';

import Image from 'next/image';

export default function OurMissionSection() {
  const features = [
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
        </svg>
      ),
      title: 'One-Stop Solution',
      description:
        "We're your one-stop travel hub for bookings & experiences - flights, stays, transport, and adventures all in one place.",
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C15.31 8 18 10.69 18 14V16H20V14C20 9.58 16.42 6 12 6S4 9.58 4 14V16H6V14C6 10.69 8.69 8 12 8ZM12 20C10.9 20 10 19.1 10 18H14C14 19.1 13.1 20 12 20Z' />
        </svg>
      ),
      title: 'Personalized Recommendations',
      description:
        'We offer personalized service and custom itineraries to match your unique travel style, group size, and budget.',
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12S12 10.2 12 8S13.8 4 16 4M16 6C14.9 6 14 6.9 14 8S14.9 10 16 10S18 9.1 18 8S17.1 6 16 6M16 13C18.67 13 24 14.33 24 17V20H8V17C8 14.33 13.33 13 16 13M6 12C8.2 12 10 10.2 10 8S8.2 4 6 4S2 5.8 2 8S3.8 12 6 12M6 6C6.9 6 7.8 6.9 7.8 8S6.9 10 6 10S4.2 9.1 4.2 8S5.1 6 6 6M6 13C8.67 13 14 14.33 14 17V20H0V17C0 14.33 5.33 13 6 13Z' />
        </svg>
      ),
      title: 'Safety & Security',
      description:
        'We work only with trusted partners and uphold the highest standards across all our travel packages.',
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M4 6C2.9 6 2 6.9 2 8V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V8C22 6.9 21.1 6 20 6H4M4 8H20V16H4V8M6 10V14H8V10H6M10 10V14H12V10H10M14 10V14H16V10H14M18 10V14H20V10H18M6 12H8V14H6V12M10 12H12V14H10V12M14 12H16V14H14V12M18 12H20V14H18V12Z' />
        </svg>
      ),
      title: 'Hassle-Free Booking',
      description:
        'We ensure a smooth booking experience with easy access, secure payments, & 24/7 customer support throughout your journey.',
    },
  ];

  return (
    <div className='bg-gray-50 py-8 sm:py-12 lg:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Left Column - Feature Cards */}
          <div className='space-y-4 order-2 lg:order-1 flex flex-col justify-center'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white rounded-[10px] p-6 shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='flex items-start gap-[10px]'>
                  <div
                    className='flex-shrink-0 w-[72px] h-[72px] rounded-lg flex items-center justify-center p-5'
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255, 217, 189, 0.3) 0%, rgba(179, 229, 241, 0.3) 85.99%)',
                      color: '#FF6A00',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-gray-800 mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Mission Content */}
          <div className='space-y-6 order-1 lg:order-2'>
            <div>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
                Our Mission
              </h2>

              <p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-6'>
                Our mission is to inspire exploration and simplify travel
                through expert support and curated experiences.
              </p>
            </div>

            {/* Mission Image */}
            <div className='relative w-full h-64 sm:h-80 lg:h-96 rounded-[10px] overflow-hidden'>
              <Image
                src='/img/about_us/our-mission.jpg'
                alt='Our Mission'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
