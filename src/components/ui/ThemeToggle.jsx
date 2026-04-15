import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../AppIcon';

const ThemeToggle = ({ 
  variant = 'default', // 'default', 'minimal', 'icon-only'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  showLabel = true,
  ...props 
}) => {
  const { theme, toggleTheme, isDark, mounted } = useTheme();

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    );
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const variants = {
    default: `
      relative inline-flex items-center justify-center rounded-full
      bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
      border border-gray-200 dark:border-gray-700
      transition-all duration-300 ease-in-out
      hover:scale-105 active:scale-95
      shadow-sm hover:shadow-md
      ${sizeClasses[size]}
    `,
    minimal: `
      relative inline-flex items-center justify-center rounded-lg
      bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800
      transition-all duration-200 ease-in-out
      ${sizeClasses[size]}
    `,
    'icon-only': `
      relative inline-flex items-center justify-center rounded-full
      bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
      transition-all duration-300 ease-in-out
      hover:scale-105 active:scale-95
      ${sizeClasses[size]}
    `
  };

  const labelVariants = {
    default: 'ml-2 text-sm font-medium text-gray-700 dark:text-gray-300',
    minimal: 'ml-2 text-sm text-gray-600 dark:text-gray-400',
    'icon-only': ''
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${variants[variant]} ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      {...props}
    >
      {/* Animated icon transition */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun icon for light mode */}
        <Icon
          name="Sun"
          size={iconSizes[size]}
          className={`
            absolute transition-all duration-300 ease-in-out
            ${isDark 
              ? 'opacity-0 rotate-90 scale-75' 
              : 'opacity-100 rotate-0 scale-100'
            }
            text-yellow-500
          `}
        />
        
        {/* Moon icon for dark mode */}
        <Icon
          name="Moon"
          size={iconSizes[size]}
          className={`
            absolute transition-all duration-300 ease-in-out
            ${isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
            }
            text-blue-400
          `}
        />
      </div>

      {/* Label */}
      {showLabel && variant !== 'icon-only' && (
        <span className={labelVariants[variant]}>
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </div>
    </button>
  );
};

// Alternative compact toggle for headers/navbars
export const CompactThemeToggle = ({ className = '', ...props }) => {
  return (
    <ThemeToggle
      variant="icon-only"
      size="sm"
      showLabel={false}
      className={`hover:shadow-lg ${className}`}
      {...props}
    />
  );
};

// Toggle with system preference detection
export const SmartThemeToggle = ({ className = '', ...props }) => {
  const { theme, toggleTheme, isDark, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={`inline-flex items-center space-x-2 ${className}`}>
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center space-x-3 ${className}`}>
      <ThemeToggle variant="icon-only" size="sm" {...props} />
      
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">Auto</span>
        <button
          onClick={toggleTheme}
          className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out
              ${isDark ? 'translate-x-4' : 'translate-x-0.5'}
            `}
          />
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;
