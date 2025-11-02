'use client';

import FAQItem from './FAQItem';

interface FAQ {
  question: string;
  answer?: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8'>
      <div className='space-y-0'>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

