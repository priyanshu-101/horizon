import localFont from 'next/font/local';

export const gilroySemiBold = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy-semibold',
  display: 'swap',
});

export const gilroyRegular = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy-regular',
  display: 'swap',
});

export const gilroyBold = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy-bold',
  display: 'swap',
});
