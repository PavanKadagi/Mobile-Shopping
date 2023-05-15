import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { url } from "../App";
import { NavLink, useSearchParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const ProductsSection = styled.section`
  padding: 4rem 8rem;

  display: grid;
  grid-template-columns: 15rem auto;
  gap: 3rem;

  .product-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input[type="text"] {
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      border: none;
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.colors.blue};
    }

    select {
      font-size: 1.3rem;
    }

    h6 {
      margin: 0.7rem 0;
      font-weight: 600;
      font-size: 1.6rem;
    }
  }

  div {
    .product-right {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    select {
      font-size: 1.3rem;
    }
    .product-right-card {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;

      .card {
        box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;

        figure {
          border-top-right-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
          width: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s linear;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s linear;
          }
          &:hover::after {
            width: 100%;
          }
          &:hover img {
            transform: scale(1.2);
          }
          img {
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
          }
        }
        .card-data {
          padding: 0 1.5rem;

          h3 {
            margin: 0.7rem 0;
            font-weight: 600;
            opacity: 0.8;
            font-size: 1.6rem;

            span {
              margin-right: 0.2rem;
            }
          }
          p {
            opacity: 0.8;
            font-size: 1.3rem;
            font-weight: 500;
          }

          .card-info {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }

          button {
            border: 0.1rem solid rgb(98 84 243);
            color: ${({ theme }) => theme.colors.blue};
            margin: 1.5rem auto;
            /* margin: 1rem 0 2rem 0; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;

            &:hover {
              background-color: ${({ theme }) => theme.colors.blue};
              color: #fff;
            }
            a {
              padding: none;
              cursor: none;
            }
          }
        }
      }
    }

    .product-right-pagination {
      margin: 2rem auto;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        padding: 0.5rem 1rem;
      }
    }
  }
`;

export default function Products() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  let [data, setData] = useState([]);
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState(150000);
  const [pagination, setPagination] = useSearchParams();
  let [priceData, setPriceData] = useState([]);

  let page = pagination.get("page") || 1;
  let limit = pagination.get("limit") || 9;

  const callAllProducts = async () => {
    try {
      let res = await fetch(`${url}/products?page=${page}&limit=${limit}`);
      res = await res.json();
      console.log("data", res.data);
      setData([...res.data]);
      setPriceData([...res.data]);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      callAllProducts();
    }, 300);
    return () => clearTimeout(timeOut);
  }, [pagination]);

  const handleSearch = async (e) => {
    try {
      setSearch(e.target.value);
      let res = await fetch(`${url}/products?model=${e?.target?.value}`);
      res = await res.json();
      setPriceData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompany = async (e) => {
    try {
      setCompany(e.target.value);
      let res = await fetch(`${url}/products?company=${e.target.value}`);
      res = await res.json();
      setPriceData([...res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = async (e) => {
    try {
      let res = await fetch(`${url}/products?sort=${e.target.value}`);
      res = await res.json();
      // setData(res.data)
      // console.log('sort',res)
      setPriceData(res.data);
      // setPagination({page:e.target.innerText,limit:9})
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    if (e.target.value === 0) {
      priceData = data?.filter((currentEle) => {
        console.log("Original Price Sorting");
        return (currentEle.price = e.target.value);
      });
    } else {
      priceData = data.filter((currentEle) => {
        return currentEle.price <= e.target.value;
      });
    }
    setPriceData(priceData);
  };

  const handlePagination = async (e) => {
    // another way for pagination
    // let res = await fetch(`${url}/products?page=${e.target.innerText}&limit=${9}`);
    // res = await res.json();
    // console.log(res);
    // setData(res.data)

    setPagination({ page: e.target.innerText, limit: 9 });
  };

  const handleClear = () => {
    callAllProducts();
  };

  return (
    <>
      {loading ? (
        <ProductsSection>
          <div className="product-left">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
            />
            <h6>Company</h6>
            <select name="sort" value={company} onChange={handleCompany}>
              <option>All</option>
              <option>I Phone</option>
              <option>Google</option>
              <option>Samsung</option>
              <option>One Plus</option>
              <option>Real Me</option>
            </select>
            <h6>Price</h6>
            <p>
              <span>&#8377;</span>
              {price}.00
            </p>
            <input
              type="range"
              value={price}
              onChange={(e) => handlePrice(e)}
              min={0}
              max={150000}
            />
            <button className="btn" onClick={handleClear}>
              Clear Filter
            </button>
          </div>

          <div>
            <div className="product-right">
              <p>{priceData?.length || 0} total products</p>
              <select onChange={handleSort}>
                {/* <option >All</option> */}
                <option value="price">Price:Low to High</option>
                <option value="-price">Price:High to Low</option>
                <option value="model">a-z</option>
                <option value="-model">z-a</option>
              </select>
            </div>

            {/* -------------------------------------------------- */}

            <div className="product-right-card">
              {priceData ? (
                priceData.map((data, key) => (
                  <div key={key} className="card">
                    <figure>
                      <img src={data.img} alt={data.name} />
                    </figure>
                    <div className="card-data">
                      <h3>{data.model}</h3>
                      <h3>
                        <span>&#8377;</span>
                        {data.price}
                      </h3>
                      <div className="card-info">
                        <p>{data.camera}</p>
                      </div>
                      <NavLink to={`/single/_id=${data._id} `}>
                        <button className="btn">Read More</button>
                      </NavLink>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Result Found</p>
              )}
            </div>
            <div className="product-right-pagination">
              <button className="btn" onClick={handlePagination}>
                1
              </button>
              <button className="btn" onClick={handlePagination}>
                2
              </button>
              <button className="btn" onClick={handlePagination}>
                3
              </button>
            </div>
          </div>
        </ProductsSection>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
