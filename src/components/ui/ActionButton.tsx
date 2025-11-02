import { Logo } from './Logo';

interface ActionButtonProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ActionButton({ 
  onClick, 
  className = '', 
  size = 'md' 
}: ActionButtonProps) {
  const sizeConfig = {
    sm: {
      outer: { width: '60px', height: '60px' },
      inner: { width: '48px', height: '48px' },
      logo: 16
    },
    md: {
      outer: { width: '72px', height: '72px' },
      inner: { width: '56px', height: '56px' },
      logo: 18
    },
    lg: {
      outer: { width: '84px', height: '84px' },
      inner: { width: '64px', height: '64px' },
      logo: 20
    }
  };

  const config = sizeConfig[size];

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{ 
        backgroundColor: '#FFFFFF',
        width: config.outer.width,
        height: config.outer.height,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '50%',
        opacity: 1,
        transition: 'all 300ms ease-out'
      }}
    >
      {/* Orange inner ellipse */}
      <div 
        className="flex items-center justify-center"
        style={{ 
          backgroundColor: '#FF6A00',
          width: config.inner.width,
          height: config.inner.height,
          borderRadius: '50%'
        }}
      >
        {/* White Horizon logo */}
        <Logo size={config.logo} style={{ color: '#FFFFFF' }} />
      </div>
    </button>
  );
}
