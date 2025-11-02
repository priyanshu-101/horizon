import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BackButton({ 
  onClick, 
  className = '', 
  size = 'md' 
}: BackButtonProps) {
  const sizeConfig = {
    sm: {
      button: { width: '40px', height: '40px' },
      icon: 20
    },
    md: {
      button: { width: '48px', height: '48px' },
      icon: 26
    },
    lg: {
      button: { width: '56px', height: '56px' },
      icon: 32
    }
  };

  const config = sizeConfig[size];

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center transition-all hover:scale-105 active:scale-95 ${className}`}
      style={{ 
        backgroundColor: '#FFFFFF',
        width: config.button.width,
        height: config.button.height,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '50%',
        opacity: 1,
        transition: 'all 300ms ease-out'
      }}
    >
      <MdKeyboardDoubleArrowLeft 
        style={{ 
          color: '#FF6A00',
          fontSize: config.icon,
          fontWeight: 'bold'
        }} 
      />
    </button>
  );
}
