'use client';

export default function FAQHeader() {
  return (
    <div className='text-center mb-8 sm:mb-10 md:mb-12'>
      <h1
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gilroy-bold mb-3 sm:mb-4 md:mb-6'
        style={{
          color: '#16242A',
          fontWeight: 600,
        }}
      >
        Frequently Asked Questions
      </h1>
      <p
        className='text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-6'
        style={{
          color: '#4B5563',
          fontWeight: 400,
        }}
      >
        Have any questions? Find all your answers in the frequently asked
        questions.
      </p>
    </div>
  );
}

