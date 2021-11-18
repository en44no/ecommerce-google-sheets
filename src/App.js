import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';

const App = function () {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(`https://sheet.best/api/sheets/${process.env.REACT_APP_KEY}`);
      const data = await res.json();

      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto">
      <NavBar/>
      <Products products={products} />
    </div>
  );
};

export default App;
