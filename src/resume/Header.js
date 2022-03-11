import React from 'react';

const Header = ({ children, className }) => {
  return (
    <h4
      className={
        'bg-[#d48400] w-[316px] mt-16 -ml-1 text-center font-bold text-lg font-lato-bold ' +
          className ?? ''
      }
    >
      {children}
    </h4>
  );
};

export default Header;
