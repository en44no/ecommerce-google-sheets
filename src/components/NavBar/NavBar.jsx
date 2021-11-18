import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const NavBar = () => {
  return (
    <nav className='sticky w-full top-0 z-50 h-14 px-4 flex items-center justify-between flex-wrap shadow-sm bg-blue-400 text-white'>
      <div className='font-bold text-xl'>Almacen</div>
      <div className='relative -mr-1 mt-1 cursor-pointer'>
        <button><MdOutlineShoppingCart className='text-3xl ml-4 mr-3' /></button>
        <div className='absolute text-center bg-red-500 rounded-full w-5 h-5 -top-1 right-1'>
          <h6 className='font-bold text-sm'>1</h6>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
