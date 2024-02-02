import React from "react";
import { CartItem } from "..";

function CartList({ cartItems }) {
  return (
    <div className="cart-list">
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
}

export default CartList;
