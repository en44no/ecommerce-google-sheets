import React from 'react';
import Search from '../Search';
import Product from './Product/Product';

const Products = (props) => {
  const { products, filterText, searchProduct } = props;

  const productsArray = products.filter((product) => product.name.toLowerCase()
    .includes(filterText.toLowerCase()));

  return (
    <>
      <Search searchProduct={searchProduct} />
      <div className='flex justify-evenly flex-wrap mt-3'>
        {productsArray.length === 0
          ? (
            <h4 className='text-md'>No contamos con el producto que buscas.</h4>
          )
          : (
            productsArray.map(product => (
              <div key={product.name} className='flex w-full  mx-2 mb-2 overflow-hidden p-2 border-2 rounded-md shadow-sm'>
                <Product product={product}/>
              </div>
            ))
          )}
      </div>
    </>
  );
};

export default Products;
