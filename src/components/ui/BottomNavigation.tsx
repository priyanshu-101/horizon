import { useState } from 'react';

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

interface TabItem {
  id: string;
  label: string;
  icon: string;
  iconPath: string;
}

const tabs: TabItem[] = [
  {
    id: 'packages',
    label: 'Packages',
    icon: 'box',
    iconPath: '/icons/package-icon.png'
  },
  {
    id: 'hotels',
    label: 'Hotels',
    icon: 'building',
    iconPath: '/icons/hotel-icon.png'
  },
  {
    id: 'cabs',
    label: 'Cabs',
    icon: 'car',
    iconPath: '/icons/cab-icon.png'
  },
  {
    id: 'activities',
    label: 'Activities',
    icon: 'star',
    iconPath: '/icons/activity-icon.png'
  }
];

export default function BottomNavigation({ 
  activeTab = 'hotels', 
  onTabChange,
  className = '' 
}: BottomNavigationProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-gray-800 px-4 py-2 ${className}`}
      style={{
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        zIndex: 50
      }}
    >
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center py-2 px-3 transition-all duration-200 ${
              currentTab === tab.id 
                ? 'text-orange-500' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            style={{
              borderRadius: '12px',
              backgroundColor: currentTab === tab.id ? 'rgba(255, 106, 0, 0.1)' : 'transparent',
              minWidth: '60px'
            }}
          >
            {/* Icon placeholder - you can replace with actual icons */}
            <div 
              className="w-6 h-6 mb-1 flex items-center justify-center"
              style={{
                backgroundColor: currentTab === tab.id ? '#FF6A00' : '#6B7280',
                borderRadius: '6px'
              }}
            >
              <span className="text-white text-xs font-bold">
                {tab.icon.charAt(0).toUpperCase()}
              </span>
            </div>
            <span 
              className="text-xs font-medium"
              style={{
                fontSize: '10px',
                fontWeight: currentTab === tab.id ? 600 : 400
              }}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
