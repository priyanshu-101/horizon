// Application constants

export const APP_CONFIG = {
  name: 'Horizon',
  description: 'Professional Design System',
  version: '1.0.0',
  author: 'Horizon Team',
  url: 'https://horizon.example.com',
} as const;

export const BREAKPOINTS = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATION_DURATION = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

export const COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
} as const;

export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    sans: ['var(--font-gilroy-regular)', 'system-ui', 'sans-serif'],
    semibold: ['var(--font-gilroy-semibold)', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },
} as const;

// Offers Section Constants
export const OFFERS_CONFIG = {
  cardWidth: 410,
  cardGap: 24,
  containerWidth: 1200,
  mobileCardHeight: 300,
  desktopCardHeight: 450,
  exploreMoreImage: '/img/deals/fb039e036b15c368d0cd499657492ecfc3992662.png',
  fallbackImage: '🏨',
} as const;

export const GRADIENT_OVERLAY = {
  background:
    'linear-gradient(180deg, rgba(0, 0, 0, 0) 27.56%, rgba(0, 0, 0, 0.79) 70.08%, rgba(0, 0, 0, 0.9) 100%)',
} as const;

// Blog Constants
export const BLOG_CATEGORIES = [
  {
    id: 'travel-tips',
    title: 'Travel Tips & Advice',
    description: 'Smart hacks and guides to make your trips smoother.',
    image:
      '/img/blog/read_by_category/81b569c881db909de946831006c42e303d9d1b73.jpg',
    slug: 'travel-tips',
    postCount: 24,
  },
  {
    id: 'destination-highlights',
    title: 'Destination Highlights',
    description: 'Top sights and hidden gems from around the world to explore.',
    image:
      '/img/blog/read_by_category/cbb0888a11dc07f3b4f9bc78c2cb8b959c8c180a.jpg',
    slug: 'destination-highlights',
    postCount: 18,
  },
  {
    id: 'weekend-getaways',
    title: 'Weekend Getaways',
    description: 'Quick escapes and short-trip itineraries for busy travelers.',
    image:
      '/img/blog/read_by_category/728106b49c40520b6b8e2496509e156123cc2571.jpg',
    slug: 'weekend-getaways',
    postCount: 15,
  },
] as const;

export const SAMPLE_BLOG_POSTS = [
  {
    id: '0',
    title: 'Top 10 Hidden Gems Around The World',
    description: "Discover the world's best-kept secrets, from secluded beaches to off-the-beaten-path towns. These hidden gems are worth the journey.",
    image:
      '/img/blog/recent_blogs/da2f0093c7fd62fce645f3874178921a6b127152.jpg',
    author: {
      name: 'Tarun Singh',
      avatar: '/img/blog/authors/tarun-singh.jpg',
    },
    publishedAt: '07 May 2025',
    category: 'Destination Highlights',
    slug: 'top-10-hidden-gems-around-the-world',
    readTime: '8 min read',
  },
  {
    id: '1',
    title: 'Chasing Sunsets In Santorini',
    description: 'Soak in the charm of whitewashed streets & unforget...',
    image:
      '/img/blog/recent_blogs/58c6f7b7c9bf8f6d7cb4d1b8015b24a15f8f0baf.jpg',
    author: {
      name: 'Tarun Singh',
      avatar: '/img/blog/authors/tarun-singh.jpg',
    },
    publishedAt: '1 day ago',
    category: 'Destination Highlights',
    slug: 'chasing-sunsets-in-santorini',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Packing Like A Pro: Essentials Only',
    description: 'Master the art of smart packing with tips for stress-fr...',
    image:
      '/img/blog/recent_blogs/5bbcb7f7fa0682379b7051d74d31e8969bd8ea6b.png',
    author: {
      name: 'Tarun Singh',
      avatar: '/img/blog/authors/tarun-singh.jpg',
    },
    publishedAt: '07 May 2025',
    category: 'Travel Tips & Advice',
    slug: 'packing-like-a-pro-essentials-only',
    readTime: '3 min read',
  },
  {
    id: '3',
    title: 'Quick Escape: 48 Hours In Rishikesh',
    description: 'A perfect weekend mix of riverside calm, adventure...',
    image:
      '/img/blog/recent_blogs/da2f0093c7fd62fce645f3874178921a6b127152.jpg',
    author: {
      name: 'Tarun Singh',
      avatar: '/img/blog/authors/tarun-singh.jpg',
    },
    publishedAt: '09 May 2025',
    category: 'Weekend Getaways',
    slug: 'quick-escape-48-hours-in-rishikesh',
    readTime: '4 min read',
  },
  {
    id: '4',
    title: 'Chasing Sunsets In Santorini',
    description: 'Soak in the charm of whitewashed streets & unforget...',
    image:
      '/img/blog/recent_blogs/58c6f7b7c9bf8f6d7cb4d1b8015b24a15f8f0baf(1).jpg',
    author: {
      name: 'Tarun Singh',
      avatar: '/img/blog/authors/tarun-singh.jpg',
    },
    publishedAt: '09 May 2025',
    category: 'Destination Highlights',
    slug: 'chasing-sunsets-in-santorini-2',
    readTime: '5 min read',
  },
  {
    id: '5',
    title: 'Quick Escape: 48 Hours In Rishikesh',
    description: 'A perfect weekend mix of riverside calm, adventure...',
    image:
      '/img/blog/recent_blogs/da2f0093c7fd62fce645f3874178921a6b127152(1).jpg',
    author: {
      name: 'Tarun Singh',
      avatar: '/img/blog/authors/tarun-singh.jpg',
    },
    publishedAt: '08 May 2025',
    category: 'Weekend Getaways',
    slug: 'quick-escape-48-hours-in-rishikesh-2',
    readTime: '4 min read',
  },
  {
    id: '6',
    title: 'Packing Like A Pro: Essentials Only',
    description: 'Master the art of smart packing with tips for stress-fr...',
    image:
      '/img/blog/recent_blogs/5bbcb7f7fa0682379b7051d74d31e8969bd8ea6b(1).png',
    author: {
      name: 'Tarun Singh',
      avatar: '/img/blog/authors/tarun-singh.jpg',
    },
    publishedAt: '23 Apr 2025',
    category: 'Travel Tips & Advice',
    slug: 'packing-like-a-pro-essentials-only-2',
    readTime: '3 min read',
  },
] as const;

