'use client';

import Image from 'next/image';

export default function PaymentSection() {
  return (
    <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-12 md:mt-16 lg:mt-20'>
      <div className='text-center space-y-5 sm:space-y-6 md:space-y-8'>
        {/* Secured Transactions Text */}
        <p
          className='text-sm sm:text-base md:text-lg lg:text-xl font-gilroy'
          style={{
            color: '#16242A',
            fontWeight: 400,
          }}
        >
          Secured Transactions under Our Payments Partner
        </p>

        {/* HDFC Bank Logo */}
        <div className='flex justify-center'>
          <div className='relative w-40 h-12 sm:w-48 sm:h-14 md:w-56 md:h-16 lg:w-64' style={{ height: '4.5rem' }}>
            <Image
              src='/svgs/about_us/payment/hdfc-bank.png'
              alt='HDFC Bank'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* We accept text */}
        <p
          className='text-sm sm:text-base md:text-lg font-gilroy'
          style={{
            color: '#16242A',
            fontWeight: 400,
          }}
        >
          We accept
        </p>

        {/* Payment Method Logos */}
        <div className='flex justify-center'>
          <div className='relative w-full max-w-2xl h-16 sm:h-20 md:h-24 lg:h-28'>
            <Image
              src='/svgs/about_us/payment/methods.png'
              alt='Payment Methods'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

