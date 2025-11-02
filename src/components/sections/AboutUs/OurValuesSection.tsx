'use client';

export default function OurValuesSection() {
  const values = [
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
        </svg>
      ),
      title: 'Customer - Centric',
      description:
        'Your satisfaction drives everything we do. Expect exceptional service and support at every step.',
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
        </svg>
      ),
      title: 'Integrity',
      description:
        'We believe in honest and transparent operations, building trust with you and our partners.',
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zm0 16.5h-15v-11h15v11z' />
        </svg>
      ),
      title: 'Innovation',
      description:
        "We're constantly seeking fresh, creative solutions to elevate your travel experiences.",
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
        </svg>
      ),
      title: 'Passion For Travel',
      description:
        'Our deep love for exploration fuels us to share incredible journeys with you.',
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
        </svg>
      ),
      title: 'Expertise & Experience',
      description:
        'Our team of travel experts has years of experience in the industry, and is passionate about delivering unforgettable travel experiences to our customers.',
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10H3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h4zm2-2v2h6V2H9z' />
        </svg>
      ),
      title: 'Competitive Pricing',
      description:
        "We believe that travel should be affordable and accessible to everyone. That's why we offer competitive pricing on all our travel packages, without compromising on the quality of service.",
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
        </svg>
      ),
      title: 'Best Price Guarantee',
      description:
        "We believe that you shouldn't have to sacrifice quality for affordability. That's why we offer a Best Price Guarantee, ensuring that you always get the best value when you book with us.",
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
        </svg>
      ),
      title: 'Wide Range Of Travel Itinerary',
      description:
        'Our website offers a wide range of travel options, including luxury travel packages, adventure travel, and off-the-beaten-path destinations.',
    },
  ];

  return (
    <div className='bg-gray-50 py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Our Values Section */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Our Values
          </h2>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
            We're dedicated to exceptional experiences through trust, fresh
            thinking, and a genuine love for travel.
          </p>
        </div>

        {/* Values Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20'>
          {values.map((value, index) => (
            <div
              key={index}
              className='bg-white rounded-[10px] p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow'
            >
              {/* Mobile Layout - Centered */}
              <div className='flex flex-col items-center text-center space-y-3 lg:hidden'>
                <div
                  className='flex-shrink-0 w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center p-3 sm:p-5'
                  style={{ background: '#D7F7FF', color: '#0593B7' }}
                >
                  {value.icon}
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3'>
                    {value.title}
                  </h3>
                  <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Horizontal */}
              <div className='hidden lg:flex items-start space-x-4'>
                <div
                  className='flex-shrink-0 w-[60px] h-[60px] rounded-full flex items-center justify-center p-4'
                  style={{ background: '#D7F7FF', color: '#0593B7' }}
                >
                  {value.icon}
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    {value.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Is It Great Section */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Why Is It Great
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center space-y-3'
            >
              <div
                className='flex-shrink-0 w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center p-3 sm:p-5'
                style={{ background: '#FF6B00', color: '#FFFFFF' }}
              >
                {benefit.icon}
              </div>
              <div className='flex-1'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3'>
                  {benefit.title}
                </h3>
                <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
