import { css } from '@emotion/react';

export const cardBase = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 15px;
  .card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 6px;
    &-image {
      img {
        max-width: 100%;
        display: block;
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }
    &-body {
      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
      }
      h4 {
        margin: 0;
        font-size: 21px;
      }
      p {
        margin: 0;
        font-size: 15px;
        line-height: 24px;
      }
    }
    &-footer {
      button {
        border: none;
        padding: 5px 15px;
        border-radius: 6px;
        background-color: #016dc3;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
`;

export const cartBase = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
  .cart {
    &-card {
      display: grid;
      grid-template-columns: 62px 1fr 200px;
      gap: 24px;
      margin: 20px 0;
      padding: 15px 0;
      border-top: 1px solid #ddd;
      &--image {
        max-width: 100%;
        width: 62px;
        display: block;
      }
      &--body {
        h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 24px;
        }
        p {
          margin: 0;
          font-size: 15px;
          line-height: 20px;
        }
      }
      &--footer {
        text-align: center;
        button {
          border: none;
          padding: 5px 15px;
          border-radius: 6px;
          background-color: #016dc3;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          text-align: center;
        }
      }
    }
    &-checkout {
      display: flex;
      justify-content: flex-end;
      gap: 24px;
      border-top: 1px solid #ddd;
      padding: 30px 0;
      button {
        border: none;
        padding: 10px 25px;
        border-radius: 6px;
        background-color: #016dc3;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
      }
    }
    &-empty {
      text-align: center;
      width: 400px;
      height: 300px;
      margin: auto;
      border-radius: 6px;
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        color: #016dc3;
      }
    }
  }
`;

export const navBase = css`
  background-color: #016dc3;
  color: #fff;
  padding: 3px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #fff;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    li {
      display: block;
      font-size: 16px;
      font-weight: 400;
      sup {
        background-color: #fff;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: inline-block;
        line-height: 18px;
        color: #333;
        text-align: center;
        top: -20px;
      }
    }
  }
`;
