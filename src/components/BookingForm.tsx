'use client';

import { useState } from 'react';
import { MdKeyboardArrowDown, MdCalendarToday } from 'react-icons/md';
import Image from 'next/image';

// Custom Icon Component
const CustomIcon = ({
  src,
  alt,
  className,
  isActive,
}: {
  src: string;
  alt: string;
  className?: string;
  isActive?: boolean;
}) => (
  <Image
    src={src}
    alt={alt}
    width={16}
    height={16}
    className={`${className} ${!isActive ? 'brightness-0 invert' : ''}`}
    style={
      isActive
        ? {
            filter:
              'brightness(0) saturate(100%) invert(18%) sepia(15%) saturate(1000%) hue-rotate(180deg) brightness(95%) contrast(85%)',
          }
        : {}
    }
  />
);

interface BookingFormProps {
  showTabsOnly?: boolean;
}

export default function BookingForm({ showTabsOnly = false }: BookingFormProps) {
  const [activeTab, setActiveTab] = useState('packages');
  
  // Checkbox states for different tabs
  const [hotelOptions, setHotelOptions] = useState({
    addFlight: false,
    addCab: false,
  });
  
  const [cabOptions, setCabOptions] = useState({
    intercityTravel: false,
    hourlyRentals: false,
    outstationTrip: false,
    airportTransport: false,
  });
  
  const [flightOptions, setFlightOptions] = useState({
    regularFares: false,
    armedForcesFares: false,
    studentFares: false,
    seniorCitizenFares: false,
    doctorNursesFares: false,
  });
  
  const [packageOptions, setPackageOptions] = useState({
    addFlight: false,
  });

  const tabs = [
    {
      id: 'packages',
      label: 'Packages',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/Vector.png'
          alt='Packages'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
    {
      id: 'hotels',
      label: 'Hotels',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/material-symbols_hotel-outline-rounded.png'
          alt='Hotels'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
    {
      id: 'cabs',
      label: 'Cabs',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/fluent_vehicle-cab-16-regular.png'
          alt='Cabs'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
    {
      id: 'activities',
      label: 'Activities',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/material-symbols_camping-outline-rounded.png'
          alt='Activities'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
    {
      id: 'trains',
      label: 'Trains',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/ic_outline-train.png'
          alt='Trains'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
    {
      id: 'buses',
      label: 'Buses',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/ion_bus.png'
          alt='Buses'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
    {
      id: 'flights',
      label: 'Flights',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/mdi_airplane.png'
          alt='Flights'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
    {
      id: 'cruise',
      label: 'Cruise',
      icon: (isActive: boolean) => (
        <CustomIcon
          src='/icons/icon-park-outline_cruise.png'
          alt='Cruise'
          className='w-4 h-4'
          isActive={isActive}
        />
      ),
    },
  ];

  // Render form based on active tab
  const renderForm = () => {
    if (activeTab === 'hotels') {
      return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 mb-4'>
          {/* Hotel Search */}
          <div className='lg:col-span-2 bg-white rounded-lg p-2 border border-gray-200'>
            <label className='block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide'>
              Search Your Desired Hotels
            </label>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search Your Desired Hotels'
                className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 font-bold text-sm'
              />
            </div>
          </div>

          {/* Check-In Date */}
          <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
            <label className='block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide'>
              Check-In
            </label>
            <div className='relative'>
              <input
                type='text'
                placeholder='DD-MM'
                className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 font-bold text-sm'
              />
              <MdCalendarToday className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
            </div>
          </div>

          {/* Check-Out Date */}
          <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
            <label className='block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide'>
              Check-Out
            </label>
            <div className='relative'>
              <input
                type='text'
                placeholder='DD-MM'
                className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 font-bold text-sm'
              />
              <MdCalendarToday className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
            </div>
          </div>

          {/* Travellers */}
          <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
            <label className='block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide'>
              Travellers
            </label>
            <div className='relative'>
              <select className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none appearance-none text-gray-700 font-bold text-sm'>
                <option>2 Travellers, 1 Room</option>
                <option>1 Traveller, 1 Room</option>
                <option>3 Travellers, 2 Rooms</option>
                <option>4 Travellers, 2 Rooms</option>
              </select>
              <MdKeyboardArrowDown className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
            </div>
          </div>

          {/* Search Button */}
          <button 
            className='lg:col-span-1 bg-gray-800 hover:bg-gray-700 rounded-lg p-2 border border-gray-200 flex items-center justify-center transition-colors shadow-lg h-full md:h-full'
            style={{ height: '50px' }}
          >
            <span className='text-white font-bold text-sm'>Search</span>
          </button>
        </div>
      );
    }

    // Default form for other tabs (packages, etc.)
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-2 mb-4'>
        {/* Leaving From */}
        <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
          <label className='block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'>
            Leaving From
          </label>
          <div className='relative'>
            <select className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none appearance-none text-gray-700 font-bold text-sm'>
              <option>Select leaving Location</option>
              <option>New Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
            <MdKeyboardArrowDown className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
          </div>
        </div>

        {/* Destination */}
        <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
          <label className='block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'>
            Destination
          </label>
          <div className='relative'>
            <select className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none appearance-none text-gray-700 font-bold text-sm'>
              <option>Select Destination</option>
              <option>Goa</option>
              <option>Kerala</option>
              <option>Rajasthan</option>
            </select>
            <MdKeyboardArrowDown className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
          </div>
        </div>

        {/* Theme */}
        <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
          <label className='block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'>
            Theme
          </label>
          <div className='relative'>
            <select className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none appearance-none text-gray-700 font-bold text-sm'>
              <option>Solo Travel</option>
              <option>Family Travel</option>
              <option>Adventure Travel</option>
              <option>Romantic Travel</option>
            </select>
            <MdKeyboardArrowDown className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
          </div>
        </div>

        {/* From Date */}
        <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
          <label className='block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'>
            From
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder='DD-MM'
              className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 font-bold text-sm'
            />
            <MdCalendarToday className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
          </div>
        </div>

        {/* To Date */}
        <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
          <label className='block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'>
            To
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder='DD-MM'
              className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 font-bold text-sm'
            />
            <MdCalendarToday className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
          </div>
        </div>

        {/* Travelers */}
        <div className='lg:col-span-1 bg-white rounded-lg p-2 border border-gray-200'>
          <label className='block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'>
            Travelers
          </label>
          <div className='relative'>
            <select className='w-full px-2 py-1.5 bg-transparent border-none focus:ring-0 focus:outline-none appearance-none text-gray-700 font-bold text-sm'>
              <option>2 Traveler, 1 Room</option>
              <option>1 Traveler, 1 Room</option>
              <option>3 Travelers, 2 Rooms</option>
              <option>4 Travelers, 2 Rooms</option>
            </select>
            <MdKeyboardArrowDown className='absolute right-2 top-1.5 text-gray-400 pointer-events-none w-3 h-3' />
          </div>
        </div>

        {/* Search Button */}
        <button 
          className='lg:col-span-1 bg-gray-800 hover:bg-gray-700 rounded-lg p-2 border border-gray-200 flex items-center justify-center transition-colors shadow-lg h-full md:h-full'
          style={{ height: '50px' }}
        >
          <span className='text-white font-bold text-sm'>Search</span>
        </button>
      </div>
    );
  };

  // Custom Checkbox Component (no background - will be wrapped in container)
  const CustomCheckbox = ({ 
    checked, 
    onChange, 
    label 
  }: { 
    checked: boolean; 
    onChange: (checked: boolean) => void; 
    label: string;
  }) => (
    <label className='flex items-center space-x-2 px-4 py-2 text-white cursor-pointer font-medium'>
      <div className='relative flex items-center justify-center'>
        <input
          type='checkbox'
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className='absolute opacity-0 cursor-pointer w-4 h-4'
          style={{ width: '16px', height: '16px' }}
        />
        <div
          className='border border-white rounded flex items-center justify-center'
          style={{
            width: '16px',
            height: '16px',
            backgroundColor: checked ? 'transparent' : 'transparent',
          }}
        >
          {checked && (
            <svg
              className='w-3 h-3 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={3}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
            </svg>
          )}
        </div>
      </div>
      <span style={{ fontFamily: 'inherit' }}>{label}</span>
    </label>
  );

  // Render checkboxes based on active tab
  const renderCheckboxes = () => {
    if (activeTab === 'hotels') {
      return (
        <div className='flex flex-wrap gap-3'>
          <CustomCheckbox
            checked={hotelOptions.addFlight}
            onChange={(checked) => setHotelOptions({ ...hotelOptions, addFlight: checked })}
            label='Add a flight'
          />
          <CustomCheckbox
            checked={hotelOptions.addCab}
            onChange={(checked) => setHotelOptions({ ...hotelOptions, addCab: checked })}
            label='Add a cab'
          />
        </div>
      );
    }
    
    if (activeTab === 'cabs') {
      return (
        <div className='flex flex-wrap gap-3'>
          <CustomCheckbox
            checked={cabOptions.intercityTravel}
            onChange={(checked) => setCabOptions({ ...cabOptions, intercityTravel: checked })}
            label='Intercity Travel'
          />
          <CustomCheckbox
            checked={cabOptions.hourlyRentals}
            onChange={(checked) => setCabOptions({ ...cabOptions, hourlyRentals: checked })}
            label='Hourly Rentals'
          />
          <CustomCheckbox
            checked={cabOptions.outstationTrip}
            onChange={(checked) => setCabOptions({ ...cabOptions, outstationTrip: checked })}
            label='Outstation Trip'
          />
          <CustomCheckbox
            checked={cabOptions.airportTransport}
            onChange={(checked) => setCabOptions({ ...cabOptions, airportTransport: checked })}
            label='Airport Transport'
          />
        </div>
      );
    }
    
    if (activeTab === 'flights') {
      return (
        <div className='flex flex-wrap gap-3'>
          <CustomCheckbox
            checked={flightOptions.regularFares}
            onChange={(checked) => setFlightOptions({ ...flightOptions, regularFares: checked })}
            label='Regular Fares'
          />
          <CustomCheckbox
            checked={flightOptions.armedForcesFares}
            onChange={(checked) => setFlightOptions({ ...flightOptions, armedForcesFares: checked })}
            label='Armed Forces Fares'
          />
          <CustomCheckbox
            checked={flightOptions.studentFares}
            onChange={(checked) => setFlightOptions({ ...flightOptions, studentFares: checked })}
            label='Student Fares'
          />
          <CustomCheckbox
            checked={flightOptions.seniorCitizenFares}
            onChange={(checked) => setFlightOptions({ ...flightOptions, seniorCitizenFares: checked })}
            label='Senior Citizen Fares'
          />
          <CustomCheckbox
            checked={flightOptions.doctorNursesFares}
            onChange={(checked) => setFlightOptions({ ...flightOptions, doctorNursesFares: checked })}
            label='Doctor & Nurses Fares'
          />
        </div>
      );
    }
    
    if (activeTab === 'packages') {
      return (
        <div className='flex flex-wrap gap-3'>
          <CustomCheckbox
            checked={packageOptions.addFlight}
            onChange={(checked) => setPackageOptions({ ...packageOptions, addFlight: checked })}
            label='Add a flight'
          />
        </div>
      );
    }
    
    return null;
  };

  // If showTabsOnly is true, render navigation tabs with form content
  if (showTabsOnly) {
    return (
      <div 
        className='w-full' 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(206, 221, 231, 0.6) 0%, rgba(206, 221, 231, 0.8) 100%)',
          backdropFilter: 'blur(0.2px)',
          borderRadius: '16px 16px 20px 20px',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          overflow: 'hidden',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        {/* Navigation Tabs */}
        <div className='overflow-x-auto scrollbar-hide' style={{ paddingTop: '0' }}>
          <div className='flex gap-4 min-w-max' style={{ paddingBottom: '0' }}>
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const isFirst = index === 0;
              const isLast = index === tabs.length - 1;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 lg:px-6 py-4 text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'bg-black/60 backdrop-blur-sm'
                      : 'text-gray-300 bg-black/60'
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: '#CEDDE7',
                          color: '#29383E',
                          fontFamily: 'Gilroy-SemiBold, sans-serif',
                          borderRadius: isFirst && isLast 
                            ? '16px 16px 0 0'
                            : isFirst
                            ? '16px 12px 0 0'
                            : isLast
                            ? '12px 16px 0 0'
                            : '12px 12px 0 0',
                          borderBottom: 'none',
                          marginBottom: '-1px',
                          position: 'relative',
                          zIndex: 10,
                        }
                      : {
                          borderRadius: isFirst && isLast 
                            ? '16px 16px 0 0'
                            : isFirst
                            ? '16px 12px 0 0'
                            : isLast
                            ? '12px 16px 0 0'
                            : '12px 12px 0 0',
                        }
                  }
                >
                  {tab.icon(isActive)}
                  <span
                    className={`inline text-sm ${isActive ? 'font-semibold' : 'font-bold'}`}
                    style={{
                      fontFamily: isActive ? 'Gilroy-SemiBold, sans-serif' : 'inherit',
                      fontWeight: isActive ? 600 : 700,
                      color: isActive ? '#29383E' : '#D1D5DB',
                      fontSize: '14px',
                      gap: '2px'
                    }}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Content for Selected Tab */}
        <div 
          className='p-4' 
          style={{ 
            backgroundColor: '#CEDDE7',
            borderRadius: '0 0 16px 16px',
            marginTop: '0',
            paddingTop: '16px',
          }}
        >
          <div className='overflow-x-auto scrollbar-hide'>
            <div className='min-w-max'>
              {renderForm()}
            </div>
          </div>
        </div>
        
        {/* Checkboxes below blue background with combined background */}
        <div style={{ paddingLeft: '16px', paddingRight: '16px', textAlign: 'left' }}>
          {(() => {
            const checkboxes = renderCheckboxes();
            return checkboxes && (
              <div className='mt-4 py-3 px-2 rounded-lg inline-block' style={{ backgroundColor: '#01010199', marginLeft: '0' }}>
                {checkboxes}
              </div>
            );
          })()}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Booking Form Section */}
      <div
        className='w-full bg-cover bg-center bg-no-repeat shadow-3xl mt-2'
        style={{
          borderRadius: '16px',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          overflow: 'hidden',
          paddingLeft: '32px',
          paddingRight: '32px',
        }}
      >
        {/* Background overlay */}
        <div className='h-full'>
          {/* Navigation Tabs */}
          <div className='overflow-x-auto scrollbar-hide' style={{ paddingTop: '0' }}>
            <div className='flex gap-4 min-w-max' style={{ paddingBottom: '0' }}>
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab.id;
                const isFirst = index === 0;
                const isLast = index === tabs.length - 1;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-3 lg:px-6 py-4 text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? 'bg-black/60 backdrop-blur-sm'
                        : 'text-gray-300 bg-black/60'
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: '#CEDDE7',
                            color: '#29383E',
                            fontFamily: 'Gilroy-SemiBold, sans-serif',
                            gap: '2px',
                            borderRadius: isFirst && isLast 
                              ? '16px 16px 0 0'
                              : isFirst
                              ? '16px 12px 0 0'
                              : isLast
                              ? '12px 16px 0 0'
                              : '12px 12px 0 0',
                            borderBottom: 'none',
                            marginBottom: '-1px',
                            position: 'relative',
                            zIndex: 10,
                          }
                        : { 
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            color: '#D1D5DB',
                            gap: '2px',
                            borderRadius: isFirst && isLast 
                              ? '16px 16px 0 0'
                              : isFirst
                              ? '16px 12px 0 0'
                              : isLast
                              ? '12px 16px 0 0'
                              : '12px 12px 0 0',
                          }
                    }
                  >
                    {tab.icon(isActive)}
                    <span
                      className="inline text-sm"
                      style={{
                        fontFamily: isActive ? 'Gilroy-SemiBold, sans-serif' : 'inherit',
                        fontWeight: isActive ? 600 : 700,
                        color: isActive ? '#29383E' : '#D1D5DB',
                        fontSize: '14px'
                      }}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Container */}
          <div 
            className='p-2 lg:p-3' 
            style={{ 
              backgroundColor: '#CEDDE7',
              borderRadius: '0 0 16px 16px',
              marginTop: '0',
              paddingTop: '5px',
            }}
          >
            <div className='p-2 lg:p-3'>
              {/* Form Fields Grid */}
              {renderForm()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkboxes below blue background with combined background */}
      <div style={{ paddingLeft: '32px', paddingRight: '32px', textAlign: 'left' }}>
        {(() => {
          const checkboxes = renderCheckboxes();
          return checkboxes && (
            <div className='mt-4 py-3 px-2 rounded-lg inline-block' style={{ backgroundColor: '#01010199', marginLeft: '0' }}>
              {checkboxes}
            </div>
          );
        })()}
      </div>
    </>
  );
}
