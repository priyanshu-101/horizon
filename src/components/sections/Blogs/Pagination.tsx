import React, { useState, useEffect } from 'react';
import { PaginationProps } from '@/types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPrevious = true,
  showNext = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getPageNumbers = () => {
    const pages = [];
    // Different max visible pages for mobile vs desktop
    const maxVisiblePages = isMobile ? 5 : 8;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (isMobile) {
        // Mobile: Show fewer pages
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        }
      } else {
        // Desktop: Show more pages
        if (currentPage <= 5) {
          for (let i = 1; i <= 7; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 4) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - 6; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        }
      }
    }

    return pages;
  };

  return (
    <div className='flex items-center justify-center space-x-1 sm:space-x-2 mt-12 px-4'>
      {showPrevious && (
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
        >
          <svg
            className='w-3 h-3 sm:w-4 sm:h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
      )}

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center text-xs sm:text-sm font-medium transition-colors duration-200 ${
            page === currentPage
              ? 'bg-orange-500 text-white border-orange-500'
              : page === '...'
                ? 'border-transparent text-gray-400 cursor-default'
                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}

      {showNext && (
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
        >
          <svg
            className='w-3 h-3 sm:w-4 sm:h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
