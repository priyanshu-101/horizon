'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SAMPLE_BLOG_POSTS } from '@/constants';
import { gilroyBold } from '@/lib/fonts';

const PhoenixFlyBlogsSection: React.FC = () => {
  const featuredPost = SAMPLE_BLOG_POSTS[0]; // Top 10 Hidden Gems
  const topRightPost = SAMPLE_BLOG_POSTS[1]; // Chasing Sunsets in Santorini
  const bottomRightPost = SAMPLE_BLOG_POSTS[2]; // Packing Like A Pro

  return (
    <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-10 md:mb-12'>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 ${gilroyBold.className}`}
            style={{
              color: '#16242A',
              fontWeight: 700,
            }}
          >
            Phoenix Fly Blogs
          </h2>
          <p
            className='text-base md:text-lg text-gray-700 max-w-3xl mx-auto'
            style={{
              color: '#4B5563',
              fontWeight: 400,
            }}
          >
            Get travel tips, destination guides, and real stories from explorers around the globe
          </p>
        </div>

        {/* Two Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          {/* Left Column - Featured Post */}
          <div className='relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className='object-cover'
              priority
            />
            {/* Gradient Overlay */}
            <div
              className='absolute inset-0'
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)',
              }}
            />
            {/* Content Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white'>
              <h3
                className={`text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 ${gilroyBold.className}`}
                style={{
                  fontWeight: 700,
                }}
              >
                {featuredPost.title}
              </h3>
              <p className='text-sm md:text-base mb-4 md:mb-6 opacity-90'>
                {featuredPost.description}
              </p>
              {/* Metadata and Button */}
              <div className='flex items-center justify-between flex-wrap gap-4'>
                <div className='flex items-center gap-4 text-sm md:text-base'>
                  <span>{featuredPost.publishedAt}</span>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      width={32}
                      height={32}
                      className='rounded-full object-cover'
                    />
                    <span>{featuredPost.author.name}</span>
                  </div>
                </div>
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base'
                  style={{
                    backgroundColor: '#FF6A00',
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Two Smaller Posts */}
          <div className='flex flex-col gap-4 sm:gap-6'>
            {/* Top Right Post */}
            <div className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[280px]'>
              <div className='relative w-full sm:w-[280px] h-[200px] sm:h-[280px] flex-shrink-0 sm:flex-shrink-0' style={{ padding: '12px' }}>
                <div className='relative w-full h-full rounded-lg overflow-hidden'>
                  <Image
                    src={topRightPost.image}
                    alt={topRightPost.title}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='flex-1 p-4 sm:p-6 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center justify-between mb-2 text-xs sm:text-sm text-gray-600 flex-wrap gap-1 sm:gap-0'>
                    <span>{topRightPost.publishedAt}</span>
                    <div className='flex items-center gap-2'>
                      <Image
                        src={topRightPost.author.avatar}
                        alt={topRightPost.author.name}
                        width={20}
                        height={20}
                        className='rounded-full object-cover'
                      />
                      <span className='text-xs'>{topRightPost.author.name}</span>
                    </div>
                  </div>
                  <h3
                    className={`text-base sm:text-lg md:text-xl mb-2 line-clamp-2 sm:line-clamp-none ${gilroyBold.className}`}
                    style={{
                      color: '#16242A',
                      fontWeight: 700,
                    }}
                  >
                    {topRightPost.title}
                  </h3>
                  <p
                    className='text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 sm:line-clamp-none'
                    style={{
                      color: '#4B5563',
                    }}
                  >
                    {topRightPost.description}
                  </p>
                </div>
                <Link
                  href={`/blogs/${topRightPost.slug}`}
                  className='text-orange-500 hover:text-orange-600 font-medium text-xs sm:text-sm mt-2 sm:mt-0'
                  style={{
                    color: '#FF6A00',
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Bottom Right Post */}
            <div className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[280px]'>
              <div className='relative w-full sm:w-[280px] h-[200px] sm:h-[280px] flex-shrink-0 sm:flex-shrink-0' style={{ padding: '12px' }}>
                <div className='relative w-full h-full rounded-lg overflow-hidden'>
                  <Image
                    src={bottomRightPost.image}
                    alt={bottomRightPost.title}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='flex-1 p-4 sm:p-6 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center justify-between mb-2 text-xs sm:text-sm text-gray-600 flex-wrap gap-1 sm:gap-0'>
                    <span>{bottomRightPost.publishedAt}</span>
                    <div className='flex items-center gap-2'>
                      <Image
                        src={bottomRightPost.author.avatar}
                        alt={bottomRightPost.author.name}
                        width={20}
                        height={20}
                        className='rounded-full object-cover'
                      />
                      <span className='text-xs'>{bottomRightPost.author.name}</span>
                    </div>
                  </div>
                  <h3
                    className={`text-base sm:text-lg md:text-xl mb-2 line-clamp-2 sm:line-clamp-none ${gilroyBold.className}`}
                    style={{
                      color: '#16242A',
                      fontWeight: 700,
                    }}
                  >
                    {bottomRightPost.title}
                  </h3>
                  <p
                    className='text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 sm:line-clamp-none'
                    style={{
                      color: '#4B5563',
                    }}
                  >
                    {bottomRightPost.description}
                  </p>
                </div>
                <Link
                  href={`/blogs/${bottomRightPost.slug}`}
                  className='text-orange-500 hover:text-orange-600 font-medium text-xs sm:text-sm mt-2 sm:mt-0'
                  style={{
                    color: '#FF6A00',
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className='flex justify-center'>
          <Link
            href='/blogs'
            className='bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-medium transition-colors text-base md:text-lg'
            style={{
              backgroundColor: '#FF6A00',
              fontWeight: 600,
            }}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhoenixFlyBlogsSection;

