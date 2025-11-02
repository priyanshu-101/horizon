import React from 'react';
import { cn } from '@/utils';
import { type InputProps } from '@/types';

const Input: React.FC<InputProps> = ({
  className,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  error,
  label,
  onChange,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className='w-full'>
      {label && (
        <label className='block text-sm font-gilroy-semibold text-secondary-700 mb-1'>
          {label}
          {required && <span className='text-error-500 ml-1'>*</span>}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'w-full px-3 py-2 border border-secondary-300 rounded-lg',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'disabled:bg-secondary-50 disabled:text-secondary-500 disabled:cursor-not-allowed',
          'transition-colors duration-200',
          error && 'border-error-500 focus:ring-error-500',
          className
        )}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <p className='mt-1 text-sm text-error-600 font-medium'>{error}</p>
      )}
    </div>
  );
};

export default Input;
