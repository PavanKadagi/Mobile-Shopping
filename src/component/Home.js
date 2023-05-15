import React from "react";
import family from "../assets/smiling-family.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeSection = styled.section`
  padding: 5rem 15%;

  .product-descriptions {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
    margin-bottom: 7rem;
    p {
      margin: 0.3rem 0;
    }
    h1 {
      font-size: 3rem;
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
  }

  .product-services {
    h2 {
      font-size: 2.5rem;
    }
    p {
      margin-bottom: 0.2rem !important;
    }
    .size {
      width: 30%;
      cursor: pointer;
    }
    .color {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeSection>
      <div className="product-descriptions">
        <div>
          <p>WELCOME TO </p>
          <h1>SwipeShop Store</h1>{" "}
          <p>
            Our website offers a wide selection of products from top brands, all
            optimized for easy browsing with features such as detailed product
            descriptions and high-quality images, making shopping with us easier
            than ever. In addition, our secure payment processing and commitment
            to providing exceptional customer service ensure that you can shop
            with confidence, knowing that your information is safe and your
            satisfaction is guaranteed. Be sure to check out our latest arrivals
            and deals today!
          </p>
          <button className="btn" onClick={() => navigate("/products")}>
            SHOP NOW
          </button>
        </div>
        <img src={family} alt="shopping img" width="45%" />
      </div>
      <div className="product-services">
        <p>CHECK NOW!</p>
        <h2>Our Features Services</h2>
        <div id="carouselExampleIndicators" className="carousel slide ">
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.takealot.com/covers_tsins/50339241/190198458018-1-pdpxl.jpg"
                className="d-block  m-auto size"
                alt="I Phone"
                onClick={() => navigate("/products")}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media.croma.com/image/upload/v1662439500/Croma%20Assets/Communication/Mobiles/Images/248911_nhv3an.png"
                className="d-block size m-auto"
                alt="samsang"
                onClick={() => navigate("/products")}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/61PW24157AL._SL1500_.jpg"
                className="d-block  m-auto size"
                onClick={() => navigate("/products")}
                alt="google"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon color"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon color"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </HomeSection>
  );
}
