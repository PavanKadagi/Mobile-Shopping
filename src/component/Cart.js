import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, quantity, removefromcart, subTotal } from "../redux/Action";
import { useNavigate } from "react-router-dom";
import CartAmount from "./CartAmount";
import CartItem from "./CartItem";

const CartSection = styled.section`
  padding: 3rem 7rem;
  h6 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center !important;
    margin: 1rem auto;
  }

  table {
    margin: 1rem auto;
    border-collapse: collapse;
    padding: 1rem;
    width: 90%;
    font-size: 1.3rem;
    border-bottom: 0.2rem solid #f1f1f1;

    th,
    td {
      padding: 1rem;
      text-align: center;
      border-radius: 0.5rem !important;

      .btn {
        padding: 0.1rem 0.7rem;
        background: none;
        color: black;
        max-width: none;
        margin: 1rem;
      }
    }
    th {
      font-weight: 500;
      border-bottom: 0.2rem solid #f1f1f1;
    }
    tr {
      display: grid;
      text-align: center;
      grid-template-columns: 20% 20% 20% 20% 20%;
      align-items: center;
    }
  }
  .cart {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .clear {
      background-color: red;
      color: white;
      border: none;

      &:hover {
        background-color: white;
        border: 0.1rem solid red;
        color: black;
      }
    }
  }
  span {
    margin-right: 0.2rem;
  }
  .order {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .order-total {
      display: inline-block;

      margin-top: 5rem;
      padding: 2rem;

      background-color: #f1f1f1;
      p {
        display: flex;
        gap: 5rem;
        justify-content: space-between;
      }
    }
  }
`;

const EmptyCart = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-direction: column;
  img {
    width: 45%;
  }
`;

export default function Cart() {
  let cartData = useSelector((state) => state.cartData);
  // console.warn(cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = () => {
    return cartData?.reduce((initialVal, item) => {
      let { price, amount } = item;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
  };

  return (
    <>
      {cartData.length >= 1 ? (
        <CartSection>
          <h6>
            {JSON.parse(localStorage.getItem("userLogin"))?.name} Cart Items
          </h6>
          <table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </tbody>
          </table>
          <div className="cart">
            <button className="btn" onClick={() => navigate("/products")}>
              CONTINUE SHOPPING
            </button>
            <button className="btn clear" onClick={() => dispatch(clearCart())}>
              CLEAR CART
            </button>
          </div>
          <div className="order">
            <div className="order-total">
              <p>
                subtotal{" "}
                <b>
                  <span>&#8377;</span>
                  {subTotal()}.00
                </b>
              </p>
              <p>
                Shipping Fee{" "}
                <b>
                  <span>&#8377;</span>25.00
                </b>
              </p>
              <hr />
              <p>
                Order Total{" "}
                <b>
                  <span>&#8377;</span>
                  {subTotal() + 25}.00
                </b>{" "}
              </p>
            </div>
          </div>
        </CartSection>
      ) : (
        <EmptyCart>
          <img
            src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038--android.jpg"
            alt="emty-cart"
          />
          <button className="btn" onClick={() => navigate("/products")}>
            Start Shopping
          </button>
        </EmptyCart>
      )}
    </>
  );
}
