import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../App";
import axios from "axios";
import styled from "styled-components";
import { FaStar, Fa } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart, removefromcart } from "../redux/Action";
import LoadingPage from "./LoadingPage";
import CartAmount from "./CartAmount";

const SingleProductSection = styled.section`
  padding: 3rem 13rem;
  /* margin: 0 auto; */
  display: grid;
  grid-template-columns: auto auto;
  gap: 3rem;

  img {
    width: 30vw !important;
  }

  .product {
    .reviews {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      .star {
        color: yellow;
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: 500;
    }

    p {
      margin: 1rem 0;
    }
    .products-price {
      font-weight: 600 !important;
    }
    .day {
      color: ${({ theme }) => theme.colors.blue};
    }
    .btn {
      color: white;
      background-color: ${({ theme }) => theme.colors.blue};
      margin: 1rem 0;
      &:hover {
        color: ${({ theme }) => theme.colors.blue};
        background-color: white;
      }
    }
    .count {
      font-size: 1.3rem;

      .btn {
        padding: 0.1rem 0.7rem;
        background: none;
        color: black;
        max-width: none;
        margin: 1rem;
      }
    }
    .product-icons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        img {
          width: 3rem !important;
        }
      }
    }

    .specifications {
      font-size: 1.3rem;
      display: grid;
      grid-template-columns: auto auto;
      padding: 1rem;
    }
  }
`;

export default function SingleProduct() {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1);
  const stock = 5;

  const callSingleProduct = async () => {
    try {
      let res = await axios.get(`${url}/single?${_id}`);
      // let res = await fetch(`${url}/single?${_id}`);
      // res = await res.json()
      setData(res.data.singleProduct);
      setLoading(true);
      // console.log(res.data.singleProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  useEffect(() => {
    callSingleProduct();
  }, []);

  const handleCountAdd = (id) => {
    navigate("/cart");
    dispatch(addtocart(data, amount, id));
  };

  const star = Array.from({ length: random(6, 1) }, (ele, index) =>
    index > ele ? "3425" : <FaStar className="star" key={index} />
  );

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      {loading ? (
        <SingleProductSection>
          <img src={data.img} alt={data.company} />
          <div className="product">
            <h2>{data.model}</h2>
            <div className="reviews">
              <p>{star}</p>
              <p>({random(20, 50)} customer reviews)</p>
            </div>
            <p className="products-price">
              MRP: <span>&#8377; </span>
              <del>{data.price}.00</del>
            </p>
            <p className="products-price day">
              Deal of the Day: <span className="day">&#8377; </span>
              {data.price - random(1000, 7000)}.00
            </p>
            <p>{data.description}</p>
            <div className="product-icons">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                <p>Free Delivery</p>
              </div>
              <div>
                <img
                  src="https://static.thenounproject.com/png/2247068-200.png"
                  alt="pay"
                />
                <p>Pay on Delivery</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
                <p>30 Days Replacement</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25 "
                  fill="currentColor"
                  className="bi bi-shield-fill-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                  />
                </svg>
                <p>2 Year Warranty</p>
              </div>
            </div>
            <p>
              {" "}
              Available : <span className="product-price">In stock</span>
            </p>
            <p>
              Brand : <span className="product-price">{data.company}</span>
            </p>
            <hr />

            <CartAmount
              amount={amount}
              setIncrease={setIncrease}
              setDecrease={setDecrease}
            />

            <button className="btn" onClick={() => handleCountAdd(data._id)}>
              ADD TO CART
            </button>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header collapsed" id="headingOne">
                  <button
                    className="accordion-button"
                    style={{ fontSize: "1.3rem" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded={false}
                    aria-controls="collapseOne"
                  >
                    Specifications
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="specifications">
                      <div>
                        <p>RAM</p>
                        <p>ROM</p>
                        <p>Camera</p>
                        <p>Display Type</p>
                        <p>Processor Type</p>
                        <p>Operating System</p>
                      </div>
                      <div>
                        <p>{data.ram}</p>
                        <p>{data.rom}</p>
                        <p>{data.camera}</p>
                        <p>{data.display}</p>
                        <p>{data.processor}</p>
                        <p>{data.os}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SingleProductSection>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
