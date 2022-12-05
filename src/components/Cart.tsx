import React from 'react';
import productList from '../data/productList.json';
import { cartBase } from '../styles/MainStyle';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';

export const Cart = () => {
  return (
    <div css={cartBase}>
      <div className="cart">
        {productList.products.map((product) => {
          return (
            <div className="cart-card">
              <div className="cart-card--image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="cart-card--body">
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
              </div>
              <div className="cart-card--footer">
                <h4>{product.price}</h4>
                <button>Remove</button>
              </div>
            </div>
          );
        })}
        <div className="cart-checkout">
          <button>Clear all</button>
          <button>Checkout</button>
        </div>
      </div>
      <div className="cart-empty">
        <div>
          <BiCartAlt size={100} color="#016dc3" />
          <h2>Cart is empty</h2>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};
