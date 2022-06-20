import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../db.json';

export default function ProductDescription() {
  const params = useParams();
  const product = data.products.find((x) => x.id === params.id);
  console.log('product', product);
  console.log('params', params);
  console.log('products', data.products);
  return (
    <div>
      <div className='back-to-result'>
        <Link to='/'>Back to result</Link>
      </div>
      <div className='details'>
        <div className='details-image'>
          <img src={product.image} alt='product'></img>
        </div>
        <div className='details-info'>
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>4.5 Stars (50 Reviews)</li>
            <li>
              Price: <b>৳ {product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className='details-action'>
          <ul>
            <li>Price: ৳ {product.price}</li>
            <li>Status: Instock</li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className='button primary'>Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
