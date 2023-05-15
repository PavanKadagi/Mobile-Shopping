import { url } from "../App";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const VerifyPassword = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function EmailVerifyed() {
  const navigate = useNavigate();
  const [id, setId] = useSearchParams("");

  const verifyMail = async () => {
    let res = await fetch(`${url}/verify?${id}`, { method: "GET" });
    res = await res.json();
    console.log("verified", res);
    if (res.error || !res) {
      navigate("/");
      alert(res.error);
    }
    if (res.message) {
      alert(res.message);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      verifyMail();
    }, 300);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <VerifyPassword>
      <button className="btn" onClick={() => navigate("/signin")}>
        Go To Login
      </button>
    </VerifyPassword>
  );
}
