import React from 'react';
import { navBase } from '../styles/MainStyle';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { FcShop } from 'react-icons/fc';
import { CiHome } from 'react-icons/ci';

export const Navbar = () => {
  return (
    <div css={navBase}>
      <Link to="/">
        <FcShop size={42} />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <CiHome size={24} />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span>
              <BiCartAlt size={24} />
            </span>
            <sup>7</sup>
          </Link>
        </li>
      </ul>
    </div>
  );
};
