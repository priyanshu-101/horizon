'use client';

import FAQHeader from './FAQHeader';
import FAQAccordion from './FAQAccordion';
import PaymentSection from './PaymentSection';

const faqData = [
  {
    question: 'How Do I Join Phoenix Fly Rewards?',
    answer:
      'To join Phoenix Fly Rewards, simply sign up on our website or mobile app. You can create an account using your email address or phone number. Once registered, you will automatically become a member and start earning points on eligible bookings.',
  },
  {
    question: 'Can I Earn Points On All Types Of Bookings?',
    answer:
      'Yes, you can earn points on most types of bookings including flights, hotels, packages, and other travel services. However, some promotional offers or discounted bookings may have limited or no points eligibility. Please check the terms and conditions of each booking for specific details.',
  },
  {
    question: 'Q3: Can I Combine Points With Promotional Discounts?',
    answer:
      'In most cases, points can be combined with promotional discounts. However, the specific terms may vary depending on the promotion. Some promotional offers may exclude the use of points, while others may allow partial point redemption. Always review the promotion details before making a booking.',
  },
  {
    question: 'Can I Purchase A Status Instead Of Earning It Through Bookings?',
    answer:
      'Currently, status levels in Phoenix Fly Rewards are earned through bookings and travel activity. Status cannot be purchased directly. However, we occasionally offer status match or status challenge programs where you can achieve higher status levels faster based on your travel history with other programs.',
  },
  {
    question: 'Can I Redeem My Points Fully For A Booking?',
    answer:
      'Yes, you can redeem your points fully for a booking, subject to the minimum points required and availability. When making a booking, you will have the option to use points, cash, or a combination of both. Simply select the "Pay with Points" option and use all available points to cover the cost.',
  },
];

export default function FAQSection() {
  return (
    <div
      className='py-8 sm:py-12 md:py-16 lg:py-20'
      style={{
        backgroundColor: '#F8F8F8',
      }}
    >
      <div className='w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
        {/* FAQ Header */}
        <FAQHeader />

        {/* FAQ Accordion */}
        <FAQAccordion faqs={faqData} />

        {/* Payment Section */}
        <PaymentSection />
      </div>
    </div>
  );
}

