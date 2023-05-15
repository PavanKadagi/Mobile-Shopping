import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
  padding: 1rem 3rem;
  position: relative;
  width: 100% !important;
  top: 0;
  left: 0;
  right: 0;

  h1 {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.blue} !important;
      text-shadow: 0 0.1rem 0.1rem rgba(188, 143, 143, 0.5) !important;
    }
  }

  .nav-link {
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mainTextColor};
    position: relative;
    transition: border 3s ease-in;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.1rem;
    flex-direction: row;

    &:hover {
      color: ${({ theme }) => theme.colors.blue} !important;
      text-shadow: 0 0.1rem 0.1rem rgba(188, 143, 143, 0.5) !important;
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.blue}!important;
    text-shadow: 0 0.2rem 0.3rem rgba(188, 143, 143, 0.5);
  }

  li {
    padding: 0 1.5rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;

    .profileInfo {
      display: ${({ profileInfo }) => (profileInfo ? "flex" : "none")};
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      position: absolute;
      z-index: 999;
      top: 6rem;
      background-color: #fff;
      right: 4rem;
      border-radius: 0.4rem;
      width: 15rem;
      box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
      padding: 1rem;

      .borderBottom {
        border: 0.1rem solid #f1f1f1;
        width: 100%;
        margin: 0.7rem 0;
      }
    }
    a {
      padding-bottom: 0.3rem;
      font-family: "Lora", serif;
    }
    .cart-length {
      color: ${({ theme }) => theme.colors.blue} !important;
      margin-bottom: 1rem;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  let showCart = useSelector((state) => state.cartData);
  const name = JSON.parse(localStorage.getItem("userLogin"))?.name;
  return (
    <NavbarLink className="navbar-space">
      <h1 onClick={() => navigate("/")}>SwipeShop</h1>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact">
            Contact
          </NavLink>
        </li>

        {localStorage.getItem("userLogin") ? (
          <>
            <li className="nav-item" style={{ marginTop: ".4rem" }}>
              Welcome, {name}
            </li>
            <li className="nav-item">
              <div>
                <NavLink className="nav-link " to="/logout">
                  Logout
                </NavLink>
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink className="nav-link " to="/signup">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/signin">
                Log In
              </NavLink>
            </li>
          </>
        )}
        <li className="nav-item">
          <NavLink className="nav-link " to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </NavLink>
          <span className="cart-length">{showCart.length}</span>
        </li>
      </ul>
    </NavbarLink>
  );
}