// Destination Sections Constants
export const DESTINATION_SECTIONS = [
  {
    id: 'trending-trips',
    title: "Trending Trips Everyone's Booking",
    destinations: [
      {
        name: 'Bali',
        description: 'Tropical paradise, cultural richness, adventure awaits.',
        image:
          '/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a.jpg',
      },
      {
        name: 'Japan',
        description: 'Cherry blossoms, ancient traditions, modern marvels.',
        image:
          '/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a(1).jpg',
      },
      {
        name: 'Italy',
        description: 'Art, history, cuisine, and romantic landscapes.',
        image:
          '/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a(2).jpg',
      },
      {
        name: 'Spain',
        description: 'Flamenco, architecture, vibrant culture, sunny beaches.',
        image:
          '/img/all_international/trendings_trips_everyones_booking/0eaa55641027acb4d29fe34ce9f7a09b92e5121a.jpg',
      },
    ],
  },
  {
    id: 'nature-escapes',
    title: "Nature Lover's Escapes",
    destinations: [
      {
        name: 'Switzerland',
        description: 'Snowy peaks, serene lakes, cozy chalets.',
        image:
          '/img/all_international/nature_lovers_escape/1725b8b5ed95fc901efa165ac83d5ed4e0a8e249.png',
      },
      {
        name: 'New Zealand',
        description: 'Dramatic landscapes, adventure sports, pure nature.',
        image:
          '/img/all_international/nature_lovers_escape/256fe5fbb934ebaeffeea2ab428f26ef8e2633f5.png',
      },
      {
        name: 'Iceland',
        description: 'Northern lights, geysers, volcanic landscapes.',
        image:
          '/img/all_international/nature_lovers_escape/6e5b1a4ae26c9e5b68caef354b32dce72ecf3403.png',
      },
      {
        name: 'Norway',
        description: 'Frozen beauty, deep fjords, northern lights.',
        image:
          '/img/all_international/nature_lovers_escape/9131737948d8c7d0d09c19abdf9bd69d0474876c.png',
      },
    ],
  },
  {
    id: 'visa-on-arrival',
    title: 'Visa on Arrival Destinations',
    destinations: [
      {
        name: 'Thailand',
        description: 'Ancient temples, tropical beaches, vibrant street food.',
        image:
          '/img/all_international/visa_arrival_destination/3461fbbe4b729283e9dab39560a7c970e8e4cbc2.png',
      },
      {
        name: 'Vietnam',
        description: 'Mystical landscapes, rich culture, delicious cuisine.',
        image:
          '/img/all_international/visa_arrival_destination/8793b2b8dc7d3cf94c644fc5ca26c10ab60766ea.png',
      },
      {
        name: 'Maldives',
        description: 'Crystal clear waters, luxury resorts, paradise islands.',
        image:
          '/img/all_international/visa_arrival_destination/e18e7080749d4ff1e99af230f6c34b039f88f1c9.png',
      },
      {
        name: 'Mauritius',
        description: 'Pristine beaches, diverse culture, adventure activities.',
        image:
          '/img/all_international/visa_arrival_destination/e75474ff02c680cdd0596f8398223344d2faed8a.png',
      },
    ],
  },
  {
    id: 'heritage-history',
    title: 'Heritage & History Trails',
    destinations: [
      {
        name: 'Greece',
        description: 'Ancient ruins, island tales, Mediterranean sun.',
        image:
          '/img/all_international/heritage_history_trails/1725b8b5ed95fc901efa165ac83d5ed4e0a8e249.png',
      },
      {
        name: 'Jordan',
        description: "Petra's ancient city, desert landscapes, rich history.",
        image:
          '/img/all_international/heritage_history_trails/7caa07711a4a71d839eaf697b4746f0893424e40.png',
      },
      {
        name: 'Egypt',
        description: 'Pyramids, pharaohs, timeless monuments.',
        image:
          '/img/all_international/heritage_history_trails/b8890d48d7384825fa04b347c36e2b9f44363b2f.png',
      },
      {
        name: 'Turkey',
        description: 'Crossroads of civilizations, stunning architecture.',
        image:
          '/img/all_international/heritage_history_trails/e90c742fffac683fa4763012760c87996afae39b(1).png',
      },
    ],
  },
] as const;

export const TIME_FILTERS = [
  {
    id: '2-4-days',
    label: '2-4 DAYS',
    image:
      '/img/all_international/time_filters/6e5b1a4ae26c9e5b68caef354b32dce72ecf3403(1).png',
  },
  {
    id: '5-9-days',
    label: '5-9 DAYS',
    image:
      '/img/all_international/time_filters/9131737948d8c7d0d09c19abdf9bd69d0474876c(1).png',
  },
  {
    id: '10-14-days',
    label: '10-14 DAYS',
    image:
      '/img/all_international/time_filters/e18e7080749d4ff1e99af230f6c34b039f88f1c9(1).png',
  },
  {
    id: '15-20-days',
    label: '15-20 DAYS',
    image:
      '/img/all_international/time_filters/e90c742fffac683fa4763012760c87996afae39b.png',
  },
] as const;
