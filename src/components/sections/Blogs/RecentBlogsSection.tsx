'use client';

import React, { useState } from 'react';
import { SAMPLE_BLOG_POSTS } from '@/constants';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const RecentBlogsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 6;
  // Show 8 pages by default for UI demonstration
  const totalPages = 8;

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = SAMPLE_BLOG_POSTS.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of section when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12'>
          <h2 className='text-3xl sm:text-4xl font-gilroy-semibold text-gray-900 mb-6 sm:mb-0'>
            Recent Blogs
          </h2>

          {/* Rounded Search Bar */}
          <div className='relative w-full sm:w-96'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <input
              type='text'
              placeholder='Search by destinations, travel tips etc'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='block w-full pl-12 pr-4 py-4 bg-white shadow-sm border border-gray-200 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-black sm:text-sm'
              style={{
                borderRadius: '62.96px',
                height: '56px',
              }}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {currentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default RecentBlogsSection;
