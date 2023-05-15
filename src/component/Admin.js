import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { url } from "../App";
import { Toaster, toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const AdminSection = styled.section`
  margin: 2rem auto;
  width: 95%;
  box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 1rem;
  overflow-x: auto;

  .message {
    margin: 2rem 0;
    color: red;
    text-align: end;
    white-space: nowrap; /* prevent text from wrapping */
    overflow: hidden; /* hide overflowing text */
    animation: scroll 15s linear infinite; /* set animation properties */
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    } /* start position */
    100% {
      transform: translateX(-100%);
    } /* end position */
  }

  .admin-form {
    gap: 2rem;

    .admin-form-align {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .admin-form-middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      margin: 2rem 0;

      #description {
        width: 49.1% !important;
        font-size: 1.3rem;
        opacity: 0.9;
        resize: none;
        padding: 0.8rem 1.5rem;
        color: ${({ theme }) => theme.colors.textColor};
        border: 0.1rem solid ${({ theme }) => theme.colors.blue};
      }

      .admin-form-middle-left {
        display: flex;
        justify-content: space-between !important;
        align-items: center;
        gap: 2rem;
        input {
          width: 28rem;
        }
      }
    }

    input {
      border-color: #fff;
      margin-top: 1rem 0;
      outline: none;
      border: none;
      background: none;
      width: 30rem;
      font-size: 1.3rem;
      opacity: 0.9;
      padding: 0.8rem 1.5rem;
      color: ${({ theme }) => theme.colors.textColor};
      border: 0.1rem solid ${({ theme }) => theme.colors.blue};

      &:focus {
        border: 0.1rem solid ${({ theme }) => theme.colors.mainTextColor};
      }
    }
    button {
      margin: 0 auto !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const AdminNavbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: .7rem 4rem;
box-shadow: 0 .1rem .2rem 0 rgba(0,0,0,.2);
a{
  font-size: 1.3rem;
}
`

export default function Admin() {
  const [admin, setAdmin] = useState({
    company: "",
    model: "",
    price: "",
    img: "",
    description: "",
    rom: "",
    ram: "",
    camera: "",
    processor: "",
    display: "",
    os: "",
  });

  const navigate = useNavigate();



  const upload = async (e) => {
    e.preventDefault();
    // console.log(admin);
    const {
      company,
      model,
      price,
      img,
      description,
      rom,
      ram,
      camera,
      processor,
      display,
      os,
    } = admin;

    let res = await fetch(`${url}/addproducts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        model,
        price,
        img,
        description,
        rom,
        ram,
        camera,
        processor,
        display,
        os,
      }),
    });
    res = await res.json();
    // console.log("err", res);
    if (res.message) {
      toast.success(res.message);
    }
    if (res.error) {
      toast.error(res.error);
    }
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAdmin({ ...admin, [name]: value });
  };

 

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AdminNavbar>
      <h1>Admin</h1>
      <NavLink  to="/logout">
                  Logout
       </NavLink>
      </AdminNavbar>
      <AdminSection>
        <p className="message">
          Only the following company names are acceptable: iPhone, Google,
          Samsung, OnePlus, and Realme.
        </p>
        <form className="admin-form" method="POST">
          <div className="admin-form-align">
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              autoComplete="off"
              required={true}
              value={admin.company}
              onChange={handleInput}
            />
            <input
              type="text"
              name="model"
              placeholder="Enter your model name"
              autoComplete="off"
              required={true}
              value={admin.model}
              onChange={handleInput}
            />
            <input
              type="number"
              name="price"
              placeholder="Enter your price"
              autoComplete="off"
              required={true}
              value={admin.price}
              onChange={handleInput}
            />
            <input
              type="url"
              name="img"
              placeholder="Enter your image url"
              autoComplete="off"
              required={true}
              value={admin.img}
              onChange={handleInput}
            />
          </div>
          <div className="admin-form-middle">
            <textarea
              rows={5}
              cols={10}
              id="description"
              className="description"
              type="text"
              name="description"
              placeholder="Enter your description "
              autoComplete="off"
              required={true}
              value={admin.description}
              onChange={handleInput}
            />
            <div className="admin-form-middle-left">
              <input
                type="text"
                name="ram"
                placeholder="Enter your RAM details"
                autoComplete="off"
                required={true}
                value={admin.ram}
                onChange={handleInput}
              />
              <input
                type="text"
                name="rom"
                placeholder="Enter your ROM details"
                autoComplete="off"
                required={true}
                value={admin.rom}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="admin-form-align">
            <input
              type="text"
              name="camera"
              placeholder="Enter your camera details"
              autoComplete="off"
              required={true}
              value={admin.camera}
              onChange={handleInput}
            />
            <input
              type="text"
              name="processor"
              placeholder="Enter your processor details"
              autoComplete="off"
              required={true}
              value={admin.processor}
              onChange={handleInput}
            />
            <input
              type="text"
              name="display"
              placeholder="Enter your display details"
              autoComplete="off"
              required={true}
              value={admin.display}
              onChange={handleInput}
            />
            <input
              type="text"
              name="os"
              placeholder="Enter your os details"
              autoComplete="off"
              required={true}
              value={admin.os}
              onChange={handleInput}
            />
          </div>
          <button onClick={upload} className="btn">
            Upload
          </button>
        </form>
      </AdminSection>
    </>
  );
}
