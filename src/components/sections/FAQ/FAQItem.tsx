'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer?: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='bg-white rounded-lg mb-3 sm:mb-4 transition-all duration-200 overflow-hidden'
      style={{
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between p-3 sm:p-4 md:p-5 lg:p-6 text-left hover:bg-gray-50 transition-colors'
        style={{
          color: '#16242A',
        }}
      >
        <span
          className='text-sm sm:text-base md:text-lg font-gilroy-semibold flex-1 pr-3 sm:pr-4'
          style={{
            color: '#16242A',
            fontWeight: 600,
          }}
        >
          {question}
        </span>
        <span
          className='text-xl sm:text-2xl md:text-3xl font-gilroy flex-shrink-0 transition-transform duration-200'
          style={{
            color: '#16242A',
            fontWeight: 400,
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      {isOpen && answer && (
        <div
          className='px-3 sm:px-4 md:px-5 lg:px-6 pb-3 sm:pb-4 md:pb-5 lg:pb-6'
          style={{
            color: '#4B5563',
          }}
        >
          <p
            className='text-sm sm:text-base text-gray-700 leading-relaxed'
            style={{
              color: '#4B5563',
              fontWeight: 400,
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

