import React from 'react';
import Search from '../Search';
import Product from './Product/Product';

const Products = (props) => {
  const { products } = props;

  return (
    <>
      <Search/>
      <div className='flex justify-evenly flex-wrap mt-3'>
        {products.map(product => (
          <div key={product.name} className='flex w-full  mx-2 mb-2 overflow-hidden p-2 border-2 rounded-md shadow-sm'>
            <Product product={product}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
