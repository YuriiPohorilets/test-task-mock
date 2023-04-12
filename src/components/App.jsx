import { useEffect, useState } from 'react';
import { getProducts } from 'services/productsApi';
import { FilterBar } from './FilterBar/FilterBar';
import { ProductsList } from './ProductsList/ProductsList';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const productsCounter = filteredProducts.length;

  return (
    <>
      <FilterBar onChange={onFilter} value={filter} counter={productsCounter} />

      <ProductsList products={filteredProducts} />
    </>
  );
};
