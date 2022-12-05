import React from 'react';
import { cardBase } from '../styles/MainStyle';
import productList from '../data/productList.json';

export const Home = () => {
  return (
    <div css={cardBase}>
      {productList.products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <div className="card-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="card-body">
              <h3>{product.name}</h3>
              <p>{product.detail}</p>
              <h4>${product.price}</h4>
            </div>
            <div className="card-footer">
              <button>Add to cart</button>
              {/* <button>Remove from cart</button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
