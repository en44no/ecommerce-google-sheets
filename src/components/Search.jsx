import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  return (
    <div className='flex mt-2 px-2 relative'>
      <label className=' w-full text-gray-300 focus-within:text-gray-400'>
        <MdSearch className='pointer-events-none text-xl absolute top-2.5 left-3'/>
        <input type="text" placeholder='Busca productos...' className='w-full px-3 py-2 pl-8 border-b-2  shadow-sm focus:border-gray-300 focus:outline-none' />
      </label>
    </div>
  );
};

export default Search;
