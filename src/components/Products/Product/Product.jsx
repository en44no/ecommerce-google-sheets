import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Product = (props) => {
  const { product } = props;

  return (
    <>
      <div className='border-r-2'>
        <img src={product.image} className='transform transition duration-400 hover:scale-110 p-2 w-20 h-20' />
      </div>
      <div className='ml-4 flex-1 justify-between self-center mr-5'>
        <div className='flex justify-between'>
          <div>
            <h3 className='font-semibold'>{product.name}</h3>
            <h3 className='text-sm'>{product.description}</h3>
          </div>
          <h5 className='font-bold self-center'>${product.price}</h5>
        </div>
      </div>
      <div className='border-l-2 hover:bg-gray-200 rounded-r-md p-3 flex items-center cursor-pointer'>
        <button><MdOutlineAddShoppingCart className='text-xl' /></button>
      </div>
    </>
  );
};

export default Product;
