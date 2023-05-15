import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartAmountSection = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 2rem;

  svg {
    cursor: pointer;
  }
`;

export default function CartAmount({ amount, setDecrease, setIncrease }) {
  return (
    <CartAmountSection>
      <FaMinus onClick={() => setDecrease()} />
      <span>{amount}</span>
      <FaPlus onClick={() => setIncrease()} />
    </CartAmountSection>
  );
}
