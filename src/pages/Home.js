import React from 'react';
import data from '../db.json';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <ul className='products'>
      {data.products.map((x) => (
        <li>
          <div className='product'>
            <Link to={'/products/' + x.id}>
              <img className='product-image' src={x.image} alt={x.name}></img>
            </Link>
            <div className='product-name'>
              <Link to={'/products/' + x.id}>{x.name}</Link>
            </div>
            <div className='product-price'>৳{x.price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
