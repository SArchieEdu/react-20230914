import React, { useState } from "react";

export const MenuItem = ({ product }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
      {product.name} | {product.price}$ | Quantity:
      <button
        onClick={() => {
          if (amount > 0 && amount <= 5) setAmount(amount - 1);
        }}
      >
        -
      </button>
      {amount}
      <button
        onClick={() => {
          if (amount >= 0 && amount < 5) setAmount(amount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
