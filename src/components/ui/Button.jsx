import React, { forwardRef } from 'react';

const Button = forwardRef(function Button(
  { 
    children, 
    onClick, 
    variant = 'primary', 
    className = '',
    disabled = false,
    ...props 
  }, ref
) {
  const baseClasses =
    "relative overflow-hidden px-3 sm:px-4 lg:px-6 py-2 rounded-full cursor-pointer transition-all duration-200 text-sm sm:text-base lg:text-lg  disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-primary-light text-white hover:bg-secondary-900 hover:scale-110 hover:text-white",
    secondary: "bg-white text-primary-light hover:bg-primary-light hover:text-white hover:scale-110",
    tertiary: "bg-white text-primary-light hover:bg-secondary-900 hover:text-white hover:scale-110"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div 
        ref={ref} // 👈 Forwarded ref here

    className="flex rounded-full shadow-xs w-fit shadow-black/20">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${combinedClasses}`}
        {...props}
      >
        {children}

        {/* Continuous Shine Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine w-[25%]" />
        </div>
      </button>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(400%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
});

export default Button;
