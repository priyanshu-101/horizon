import React from 'react';

const BlogHeroSection: React.FC = () => {
  return (
    <section className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-gilroy-semibold text-gray-900 mb-6 max-w-3xl mx-auto'>
          Welcome To The Phoenix Fly Blogs
        </h1>
        <p className='text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
          Uncover hidden gems, cultural secrets, and unforgettable experiences
          with the TripJoy Blog. From personal travel tales to expert planning
          guides, our stories are your passport to inspiring adventures and
          smart travel. Whether you're chasing bucket-list dreams or weekend
          escapes, there's something here for every explorer.
        </p>
      </div>
    </section>
  );
};

export default BlogHeroSection;
