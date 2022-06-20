import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../db.json';

export default function ProductDescription() {
  const params = useParams();
  const product = data.products.find((x) => x.id === params.id);
  console.log('product', product);
  console.log('params', params);
  console.log('products', data.products);
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
