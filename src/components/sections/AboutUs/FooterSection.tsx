'use client';

import { Logo } from '@/components/ui';

export default function FooterSection() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    'Home',
    'Destinations',
    'Offers',
    'Support',
    'About Us',
    'Blogs',
    'Review & Ratings',
    'Feedback',
  ];

  const services = [
    'Packages',
    'Hotels',
    'Luxury Hotels',
    'Cruise',
    'Solo Female Travel',
    'Trekking',
    'Community Trips',
    'Activities',
    'Cabs',
    'Train',
    'Bus',
    'Flights',
  ];

  const packages = ['India', 'International', 'All'];

  const offers = [
    'Summer Sale',
    'Diwali Sale',
    'Phoenix Fly Rewards',
    'Refer & Earn Rewards',
    'Tag & Earn Rewards',
    '16th Night Rewards',
    'Group Booking Rewards',
    'Cruise Vouchers',
  ];

  const destinationWedding = [
    'Overview',
    'Anniversary',
    'Decor',
    'Ceremony',
    'Mehendi',
    'Receptions',
  ];

  return (
    <footer className='bg-white text-gray-800'>
      <div className='w-full'>
        {/* Mobile Layout - Show all sections */}
        <div className='block lg:hidden px-4 sm:px-6 lg:px-8 py-12 pb-0'>
          {/* Mobile Grid - 2 columns for sections */}
          <div className='grid grid-cols-2 gap-6 mb-8'>
            {/* Quick Links */}
            <div>
              <h4 className='text-sm font-bold text-gray-800 mb-3'>
                QUICK LINKS
              </h4>
              <div className='space-y-1'>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block text-gray-600 hover:text-orange-500 transition-colors text-xs'
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className='text-sm font-bold text-gray-800 mb-3'>SERVICES</h4>
              <div className='space-y-1'>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block text-gray-600 hover:text-orange-500 transition-colors text-xs'
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h4 className='text-sm font-bold text-gray-800 mb-3'>PACKAGES</h4>
              <div className='space-y-1'>
                {packages.map((pkg, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block text-gray-600 hover:text-orange-500 transition-colors text-xs'
                  >
                    {pkg}
                  </a>
                ))}
              </div>
            </div>

            {/* Offers */}
            <div>
              <h4 className='text-sm font-bold text-gray-800 mb-3'>OFFERS</h4>
              <div className='space-y-1'>
                {offers.map((offer, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block text-gray-600 hover:text-orange-500 transition-colors text-xs'
                  >
                    {offer}
                  </a>
                ))}
              </div>
            </div>

            {/* Destination Wedding */}
            <div className='col-span-2'>
              <h4 className='text-sm font-bold text-gray-800 mb-3'>
                DESTINATION WEDDING
              </h4>
              <div className='grid grid-cols-2 gap-1'>
                {destinationWedding.map((item, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block text-gray-600 hover:text-orange-500 transition-colors text-xs'
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <div className='border-t border-gray-300 mb-8'></div>

          {/* Logo and Tagline - Moved to after links */}
          <div className='text-center mb-8'>
            <div className='flex items-center justify-center space-x-2 mb-4'>
              <Logo size={32} className='text-gray-800' />
              <h3 className='text-2xl font-bold text-gray-800'>Horizon</h3>
            </div>
            <p className='text-gray-600 text-sm'>
              For The Dreamers, Explorers, And Memory-Makers – Your Journey
              Starts Here.
            </p>
          </div>

          {/* Contact Us */}
          <div className='text-center mb-8'>
            <h4 className='text-lg font-bold text-gray-800 mb-4'>CONTACT US</h4>
            <div className='space-y-3'>
              <div className='flex items-center justify-center space-x-3'>
                <svg
                  className='w-5 h-5 text-orange-500'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                </svg>
                <span className='text-gray-600'>
                  phoenixflytravel@gmail.com
                </span>
              </div>
              <div className='flex items-center justify-center space-x-3'>
                <svg
                  className='w-5 h-5 text-orange-500'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                </svg>
                <span className='text-gray-600'>+91-8861524428</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className='text-center mb-8'>
            <h4 className='text-lg font-bold text-gray-800 mb-4'>ADDRESS</h4>
            <div className='flex items-start justify-center space-x-3'>
              <svg
                className='w-5 h-5 text-orange-500 mt-1'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
              <span className='text-gray-600'>
                3rd Floor, Above United Medicals, Ramdev Galli, Belagavi -
                590010
              </span>
            </div>
          </div>

          {/* Follow Us */}
          <div className='text-center mb-8'>
            <h4 className='text-lg font-bold text-gray-800 mb-4'>FOLLOW US</h4>
            <div className='flex justify-center space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href='#'
                  className='w-10 h-10 flex items-center justify-center text-orange-500 hover:text-orange-600 transition-colors'
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Copyright Footer */}
          <div className='bg-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 mt-8 py-4'>
            <div className='text-center text-gray-600'>
              <p>© 2025 Phoenix Fly | All Rights Reserved</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Dark teal background */}
        <div
          className='hidden lg:block w-full'
          style={{ backgroundColor: '#006077' }}
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='grid grid-cols-3 gap-12'>
              {/* Left Column - Logo and Social */}
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center space-x-2'>
                  <Logo size={32} className='text-white' />
                  <h3 className='text-2xl font-bold text-white'>Horizon</h3>
                </div>

                <div>
                  <h4 className='text-lg font-semibold mb-4 text-white'>
                    Follow Us
                  </h4>
                  <div className='flex space-x-4'>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href='#'
                        className='w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors'
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Column - Contact and Address */}
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <h4 className='text-lg font-semibold mb-4 text-white'>
                    Contact Us
                  </h4>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3'>
                      <svg
                        className='w-5 h-5 text-orange-500'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                      </svg>
                      <span className='text-white'>
                        phoenixflytravel@gmail.com
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <svg
                        className='w-5 h-5 text-orange-500'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                      </svg>
                      <span className='text-white'>+91-8861524428</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className='text-lg font-semibold mb-4 text-white'>
                    Address
                  </h4>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-orange-500 mt-1'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                    </svg>
                    <span className='text-white'>
                      3rd floor, above united medicals,
                      <br />
                      ramdev galli, belagavi - 590010
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Pages */}
              <div className='flex flex-col justify-start h-full'>
                <h4 className='text-lg font-semibold mb-4 text-white'>Pages</h4>
                <div className='space-y-2'>
                  {[
                    'Home',
                    'Destinations',
                    'Offers',
                    'Support',
                    'About Us',
                  ].map((link, index) => (
                    <a
                      key={index}
                      href='#'
                      className='block text-white hover:text-orange-500 transition-colors'
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Border and Copyright */}
            <div className='border-t border-white mt-8 pt-4'>
              <div className='text-center text-white'>
                <p>© 2023 Horizon | Powered by Horizon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
