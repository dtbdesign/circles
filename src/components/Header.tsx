import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-center items-center pt-8 pb-4 px-2 bg-black">
      <div className="font-bold" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>
        <img
          src="/logo/circles.svg"
          alt="circles logo"
          className="h-4 md:h-6 max-w-xs object-contain"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
        />
      </div>
    </header>
  );
};

export default Header;