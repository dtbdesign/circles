import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      className={`py-4 px-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold text-lg md:text-xl rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;