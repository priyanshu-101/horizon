import React from 'react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group ${className}`}
    >
      <div className='relative h-40 sm:h-48 md:h-52 overflow-hidden'>
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='p-4 sm:p-5 md:p-6'>
        <div className='flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-1 sm:gap-0'>
          <span className='text-xs sm:text-sm text-gray-500'>{post.publishedAt}</span>
          <div className='flex items-center space-x-1 sm:space-x-2'>
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className='w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover'
            />
            <span className='text-xs sm:text-sm text-gray-500'>{post.author.name}</span>
          </div>
        </div>
        <h3 className='text-base sm:text-lg md:text-xl font-gilroy-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2'>
          {post.title}
        </h3>
        <p className='text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none'>
          {post.description}
        </p>
        <a
          href={`/blogs/${post.slug}`}
          className='text-orange-500 hover:text-orange-600 font-medium text-xs sm:text-sm transition-colors duration-200'
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
